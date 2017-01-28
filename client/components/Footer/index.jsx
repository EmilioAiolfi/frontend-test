// Libs
import React from 'react';
import Icon from '../IconsSVG';

// Style
import styles from './style.scss';

const Footer = React.createClass({
  displayName: 'Footer',

  getInitialState() {
    return { sidebarOpen: false };
  },

  render() {
    return (
      <footer className={ styles['footer'] }>

        <div className={ styles['brand'] }>
          <a className={ styles['logo'] }>
            <Icon glyph="icon-catho-logo" width={ 50 } height={ 30 }  />
          </a>
        </div>
        
        <ul className={ styles['footer-list'] }>
          <li className={ styles['footer-list-item'] }>{ 'Catho Online Ltda.' }</li>
          <li className={ styles['footer-list-item'] }>{ 'CNPJ: 03.753.088/0001-00' }</li>
          <li className={ styles['footer-list-item'] }>{ 'Alameda Juari, 262 - Barueri, SP - 06460-090' }</li>
          <li className={ styles['footer-list-item'] }>
            <a href="#">{ 'Política de Privacidade' }</a>
          </li>
        </ul>

      </footer>
    );
  }
});

export default Footer;
