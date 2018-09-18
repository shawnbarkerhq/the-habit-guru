import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  const { messageSuccess, messageError } = props;
  return (
    <span
      className="helper-text"
      data-error={messageError}
      data-success={messageSuccess}
    />
  );
};

Alert.propTypes = {
  messageSuccess: PropTypes.string.isRequired,
  messageError: PropTypes.string.isRequired
};

export default Alert;
