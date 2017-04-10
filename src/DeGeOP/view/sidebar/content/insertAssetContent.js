/*
 File: DeGeOP/view/sidebar/content/insertAssetContent.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170401
 Funzione: componente react che renderizza il contenuto della sidebar dell'asset
in modalità inserimento e modifica e ne gestisce i cambiamenti
 */

import React from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { AbstractContent } from './abstractContent';
import { Sketch } from './sketch';
import { DropdownOwnership } from './dropdownOwnership';
import { DropdownMaterial } from './dropdownMaterial';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il contenuto della sidebar dell'asset
 * in modalità inserimento e modifica e ne gestisce i cambiamenti
 */

/**
 * @class InsertAssetContent
 * @extends AbstractContent
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class InsertAssetContent extends AbstractContent {
  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertAssetContent
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertAssetContent
   * @param {string} value valore attualmente contenuto nell'input del nome dell'asset
   * @description delega il cambiamento dello state dell'input del nome dell'asset alla componente
   * di livello più alto
   */
  changeName(value) {
    this.props.handleChange('asset', 'name', value);
    // console.log(`InsertAssetContent::changeName ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertAssetContent
   * @param {string} value valore attualmente contenuto nell'input del nome dell'asset
   * @description delega il cambiamento dello state dell'input della descrizione alla componente
   * di livello più alto
   */
  changeDescription(value) {
    this.props.handleChange('asset', 'description', value);
    // console.log(`InsertAssetContent::changeDescription ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertAssetContent
   * @param {string} value valore attualmente contenuto nell'input del nome dell'asset
   * @description delega il cambiamento dello state dell'input della superficie dell'asset
   * alla componente di livello più alto
   */
  changeSurface(value) {
    this.props.handleChange('asset', 'surface', value);
    // console.log(`InsertAssetContent::changeSurface ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertAssetContent
   * @param {string} value valore attualmente contenuto nell'input del nome dell'asset
   * @description delega il cambiamento dello state dell'input del valore economico dell'asset
   * alla componente di livello più alto
   */
  changeEcValue(value) {
    this.props.handleChange('asset', 'unitValue', value);
    console.log(`InsertAssetContent::changeEcValue ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertAssetContent
   * @return {Object} renderizza il contenuto della sidebar dell'asset in modalità
   * inserimento e modifica
   */
  render() {
    return (
      <div>
        <CardTitle
          style={this.titleStyle}
          title={this.props.title}
          subtitle={this.props.subtitle}
        />

        <Card style={this.middleStyle}>
          <Input
            pattern={this.props.values.validationPatterns.name}
            type="text" label="Nome" name="name"
            value={this.props.values.name}
            onChange={this.changeName.bind(this)}
          />

          <Input
            pattern={this.props.values.validationPatterns.description}
            type="text" label="Descrizione" name="description"
            value={this.props.values.description}
            onChange={this.changeDescription.bind(this)}
          />

          <DropdownOwnership
            label="Proprietario"
            ownershipValue={this.props.values.ownership}
            handleChange={this.props.handleChange}
          />

          <DropdownMaterial
            label="Materiale"
            materialValue={this.props.values.type}
            handleChange={this.props.handleChange}
          />

          <CardText style={{ paddingLeft: '0', paddingBottom: '0.3em' }}>
            Colore sulla mappa:
          </CardText>

          <Sketch
            displayColorPicker={this.props.values.displayColorPicker}
            color={this.props.values.color}
            handleColorClick={this.props.handleColorClick}
            handleColorClose={this.props.handleColorClose}
            handleColorChange={this.props.handleColorChange}
          />

          <Input
            pattern={this.props.values.validationPatterns.surface.replace(/\\/g, '')}
            type="number" label="Superficie, es: 12,34" name="surface"
            step=".01"
            min="0"
            value={this.props.values.surface}
            onChange={this.changeSurface.bind(this)}
          />

          <Input
            pattern={this.props.values.validationPatterns.unitValue.replace(/\\/g, '')}
            type="number" label="Valore, es: 56,78" name="ecValue"
            step=".01"
            min="0"
            value={this.props.values.unitValue}
            onChange={this.changeEcValue.bind(this)}
          />

        </Card>

      </div>
    );
  }
}

export { InsertAssetContent };
