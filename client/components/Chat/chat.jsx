// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import update from 'immutability-helper';

import Toolbar from './Toolbar';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Chat = React.createClass({
  displayName: 'Chat',

  propTypes: {
    endPoint: PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      data: [],
      loading: true,
      timer: null,
    };
  },

  componentDidMount(){
    const timer = setTimeout( () => {
      this.dataFetch(this.props.endPoint);
    }, 2000 );

    this.setTimer(timer);
  },

  componentWillUnmount(){
    clearTimeout(this.state.timer);
  },

  dataFetch(url) {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      this.setState({
        data: response.talkMessages,
        loading: false,
      });
    }.bind(this))
    .catch(function(error) {
      console.error(error);
    });
  },

  setTimer(timer) {
    this.setState({timer});
  },

  setNewMessage(obj) {
    let newObj = update(this.state.data, { $push: [obj] });
    this.setState({
      data: newObj
    });
  },

  render() {
    const { data, loading } = this.state;
    return (
      <div className={ cx('chat') }>
        <Toolbar />
        <div className={ cx('chat-body') }>
          <MessagesList data={ data } loading={ loading } />
          <MessageForm setNewMessage={ this.setNewMessage } />
        </div>
      </div>
    );
  }
});

export default Chat;