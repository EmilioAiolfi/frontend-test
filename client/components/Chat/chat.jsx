// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

import Toolbar from './Toolbar';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Chat = React.createClass({
  displayName: 'Chat',

  propTypes: {
    data:     PropTypes.array.isRequired,
    loading:  PropTypes.bool.isRequired,
  },

  getDefaultProps() {
    return {
      data: [],
      loading: true
    };
  },

  render() {
    const { data, loading } = this.props;
    return (
      <div className={ cx('chat') }>
        <Toolbar />
        <div className={ cx('chat-body') }>
          <MessagesList data={ data } loading={ loading } />
          <MessageForm />
        </div>
      </div>
    );
  }
});

export default Chat;