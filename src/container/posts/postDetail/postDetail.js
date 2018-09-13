import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../../store/actions/index';

class PostDetail extends Component {

    componentDidMount () {
        this.props.showAllPosts(this.props.match.params.id);
        // this.props.history.push('/posts/3')

        console.log('sfds', this.props);
    }
    render() {
        console.log('detail from my post', this.props.post.id)
        return (
            <div>
                
                <h2><b>UserID: {this.props.post.userId}</b> {this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
}

// Props that are retrieved through redux need to have default props
// because they will look for a variable which hasn't yet been
// defined, the props need to have the same type as the one that's
// going to be loaded
PostDetail.defaultProps = {
    post: {}
}

// Good practice is to define prop-types for the props, so the app
// will fail in development if the given prop is not of the type
// specified
PostDetail.propTypes = {
    post: PropTypes.object.isRequired,
    // match: PropTypes.object.isRequired
}


function mapStateToProps(state) {
    return { post: state.allposts.id }
  }

  const mapDispatchToProps = dispatch => {
    return {
        showAllPosts: (id) => dispatch(actions.fetchPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)