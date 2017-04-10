/*
 File: DeGeOP/view/sidebar/buttons/threeButtons.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170401
 Funzione: componente react che renderizza la parte di sidebar contenente tre bottoni
 */

import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';
import theme from '../myTheme.css';
import { AbstractButtons } from './abstractButtons';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la parte di sidebar contenente tre bottoni
 */

/**
 * @extends AbstractButtons
 * @memberOf DeGeOP::View::Sidebar::Buttons
 */
class ThreeButtons extends AbstractButtons {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Buttons.ThreeButtons
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);

    this.handleCancelClick = () => {
      this.props.changeSidebarType('DEFAULT');
    };

    this.handleEditClick = () => {
      this.props.changeSidebarType(this.props.destinationEditSidebar);
    };
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Buttons.TwoButtons
   * @return {Object} renderizza la parte di sidebar contenente tre bottoni
   */
  render() {
    return (
      <CardActions style={this.style}>
        <Button label="Modifica" theme={theme} onClick={this.handleEditClick} />
        <Button label="Elimina" theme={theme} onClick={this.props.deleteElement} />
        <Button label="Annulla" theme={theme} onClick={this.handleCancelClick} />
      </CardActions>
    );
  }
}

export { ThreeButtons };
