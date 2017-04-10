/*
 File: DeGeOP/view/sidebar/viewNodeSidebar.js
 Autore: Giulia Petenazzi
 Creazione: 20170321
 Modifica: 20170401
 Funzione: componente react che renderizza la sidebar del node in modalità visualizzazione
 */

import React from 'react';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { ViewNodeContent } from './content/viewNodeContent';
import { ThreeButtons } from './buttons/threeButtons';

/**
 * @author Giulia Petenazzi
 * @description  componente react che renderizza la sidebar del node in modalità visualizzazione
 */

/**
 * @class ViewNodeSidebar
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar
 */
class ViewNodeSidebar extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.ViewNodeSidebar
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.ViewNodeSidebar
   * @return {Object} renderizza la sidebar del node in modalità visualizzazione
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
          <ViewNodeContent
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

export { ViewNodeSidebar };
