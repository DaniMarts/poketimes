import React from 'react'
import {connect} from 'react-redux'
import {deletePost} from  '../actions/postActions'

class Post extends React.Component {
    handleClick = () =>{
        // console.log(this.props)
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render(){
        const post = this.props.post ? ( 
            <div className="post card" >
                <div className="card-content">
                    <span className="card-title">{this.props.post.title}</span>
                    <p>{this.props.post.body}</p>
                    <button className="btn green" onClick={this.handleClick}>Delete Post</button>
                </div>                    
            </div>
            
        ) : 
        (
            <p className="center">Loading...</p>
        );

        return (
            <div className="container">
                {post}
            </div>
        )
    }     
}

const mapStateToProps = (state, ownProps) => {//??? thishas no access to "this", by the way
    const id = ownProps.match.params.post_id;
    return {post: state.posts.find(item => item.id==id)}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post); //???