import { connect } from 'react-redux';

// grab profile from redux with connect
connect(state => {
  return {
    profile: state.firebase.profile // profile passed as props.profile
  };
})(SomeComponent); // pass component to be wrapped

// or with some shorthand:
connect(({ firebase: { profile } }) => ({ profile }))(SomeComponent);
