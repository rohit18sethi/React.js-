import React ,{Component} from 'react';
import Header from './Header';
import Footer  from './Footer';
import Routes from './Routes';


export default class Layout extends Component{
  constructor(){
    super();
    this.state = {name : "Rohit Sethi",
                  title : "Welcome",
                  loggedIn : false};
  }
  changeTitle(title){
    this.setState({title});
  }

  render (){

    setTimeout( () => {
      this.setState({name : "Sethi Rohit"});
    },3000
  );
    return (
      <div>
      <Routes/>
      {this.state.name}
      <Header changeTitle={this.changeTitle.bind(this)} title = {this.state.title}/>
      <Footer/>
      </div>
    );
  }

}
