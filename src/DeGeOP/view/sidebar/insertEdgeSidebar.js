/*
 File: DeGeOP/view/sidebar/insertAssetSidebar.js
 Autore: Giulia Petenazzi
 Creazione: 20170321
 Modifica: 20170407
 Funzione: componente react che renderizza la sidebar dell'edge in modalità inserimento e modifica
 */

import React from 'react';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { InsertEdgeContent } from './content/insertEdgeContent';
import { TwoButtons } from './buttons/twoButtons';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la sidebar dell'edge in modalità inserimento e
 * modifica
 */

/**
 * @class InsertEdgeSidebar
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar
 */
class InsertEdgeSidebar extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.InsertEdgeSidebar
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.InsertEdgeSidebar
   * @return {Object} renderizza la sidebar dell'edge in modalità inserimento e modifica
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

          <InsertEdgeContent
              // passo lo stato come props alla componente figlia
            values={this.props.values}
            title={this.props.title}
            subtitle={this.props.subtitle}
              // passo gli onChange come props alla componente figlia
            handleChange={this.props.handleChange}
          />

          <TwoButtons
            emitAction={this.props.emitAction}
            isDisabled={this.props.values.isDisabled}
            changeSidebarType={this.props.changeSidebarType}
          />

        </Layout>
      </div>
    );
  }
}

export { InsertEdgeSidebar };
