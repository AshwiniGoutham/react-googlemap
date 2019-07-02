import React from 'react'
import { statements } from '@babel/template';
import MapComp from './googlemaps'
import Geocode from "react-geocode";
 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBs40NCgfULDURH-1IntiSPYVZ5OzQRI6M");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();

class PopulateStates extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            allstates:[],
            allcities:[],
            cityselected:'',
            lat:12.972442,
            lon:77.580643
        })
    }

    componentDidMount(){
        fetch("http://localhost:9000/api/products")
        .then(res => res.json())
        .then(
          (result) => {
             // alert(result)
            this.setState({
                allstates: result
            });
           // alert(result)
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    loadCity = (e) =>{
       // alert(e.target.value)
       this.setState({
         cityselected:e.target.value  
        })
        fetch("http://localhost:44380/api/products/"+e.target.value)
        .then(res => res.json())
        .then(
          (result) => {
             // alert(result)
            this.setState({
                allcities: result
            });
           // alert(result)
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    loadMap = (e) => {
        Geocode.fromAddress(this.state.cityselected).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
              this.setState({
                  lat:lat,
                  lon:lng
              })
            },
            error => {
              console.error(error);
            }
          )
    }
    render(){
        return(
            <div>
            <table>
                    <tbody>
                    <tr>
                        <td><label className="control-label col-sm-offset-2 col-sm-2" htmlFor="states">States</label></td>
                        <td><select id="states" className="form-control" value={this.state.allstates.state} onChange={this.loadCity}>
                            <option value="">None</option>
                        { 
                            this.state.allstates.map((item,index) =>(
                            <option key={index} value={item}>{item}</option>
                            ))
                        } 
                        </select>
                        </td>
                        <td><label className="control-label col-sm-offset-2 col-sm-2" htmlFor="cities">Cities</label></td>
                        <td><select id="cities" className="form-control">
                                <option value="">None</option>
                            { 
                                this.state.allcities.map((item,index) =>(
                                <option key={index} value={item}>{item}</option>
                                ))
                            } 
                            </select>
                        </td>
                        <td>
                            <input type="button" value="Load Map" onClick={this.loadMap}/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <MapComp lat={this.state.lat} long={this.state.lon} />
                <span>{this.state.lat} -- {this.state.lon}</span>
                </div>
             
               
        // <div className="form-group">
            
        //     <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="states">States</label>
        //     <div className="col-sm-2 col-md-2" >
        //         <select id="states" className="form-control" value={this.state.allstates.state}>
        //         <option value="">None</option>
        //     { 
        //         this.state.allstates.map((item,index) =>(
        //           <option key={index} value={item}>{item}</option>
        //         ))
        //     } 
        //         </select> 
        //     </div>
        // </div>
        
        )
    }
}
export default PopulateStates;