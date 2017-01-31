// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

import Icon from '../IconsSVG';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Toolbar = React.createClass({
  displayName: 'Toolbar',

  propTypes: {
    setActions: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      isMaximized: false,
      close: false
    };
  },

  handleClose() {
    this.setState({ close: !this.state.close });
    this.props.setActions({
      close: this.state.close
    });
  },

  toggleMaximize() {
    this.setState({ isMaximized: !this.state.isMaximized });
    this.props.setActions({
      isMaximized: this.state.isMaximized
    });
  },


  render() {
    const toolBarIconColor = '#80AED2';

    return (
      <div className={ cx('chat-toolbar') }>
        <span className={ cx('chat-toolbar-title') }>{ 'Vaga: desenvolvedor Front-end' }</span>
        <div className={ cx('chat-toolbar-actions') }>
          <Icon
            glyph={this.state.isMaximized ? 'icon-restore' : 'icon-minimize'}
            className={ cx('chat-toolbar-icon', 'chat-toolbar-btn-restore') }
            width={ 15 } height={ 20 }
            fill={ toolBarIconColor }
            onClick={ this.toggleMaximize } />
          <Icon
            glyph="icon-close"
            className={cx('chat-toolbar-icon') }
            width={ 15 } height={ 20 }
            fill={ toolBarIconColor }
            onClick={ this.handleClose } />
        </div>
      </div>
    );
  }
});

export default Toolbar;