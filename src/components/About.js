import React from 'react';


 class  About extends React.Component{
  constructor(){
    super()
    this.state={
      count : 1,
    }
  }
  render(){
  return (
  <div>
      <h1>This is About Class Component</h1>
       {this.state.count}
      <button onClick={()=>this.setState((previousState)=>({count:previousState.count+1}))}>set counter</button>
  </div>
  )
  }
}


export default About;

