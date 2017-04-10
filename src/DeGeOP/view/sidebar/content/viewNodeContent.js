/*
 File: DeGeOP/view/sidebar/content/viewNodeContent
 Autore: Giulia Petenazzi
 Creazione: 20170322
 Modifica: 20170401
 Funzione: componente react che renderizza il contenuto della sidebar
 del node in modalità visualizzazione
 */

import React from 'react';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { AbstractContent } from './abstractContent';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il contenuto
 * della sidebar del node in modalità visualizzazione
 */

/**
 * @class ViewNodeContent
 * @extends AbstractContent
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class ViewNodeContent extends AbstractContent {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.ViewNodeContent
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.ViewNodeContent
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
   * @memberOf DeGeOP::View::Sidebar::Content.ViewNodeContent
   * @return {Object} renderizza il contenuto della sidebar del node in modalità
   * visualizzazione
   */
  render() {
    return (
      <div>
        <CardTitle
          style={this.titleStyle}
          title="Dettagli nodo"
          subtitle="Per entrare in modalità di modifica, cliccare sul pulsante Modifica"
        />

        <Card style={this.middleStyle}>
          <Input
            disabled
            type="text" label="Nome" name="name"
            value={this.props.values.name}
          />
          <Input
            disabled
            type="text" label="Classe" name="nodeClass"
            value={this.props.values.type}
          />
          {this.specializedFields()}
        </Card>
      </div>
    );
  }
}

export { ViewNodeContent };
