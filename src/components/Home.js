import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Home extends React.Component {
    render(){
        const display = this.props.posts.length ? (this.props.posts.map(post => 
            <Link to={`/${post.id}`} key={post.id}>
                <div className="post card" >                
                    <img src="https://github.com/iamshaunjp/react-redux-complete-playlist/blob/lesson-33/poketimes/src/pokeball.png?raw=true" alt=""/>

                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>                    
                </div>
            </Link> 
            )
        ) : 
        (
            <p className="center">No content</p>
        );

        return(
            <div className="container">
            <h4 className="center">Home</h4>
               {display}
            </div>
        )
    }

    
}
const mapStateToProps = (state) => ({posts: state.posts})

export default connect(mapStateToProps)(Home);