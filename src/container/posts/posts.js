import React, { Component } from 'react'
import { connect } from 'react-redux';

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
                <div key={post.id}>
                    {post.title}
                </div>
            ))
        }
        return (
            <div>
                <h3>Protected</h3>
                {showPosts}
            </div>
        )
    }
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
