// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import Moment from 'Moment';

import Icon from '../IconsSVG';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Message = React.createClass({
  displayName: 'Message',

  propTypes: {
    companyName:        PropTypes.string.isRequired,
    continuousMessage:  PropTypes.bool.isRequired,
    id:                 PropTypes.number.isRequired,
    perfilID:           PropTypes.number.isRequired,
    statusReading:      PropTypes.bool.isRequired,
    text:               PropTypes.string.isRequired,
    time:               PropTypes.number.isRequired,
    userID:             PropTypes.number.isRequired,
    userName:           PropTypes.string.isRequired,
    userPicture:        PropTypes.string.isRequired,
  },


  render() {
    const {
      perfilID, continuousMessage, userPicture, userName,
      statusReading, companyName, text, time
    } = this.props;

    const sender = perfilID === 1;
    const showUserPicture = !continuousMessage;

    const chatMessageClass = cx('chat-message-item', {
      ['chat-message-type-sender']: sender
    });

    const userPictureImage = showUserPicture ? (
      <img
        width="65"
        src={ userPicture}
        className={ cx('chat-profile-picture') }
        alt={ userName } />
    ) : '';

    const isReadingIcon = sender ? (
      <Icon
        className={ cx('icon-reading-status', { ['icon-reading-status-checked']: statusReading } ) }
        glyph={ statusReading ? 'icon-checked' : 'icon-clock' }
        width={ 15 }
        height={ 15 } />
    ) : '';

    const timeMessage = Moment(time)
        .locale('pt-BR')
        .startOf('minutes')
        .fromNow();

    return (
      <div className={ chatMessageClass }>
        <picture className={ cx('chat-user-picture') }>
          { userPictureImage }
        </picture>

        <div className={ cx('chat-message-content') }>
          <div className={ cx('chat-message-user-info') }>
            <author className={ cx('chat-message-profile-name') }>{ userName }</author>
            <p className={ cx('chat-message-company-name') }>{ companyName }</p>
            <span className={ cx('chat-message-time') }>{ `enviado ${timeMessage}` }</span>
          </div>
          <span className={ cx('chat-message-text') }>{ text }</span>
          <div className={ cx('chat-message-reading-status') }>
            { isReadingIcon }
          </div>
        </div>
      </div>
    );
  }
});

export default Message;


