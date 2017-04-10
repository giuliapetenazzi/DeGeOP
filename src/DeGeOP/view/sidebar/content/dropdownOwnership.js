/*
 File: DeGeOP/view/sidebar/content/dropdownOwnership.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170401
 Funzione: componente react che renderizza il dropdown che permette di scegliere
 il proprietario dell'asset, gestendone correttamente i vari cambiamenti
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-toolbox/lib/dropdown';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il dropdown che permette di scegliere
 * il proprietario dell'asset, gestendone correttamente i vari cambiamenti
 */

/**
 * @class DropdownOwnership
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class DropdownOwnership extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.DropdownOwnership
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
    this.owners = [
      { value: "Appartiene all\'assicurando", label: "Appartiene all\'assicurando" },
      { value: 'Appartiene a un cliente', label: 'Appartiene a un cliente' },
      { value: 'Appartiene a un fornitore', label: 'Appartiene a un fornitore' },
    ];
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.DropdownOwnership
   * @param {string} value valore attualmente contenuto nel dropdown
   * @description delega il cambiamento dello state del dropdown del proprietario alla componente
   * di livello più alto
   */
  changeOwnership(value) {
    this.props.handleChange('asset', 'ownership', value);
    // console.log(`InsertAssetContent::changeOwnership ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Buttons.TwoButtons
   * @return {Object} renderizza il dropdown che permette di scegliere il proprietario dell'asset
   */
  render() {
    return (
      <Dropdown
        onChange={this.changeOwnership.bind(this)}
        source={this.owners}
        value={this.props.ownershipValue}
      />
    );
  }
}

export { DropdownOwnership };
