import React from 'react';
import Axios from 'axios';
import UserCard from './components/userCard';
import './App.css'; 


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      followers: []
    }
  }

  componentDidMount = () => {
    this.fetchUserData()
    this.fetchFollowerData()
  }

  fetchUserData = () => {
    Axios.get('https://api.github.com/users/ChrisPupo22')
    .then(res => {
       this.setState({people:res.data})
    })
    .catch(error => {
      console.log("error", error);
    });
  };

  fetchFollowerData = () => {
    Axios.get('https://api.github.com/users/ChrisPupo22/followers')
    .then(res => {
      this.setState({followers:res.data})      
    })
    .catch(error => {
      console.log("No follower Data", error)
    });
  };


  render() {
    return(
     <div>
        <UserCard people={this.state.people} followers={this.state.followers}/>
     </div>
    )
  }
}
