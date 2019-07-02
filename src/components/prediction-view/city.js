import React from 'react'
import { statements } from '@babel/template';

class PopulateStates extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            allstates:[]
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

    render(){
        return(
           <select id="states" className="form-control" value={this.state.allstates.state}>
                <option value="">None</option>
            { 
                this.state.allstates.map((item,index) =>(
                  <option key={index} value={item}>{item}</option>
                ))
            } 
            </select> 
        )
    }
}
export default PopulateStates;