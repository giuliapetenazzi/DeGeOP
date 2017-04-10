/*
 File: DeGeOP/view/sidebar/buttons/twoButtons.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170406
 Funzione: componente react che renderizza la parte di sidebar contenente due bottoni
 */

import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import theme from '../myTheme.css';
import { AbstractButtons } from './abstractButtons.js';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la parte di sidebar contenente due bottoni
 */

/**
 * @extends AbstractButtons
 * @memberOf DeGeOP::View::Sidebar::Buttons
 */
class TwoButtons extends AbstractButtons {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Buttons.TwoButtons
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
    this.handleCancelClick = () => {
      this.props.changeSidebarType('DEFAULT');
    };
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Buttons.TwoButtons
   * @return {Object} renderizza la parte di sidebar contenente due bottoni
   */
  render() {
    let button = null;
    this.props.isDisabled === '"true"' ? (
      button = <Button label="Salva" disabled theme={theme} />
    ) : (
      button = <Button label="Salva" theme={theme} onClick={this.props.emitAction} />
    );

    return (
      <CardActions style={this.style}>
        {button}
        <Button label="Annulla" theme={theme} onClick={this.handleCancelClick} />
      </CardActions>
    );
  }
}

export { TwoButtons };
