/*
 File: DeGeOP/view/sidebar/content/viewEdgeContent
 Autore: Giulia Petenazzi
 Creazione: 20170327
 Modifica: 20170407
 Funzione: componente react che renderizza il contenuto
 della sidebar dell'edge in modalità visualizzazione
*/

import React from 'react';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { AbstractContent } from './abstractContent';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il contenuto
 * della sidebar dell'edge in modalità visualizzazione
 */

/**
 * @class ViewEdgeContent
 * @extends AbstractContent
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class ViewEdgeContent extends AbstractContent {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.ViewEdgeContent
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.ViewAssetContent
   * @return {Object} renderizza il contenuto della sidebar dell'edge in modalità
   * visualizzazione
   */
  render() {
    return (
      <div>
        <CardTitle
          style={this.titleStyle}
          title="Dettagli arco"
          subtitle="Per entrare in modalità di modifica, cliccare sul pulsante Modifica"
        />

        <Card style={this.middleStyle}>
          Nessuna informazione aggiuntiva da mostrare
        </Card>
      </div>
    );
  }
}

export { ViewEdgeContent };
