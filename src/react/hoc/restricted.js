import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get } from 'redux/modules/profile/actions';

const mapStateToProps = (state) => ({
  profile: state.get('profile')
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(get())
});

const restricted = BaseComponent => {
  @withRouter
  @connect(mapStateToProps, mapDispatchToProps)
  class Restricted extends Component {
    static propTypes = {
      profile: PropTypes.object,
      getProfile: PropTypes.func
    }

    componentWillMount() {
      if (!this.props.profile.data) {
        this.props.getProfile();
      }
    }

    render() {
      const { profile: { isLoading }} = this.props;
      return isLoading
        ? <span>Loading...</span>
        : <BaseComponent {...this.props} />
    }
  }
  return Restricted;
};

export default restricted;