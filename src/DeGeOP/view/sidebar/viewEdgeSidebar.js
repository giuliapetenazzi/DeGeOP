/*
 File: DeGeOP/view/sidebar/viewEdgeSidebar.js
 Autore: Giulia Petenazzi
 Creazione: 20170327
 Modifica: 20170401
 Funzione: componente react che renderizza la sidebar dell'edge in modalità visualizzazione
 */

import React from 'react';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { ViewEdgeContent } from './content/viewEdgeContent';
import { ThreeButtons } from './buttons/threeButtons';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la sidebar dell'edge in modalità visualizzazione
 */

/**
 * @class ViewEdgeSidebar
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar
 */
class ViewEdgeSidebar extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.ViewEdgeSidebar
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.ViewEdgeSidebar
   * @return {Object} renderizza la sidebar dell'edge in modalità visualizzazione
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
          <ViewEdgeContent
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

export { ViewEdgeSidebar };
