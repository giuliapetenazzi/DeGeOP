/*
 File: DeGeOP/view/sidebar/content/viewAssetContent
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170407
 Funzione: componente react che renderizza il contenuto della sidebar dell'asset
 in modalità visualizzazione
 */

import React from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { AbstractContent } from './abstractContent';
import { Sketch } from './sketch';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il contenuto della sidebar dell'asset
 in modalità visualizzazione
 */

/**
 * @class ViewAssetContent
 * @extends AbstractContent
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class ViewAssetContent extends AbstractContent {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.ViewAssetContent
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

/**
 * @function
 * @memberOf DeGeOP::View::Sidebar::Content.ViewAssetContent
 * @return {Object} renderizza il contenuto della sidebar dell'asset in modalità
 * visualizzazione
*/
  render() {
    return (
      <div>
        <CardTitle
          style={this.titleStyle}
          title="Dettagli asset"
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
            type="text" label="Descrizione" name="description"
            value={this.props.values.description}
          />
          <Input
            disabled
            type="text" label="Proprietario" name="owner"
            value={this.props.values.ownership}
          />
          <Input
            disabled
            type="text" label="Materiale" name="material"
            value={this.props.values.material}
          />
          <CardText style={{ paddingLeft: '0', paddingBottom: '0.3em', color: 'lightgray', cursor: 'default' }}>
            Colore sulla mappa:
          </CardText>
          <Sketch
            displayColorPicker={this.props.values.displayColorPicker}
            color={this.props.values.color}
          />
          <Input
            disabled
            type="text" label="Superficie" name="surface"
            value={this.props.values.surface}
          />
          <Input
            disabled
            type="text" label="Valore economico" name="ecValue"
            value={this.props.values.unitValue}
          />

        </Card>
      </div>
    );
  }
}

export { ViewAssetContent };

