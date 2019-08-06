import React from 'react';

export default class UserCard extends React.Component {
    constructor(props) {
        super();
    };
 
render() {
    return(
        <div className='card-container'>
            <h1>{this.props.people.login}</h1>
                <img src= {this.props.people.avatar_url} width="150px" alt='Github avatar'/>
                <a href={`${this.props.people.html_url}`} target="_blank" >{this.props.people.html_url}</a>
                <p className='followers'>Followers: {this.props.people.followers}</p>
                <p className='Repos'>Repositories: {this.props.people.public_repos}</p>
        <div className='followers-container'>
            <h2>FOLLOWERS</h2>
                <p className='followers-content'></p>
                {this.props.followers.map(name => {
                    return <div className='followers-design'>{name.login}</div>
                })}
            </div>
      </div>
    )
}
}