/*
 File: DeGeOP/view/sidebar/viewAssetSidebar.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170407
 Funzione: componente react che renderizza la sidebar dell'asset in modalità visualizzazione
 */

import React from 'react';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { ViewAssetContent } from './content/viewAssetContent';
import { ThreeButtons } from './buttons/threeButtons';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la sidebar dell'asset in modalità visualizzazione
 */

/**
 * @class ViewAssetSidebar
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar
 */
class ViewAssetSidebar extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.ViewAssetSidebar
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.ViewAssetSidebar
   * @return {Object} renderizza il contenuto della sidebar dell'asset in modalità visualizzazione
   */
  render() {
    return (
      <div
        id="sidebar"
        style={{
          display: 'inline-block',
          borderLeft: '1pt gray solid',
          width: '30%',
          padding: '0.7em',
          minWidth: '230px',
        }}
      >
        <Layout>
          <ViewAssetContent
              // passo lo stato come props alla componente figlia
            values={this.props.values}
          />
          <ThreeButtons
            changeSidebarType={this.props.changeSidebarType}
            deleteElement={this.props.deleteElement}
            destinationEditSidebar={this.props.destinationEditSidebar}
          />
        </Layout>
      </div>
    );
  }
}

export { ViewAssetSidebar };
