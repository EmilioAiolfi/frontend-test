// Libs
import React from 'react';
import classnames from 'classnames/bind';

import Icon from '../IconsSVG';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Message = React.createClass({
  displayName: 'Message',

  render() {

    return (
      <div>
        <div id="1" className={ cx('chat-message-item', 'chat-message-type-sender') }>
          <picture className={ cx('chat-user-picture') }>
            <img width="65" src="" alt="" />
          </picture>
          <div className={ cx('chat-message-content') }>
            <div className={ cx('chat-message-user-info') }>
              <author className={ cx('chat-message-profile-name') }>{'Você'}</author>
              <span className={ cx('chat-message-time') }>{ 'enviado Agora'}</span>
            </div>
            <span className={ cx('chat-message-text') }>{'Olá tudo bem?'}</span>
            <div className={ cx('chat-message-reading-status') }>
              <Icon glyph={ cx('icon-clock') } width={ 10 } height={ 10 } />
            </div>
          </div>
        </div>
        
        <div id="1" className={ cx('chat-message-item') }>
          <picture className={ cx('chat-user-picture') }>
            <img width="65" src="" alt="" />
          </picture>
          <div className={ cx('chat-message-content') }>
            <div className={ cx('chat-message-user-info') }>
              <author className={ cx('chat-message-profile-name') }>{'jose'}</author>
              <p className={ cx('chat-message-company-name') }>{'Catho'}</p>
              <span className={ cx('chat-message-time') }>{ 'enviado Agora'}</span>
            </div>
            <span className={ cx('chat-message-text') }>{'Olá tudo bem?'}</span>
            <div className={ cx('chat-message-reading-status') }>
              <Icon glyph={ cx('icon-clock') } width={ 10 } height={ 10 } />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Message;