import React, { Component } from "react"
import { connect } from 'react-redux';

import * as burgerBuilderActions from '../../store/actions/index';


class Protected extends Component {

    componentDidMount () {
        console.log(this.props); 
        this.props.onInitIngredients();
    }

    render() {
        return (
            <div>
                <h3>Protected</h3>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { posts: state.posts }
  }

  const mapDispatchToProps = dispatch => {
    return {
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
