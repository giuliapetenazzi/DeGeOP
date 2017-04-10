/*
 File: DeGeOP/view/sidebar/content/insertAssetContent.js
 Autore: Giulia Petenazzi
 Creazione: 20170322
 Modifica: 20170406
 Funzione: componente react che renderizza il contenuto della sidebar del node
 in modalità inserimento e modifica e ne gestisce i cambiamenti
 */

import React from 'react';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { AbstractContent } from './abstractContent';
import { DropdownNodeClass } from './dropdownNodeClass';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il contenuto della sidebar del node
 * in modalità inserimento e modifica e ne gestisce i cambiamenti
 */

/**
 * @class InsertNodeContent
 * @extends AbstractContent
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class InsertNodeContent extends AbstractContent {
  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @param {string} value valore che è contenuto nel dropdown della classe del node
   * @description delega il cambiamento dello state del dropdown del nome del nodo
   * alla componente di più alto livello
   */
  changeNodeClass(value) {
    this.props.handleChange('node', 'type', value);
    // console.log(`InsertNodeContent::changeNodeClass ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @param {string} value valore che è contenuto nel dropdown della classe del node
   * @description delega il cambiamento dello state del nome del nodo
   * alla componente di più alto livello
   */
  changeName(value) {
    this.props.handleChange('node', 'name', value);
    // console.log(`InsertNodeContent::changeName ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @param {string} value valore che è contenuto nel dropdown della classe del node
   * @description delega il cambiamento dello state della capacità del nodo
   * alla componente di più alto livello
   */
  changeCapacity(value) {
    this.props.handleChange('node', 'capacity', value);
    // console.log(`InsertNodeContent::changeCapacity ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @param {string} value valore che è contenuto nel dropdown della classe del node
   * @description delega il cambiamento dello state del tempo di processo del nodo
   * alla componente di più alto livello
   */
  changeProcessingTime(value) {
    this.props.handleChange('node', 'processingTime', value);
    // console.log(`InsertNodeContent::changeProcessingTime ${value}`);
  }


  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @param {string} value valore che è contenuto nel dropdown della classe del node
   * @description delega il cambiamento dello state del valore del nodo
   * alla componente di più alto livello
   */
  changeValue(value) {
    this.props.handleChange('node', 'value', value);
    // console.log(`InsertNodeContent::changeValue ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @param {string} value valore che è contenuto nel dropdown della classe del node
   * @description delega il cambiamento dello state del tempo di approvigionamento del nodo
   * alla componente di più alto livello
   */
  changeLeadTime(value) {
    this.props.handleChange('node', 'leadTime', value);
    // console.log(`InsertNodeContent::changeLeadTime ${value}`);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @return {Object} si occupa dell'aggiunta dei campi a seconda della tipologia del nodo
   */
  specializedFields() {
    let addedFields = null;
    switch (this.props.values.type) {
      case 'Macchina':
        addedFields =
          (<div>

            <Input
              pattern={this.props.values.validationPatterns.capacity.replace(/\\/g, '')}
              type="number" label="Capacita (es: 12,34)" name="capacity"
              step=".01"
              min="0"
              value={this.props.values.capacity}
              onChange={this.changeCapacity.bind(this)}
            />

            <Input
              pattern={this.props.values.validationPatterns.processingTime.replace(/\\/g, '')}
              type="number" label="Tempo di processo" name="processingTime"
              value={this.props.values.processingTime}
              step=".01" min="0"
              onChange={this.changeProcessingTime.bind(this)}
            />

            <Input
              pattern={this.props.values.validationPatterns.value.replace(/\\/g, '')}
              type="number" label="Valore (es: 12,34)"s name="ecValue"
              step=".01" min="0"
              value={this.props.values.value}
              onChange={this.changeValue.bind(this)}
            />

          </div>);
        break;

      case 'Coda':
        addedFields =
          (<div>

            <Input
              pattern={this.props.values.validationPatterns.capacity.replace(/\\/g, '')}
              type="number" label="Capacita (es: 12,34)" name="capacity"
              step=".01" min="0"
              value={this.props.values.capacity}
              onChange={this.changeCapacity.bind(this)}
            />

          </div>);

        break;

      case 'Sorgente':
        addedFields =
          (<div>

            <Input
              pattern={this.props.values.validationPatterns.leadTime.replace(/\\/g, '')}
              step=".01" min="0"
              type="number" label="Tempo di consegna (es: 12,34)" name="leadTime"
              value={this.props.values.leadTime}
              onChange={this.changeLeadTime.bind(this)}
            />

          </div>);
        break;
    }

    return addedFields;
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertNodeContent
   * @return{Object} renderizza il il contenuto della sidebar del node in modalità
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
          {/* potremmo mostrare l'node di appartenenza*/}

          <Input
            pattern={this.props.values.validationPatterns.name}
            type="text" label="Nome" name="name"
            value={this.props.values.name}
            onChange={this.changeName.bind(this)}
          />

          <DropdownNodeClass
            nodeClassValue={this.props.values.type}
            handleChange={this.props.handleChange}
          />

          {this.specializedFields()}

        </Card>

      </div>
    );
  }
}

export { InsertNodeContent };
