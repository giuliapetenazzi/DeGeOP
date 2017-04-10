/*
 File: DeGeOP/view/sidebar/content/sketch.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170401
 Funzione: componente react che renderizza il color picker con palette rgb completa
 */

import React from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il color picker con palette rgb completa
 */

/**
 * @class Sketch
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class Sketch extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.Sketch
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf  DeGeOP::View::Sidebar::Content.Sketch
   * @return {Object} renderizza il color picker con palette rgb completa
   */
  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(
            ${this.props.color.r},
          	${this.props.color.g},
          	${this.props.color.b},
          	${this.props.color.a})
          `,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={styles.swatch}onClick={this.props.handleColorClick}>
          <div style={styles.color} />
        </div>

        {this.props.displayColorPicker ? <div style={styles.popover}>
          <div
            style={styles.cover}
            onClick={this.props.handleColorClose}
          />
          <SketchPicker
            color={this.props.color}
            onChange={this.props.handleColorChange}
          />
        </div> : null}

      </div>
    );
  }
}

export { Sketch };
