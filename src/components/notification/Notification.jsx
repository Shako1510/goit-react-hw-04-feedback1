import { NotificationText } from './NotificationStyled';
import PropTypes from 'prop-types';

const Notification = ({ message }) =>
    <NotificationText>{message}</NotificationText>;

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification 