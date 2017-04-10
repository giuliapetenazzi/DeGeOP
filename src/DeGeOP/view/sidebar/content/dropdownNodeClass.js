/*
 File: DeGeOP/view/sidebar/content/dropdownNodeClass.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170401
 Funzione: componente react che renderizza il dropdown che permette di scegliere il tipo del nodo
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-toolbox/lib/dropdown';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il dropdown che permette di scegliere
 * il tipo del nodo
 */

/**
 * @class DropdownNodeClass
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class DropdownNodeClass extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.DropdownNodeClass
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
    this.nodeClasses = [
      { value: 'Uscita', label: 'Uscita' },
      { value: 'Macchina', label: 'Macchina' },
      { value: 'Coda', label: 'Coda' },
      { value: 'Risorsa', label: 'Risorsa' },
      { value: 'Sorgente', label: 'Sorgente' },
    ];
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.DropdownNodeClass
   * @param {string} value valore attualmente contenuto nel dropdown
   * @description delega il cambiamento dello state del dropdown del tipo
   * di nodo al livello più alto
   */
  handleChange(value) {
    this.props.handleChange('node', 'type', value);
    console.log(`InsertAssetContent::handleChange ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.DropdownNodeClass
   * @return {Object} renderizza il dropdown che permette di scegliere il tipo del nodo
   */
  render() {
    return (
      <Dropdown
        label="Classe del nodo"
        onChange={this.handleChange.bind(this)}
        source={this.nodeClasses}
        value={this.props.nodeClassValue}
      />
    );
  }
}

export { DropdownNodeClass };
