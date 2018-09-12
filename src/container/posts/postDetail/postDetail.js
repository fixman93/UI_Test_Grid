import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions/index';

class PostDetail extends Component {

    componentDidMount () {
         
        this.props.showAllPosts();
        console.log('sfds', this.props);
    }
    render() {
        return (
            <div>

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
    return { posts: state.burgerBuilder }
  }

  const mapDispatchToProps = dispatch => {
    return {
        showAllPosts: () => dispatch(actions.initIngredients())
    }
}

connect(mapStateToProps, mapDispatchToProps)(PostDetail)