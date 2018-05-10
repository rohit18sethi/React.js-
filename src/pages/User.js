import React,{Component} from 'react';
export default class User extends Component{
  constructor (){
    super();
    this.state = {
      username : "Default"
    }
  }

  componentDidMount(){
    var params = this.props.match;
    var username = params.params.username;
    this.setState({username:username});

  }
  render(){

        return (
      <div>
      <h3>Welcome {this.state.username}</h3>
      </div>
    );
  }
}
