/*
 File: DeGeOP/view/sidebar/content/insertEdgeContent.js
 Autore: Giulia Petenazzi
 Creazione: 20170322
 Modifica: 20170407
 Funzione: componente react che renderizza il contenuto della sidebar dell'edge in modalità
 inserimento e modifica e ne gestisce i cambiamenti
 */

import React from 'react';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { AbstractContent } from './abstractContent';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza il contenuto della sidebar dell'edge in modalità
 * inserimento e modifica e ne gestisce i cambiamenti
 */

/**
 * @class InsertEdgeContent
 * @extends AbstractContent
 * @memberOf DeGeOP::View::Sidebar::Content
 */
class InsertEdgeContent extends AbstractContent {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertEdgeContent
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar::Content.InsertEdgeContent
   * @return {Object} renderizza il il contenuto della sidebar dell'edge in modalità
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
					Nessuna informazione aggiuntiva da mostrare
        </Card>
      </div>
    );
  }
}

export { InsertEdgeContent };
