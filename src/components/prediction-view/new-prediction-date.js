import React from 'react'
import PopulateStates from './states';

class PredictionDate extends React.Component{
    render () {
        return (
            <div className="form-group">
                <h3>New Prediction</h3>

               <PopulateStates />
                {/* <table>
                    <tbody>
                    <tr>
                        <td><label className="control-label col-sm-offset-2 col-sm-2" htmlFor="states">States</label></td>
                        <td><PopulateStates /></td>
                        
                    </tr>
                    </tbody>
                </table> */}
            </div>
            
        )
    }
}

export default PredictionDate;