import React from 'react';

class Main extends React.Component {

	constructor(){
		super()
		this.state = {
			number:0
		}
this.incrementPressed = this.incrementPressed.bind(this);
this.decrementPressed = this.decrementPressed.bind(this);
this.resetPressed = this.resetPressed.bind(this);
}

incrementPressed(){
this.setState(()=>{
this.state.number = this.state.number+1
return this.state.number
}
)
}

decrementPressed(){
this.setState(()=>{
this.state.number = this.state.number-1
return this.state.number
}
)
}

resetPressed(){
this.setState(()=>{
this.state.number = 0
return this.state.number
}
)
}

render(){

return (
    <div>
        <button onClick={this.incrementPressed}>Increment</button>
        <button Onclick={this.decrementPressed}>Decrement</button>
        <button Onclcik={this.resetPressed}>Reset</button>
        <p>{this.state.number}</p>
    </div>
)

}
}

export default Main;