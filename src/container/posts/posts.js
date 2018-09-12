import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/index';


class Posts extends Component {

    state = {
        showPosts: {},
        loading: false
    }

    componentDidMount () {
         
        this.props.onInitIngredients();
        console.log('sfds', this.props);
    }

    render() {
        let showPosts = <p>Loading...</p>
        console.log('dsa',this.props.posts)
        if(!this.state.loading) {
            showPosts = this.props.posts.map(post =>(
                <div className="row" key={post.id}>
                    <div className="col-2 postId">{post.id}</div>
                    <div className="col-2 postTitle"><Link to='/'>{post.title}</Link></div>
                    <div className="col-25 postBody">{post.body}</div>
                    <div className="col-1 deletePost">x</div>
                </div>
            ))
        }
        return (
            <div>
                <h3>Protected</h3>
                <div className="gronContainer">
                    <div className="headerRow">
                        <div className="col-2"><p>#</p></div> 
                        <div className="col-2"><p>Title</p></div> 
                        <div className="col-25"><p>Description</p></div> 
                        <div className="col-1"><p>Delete</p></div> 
                    </div>
                    <div className="grid-container outline">
                        {showPosts}
                    </div>
                </div>
            </div>
        )
    }
}

// Props that are retrieved through redux need to have default props
// because they will look for a variable which hasn't yet been
// defined, the props need to have the same type as the one that's
// going to be loaded
Posts.defaultProps = {
    posts: []
}

// Good practice is to define prop-types for the props, so the app
// will fail in development if the given prop is not of the type
// specified
Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { posts: state.burgerBuilder.ingredients }
  }

  const mapDispatchToProps = dispatch => {
    return {
        onInitIngredients: () => dispatch(actions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
