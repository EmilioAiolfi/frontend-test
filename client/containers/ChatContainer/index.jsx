// Libs
import React from 'react';
import CONFIG from '../../config';

import Chat from '../../components/Chat';

const ChatContainer = React.createClass({
  displayName: 'ChatContainer',

  getInitialState() {
    return {
      data: [],
      loading: true,
      timer: null,
    };
  },

  componentDidMount(){
    const timer = setTimeout( () => {
      this.dataFetch(CONFIG.API.ENDPOINT);
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

  render() {
    return (
      <div>
        <h1>{ 'Chat Container' } </h1>
        <Chat data={ this.state.data } loading={ this.state.loading } />
      </div>
    );
  }
});

export default ChatContainer;
