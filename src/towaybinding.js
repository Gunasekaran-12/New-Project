import React,{Component} from 'react';
class TwoWayBinding extends Component{
    constructor()
    {
        super()
        this.state={
            inputValue : ' '
        }
    }
    handleChangeInput=(event)=>
    {
        this.setState({
            inputValue : event.target.value
        })
    }
render()
{
    return(
        <div>
            <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}></input>
            <h1>{this.state.inputValue}</h1>
        </div>
    )
}
}
export default TwoWayBinding;