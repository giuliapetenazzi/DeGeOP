/*
 File: DeGeOP/view/sidebar/content/abstractContent.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170406
 Funzione: componente react a capo della gerarchia del contenuto della sidebar
 */

import React from 'react';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la parte di sidebar contenente tre bottoni
 * @namespace DeGeOP::View::Sidebar::Content
 */

/**
 * @class AbstractContent
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar::Content
*/
class AbstractContent extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.AbstractContent
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
    this.titleStyle = {

      // backgroundColor: "green",
      maxHeight: '60px',
      position: 'absolute',
      paddingLeft: '0.5em',
      paddingTop: '1.5em',
    };

    this.middleStyle = {
      // backgroundColor: "green",
      padding: '1em',
      position: 'absolute',
      top: '80px',
      maxHeight: '240px',
      overflowY: 'scroll',
    };
  }
}

export { AbstractContent };
