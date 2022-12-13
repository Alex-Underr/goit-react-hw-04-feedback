import PropTypes from 'prop-types';

function Notification() {
  return <p>There is no feedback</p>;
}

export default Notification;
Notification.propTypes = PropTypes.string.isRequired;
