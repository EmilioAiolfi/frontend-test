// Libs
import React, { PropTypes } from 'react';
import Icon from '../IconsSVG';

// Style
import styles from './style.scss';

const Header = React.createClass({
  displayName: 'Header',

  propTypes: {
    brandName : PropTypes.string.isRequired,
    onClick:  PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      brandName : ''
    };
  },
  
  getInitialState() {
    return { sidebarOpen: false };
  },

  render() {
    return (
      <header className={ styles['header'] }>

        <h1 className={ styles['brand'] }>
          <a className={ styles['logo'] }>
            <Icon glyph="icon-catho-logo" width={ 100 } height={ 45 }  />
            <span className={ styles['text'] }>{ this.props.brandName }</span>
          </a>
        </h1>


        <div className={ styles['settings'] }>
          <button className={ styles['btn'] } onClick={this.props.onClick}>{'Login'}</button>
        </div>

      </header>
    );
  }
});

export default Header;
