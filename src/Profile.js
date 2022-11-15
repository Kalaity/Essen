import PropTypes from "prop-types";

import React from "react";

class Profile extends React.Component {
  constructor(){
    super()
    this.state={
      fullName:"John Doe",
      Bio:"Driver",
      Profession:"Developer",
      img:"/fish.jpg"
    }
  }
  componentDidMount () {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }, 1000)
}

render(){
  return (
    <div>
  <p>{this.state.fullName}</p>
  <p>{this.state.Bio}</p>
  <p>{this.state.Profession}</p>
  <img src={this.state.img} alt="fish"/>
  
    </div>
  );
}
}
export default Profile