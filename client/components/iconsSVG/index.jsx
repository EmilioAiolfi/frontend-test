// ==========================================================================
// IconsSVG
// ==========================================================================

//== Libs
// ==========================================================================
import svgxhr from 'webpack-svgstore-plugin/src/helpers/svgxhr';
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

const __svg__ = {
  path: '../../images/svg/**/*.svg',
  name: 'static/[hash].icon.svg'
};

svgxhr(__svg__);

//== Styles
// ==========================================================================
import styles from './style.scss';
const cx = classnames.bind(styles);

//== Component
// ==========================================================================
const Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    className:  PropTypes.string,
    fill:       PropTypes.string,
    glyph:      PropTypes.string.isRequired,
    height:     PropTypes.number,
    width:      PropTypes.number
  },

  getDefaultProps() {
    return {
      width: 20,
      height: 20
    };
  },

  render() {
    const { className, fill, glyph, width, height, ...props } = this.props;

    const iconClass = cx('icon', {
      [className]: className
    });

    return (
      <svg
        className={ iconClass }
        width={ width }
        height={ height }
        fill={ fill }
        role='img'
        { ...props }>
        <use xlinkHref={`#${glyph}`} />
      </svg>
    );
  }

});


export default Icon;
