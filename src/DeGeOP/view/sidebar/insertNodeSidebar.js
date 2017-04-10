/*
 File: DeGeOP/view/sidebar/insertNodeSidebar.js
 Autore: Giulia Petenazzi
 Creazione: 20170327
 Modifica: 20170401
 Funzione: componente react che renderizza la sidebar del node in modalità inserimento e modifica
 */

import React from 'react';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { InsertNodeContent } from './content/insertNodeContent';
import { TwoButtons } from './buttons/twoButtons';

/*
	@class [InsertNodeSidebar]
	@memberof [DeGeOP::view::sidebar::insertNodeSidebar.js]
	@constructs [constructor];
 */

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la sidebar del node in modalità inserimento e
 * modifica
 */

/**
 * @class InsertNodeSidebar
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar
 */
class InsertNodeSidebar extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.InsertNodeSidebar
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.InsertNodeSidebar
   * @return {Object} renderizza la sidebar del node in modalità inserimento e modifica
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

          <InsertNodeContent
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

export { InsertNodeSidebar };
