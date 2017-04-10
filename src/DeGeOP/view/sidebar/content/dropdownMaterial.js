/*
 File: DeGeOP/view/sidebar/content/dropdownMaterial.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170401
 Funzione: componente react che renderizza il dropdown che permette di scegliere
 il tipo di materiale dell'asset, gestendone correttamente i vari cambiamenti
 */

import React from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';


/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il dropdown che permette di scegliere
 * il tipo di materiale dell'asset, gestendone correttamente i vari cambiamenti
 */

/**
 * @class DropdownMaterial
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class DropdownMaterial extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.DropdownMaterial
   * @param {Object} props parametri per la creazione di componenti react
   */
	constructor(props) {
    	super(props);
		this.materials = [
		  { value: 'Calcestruzzo', label: 'Calcestruzzo' },
		  { value: 'Mattoni', label: 'Mattoni' },
		  { value: 'Acciaio', label: 'Acciaio' },
		  { value: 'Legno', label: 'Legno' },
		  { value: 'Struttura costiera', label: 'Struttura costiera' },
		];
	}

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.DropdownMaterial
   * @param {string} value valore attualmente contenuto nel dropdown
   * @description delega il cambiamento dello state del dropdown del materiale
   * al livello più alto
   */
  changeMaterial(value) {
    this.props.handleChange('asset', 'type', value);
    // console.log("InsertAssetContent::changeMaterial "+value);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Buttons.TwoButtons
   * @return {Object} renderizza il dropdown che permette di scegliere il tipo di materiale dell'asset
   */
  render() {
  /*
   	 	const { store } = this.context;
    	store.dispatch(OptionActionCreator.insertOption({
			"CUST": "Customer",
			"CLIE": "Cliente",
			"SUPP": "Supplier"
 		}));
		let ownershipOptions = store.getState().options.assetOwnership;
		//( (el)=> {  return el.uuid===this.state.node.uuid } );
		this.materials = [];
		for (let key in ownershipOptions) {
			this.materials = [...this.materials, {value: key, label: ownershipOptions[key]}];
		}
  */
    return (
      <Dropdown
        onChange={this.changeMaterial.bind(this)}
        source={this.materials}
        value={this.props.materialValue}
      />
    );
  }
}

export { DropdownMaterial };
