/*
 File: DeGeOP/view/sidebar/content/abstractButtons.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170406
 Funzione: componente a capo della gerarchia dei componenti react che renderizzano i
 bottoni delle sidebar
*/

import React from 'react';

/**
 * @author Giulia Petenazzi
 * @description componente a capo della gerarchia dei componenti
 * react che renderizzano i bottoni delle sidebar
 * @namespace DeGeOP::View::Sidebar::Buttons
 */

/**
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar::Buttons
 */
class AbstractButtons extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Buttons.AbstractButtons
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
    this.style = {
      position: 'absolute',
      top: '60%',
    };
  }
}

export { AbstractButtons };
