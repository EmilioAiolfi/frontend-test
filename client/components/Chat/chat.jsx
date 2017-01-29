// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

import Icon from '../IconsSVG';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Chat = React.createClass({
  displayName: 'Chat',

  propTypes: {
    data: PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      data: []
    };
  },

  render() {
    const toolBarIconColor = '#80AED2';
    return (
      <div className={ cx('chat') }>
        
        <div className={ cx('chat-toolbar') }>
          <span className={ cx('chat-toolbar-title') }>{ 'Vaga: desenvolvedor Front-end' }</span>
          <div className={ cx('chat-toolbar-actions') }>
            <Icon glyph="icon-close" className={ cx('chat-toolbar-icon') } width={ 15 } height={ 20 } fill={ toolBarIconColor } />
            <Icon glyph="icon-minimize" className={ cx('chat-toolbar-icon') } width={ 15 } height={ 20 } fill={ toolBarIconColor } />
            <Icon glyph="icon-restore" className={ cx('chat-toolbar-icon') } width={ 15 } height={ 20 } fill={ toolBarIconColor } />
          </div>
        </div>
        
        <div className={ cx('chat-body') }>
        
          <div className={ cx('chat-messages-list') }>
        
            <div id="1" className={ cx('chat-message-item') }>
              <picture className="chat-user-picture">
                <img width="65" src="" alt="" />
              </picture>
              <div className="chat-message-content">
                <div className="chat-message-user-info">
                  <author className="chat-message-profile-name">{'jose'}</author>
                  <span className="chat-message-company-name">{'Catho'}</span>
                  <span className="chat-message-send-time">{ 'enviado Agora'}</span>
                </div>
                <span className="chat-message-text">{'Olá tudo bem?'}</span>
                <div className="chat-message-reading-status">
                  <Icon glyph="icon-clock" width={ 10 } height={ 10 } />
                </div>
              </div>
            </div>
          
          </div>
          
          <div className={ cx('chat-message-form') }>
            <textarea className="chat-message-form-input" rows="4" cols="40" name="chat-message-input" placeholder="Digite aqui sua mensagem..." />
          </div>
        </div>
        
      </div>
    );
  }
});

export default Chat;