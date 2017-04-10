/*
 File: DeGeOP/view/sidebar/homeSidebar.js
 Autore: Giulia Petenazzi
 Creazione: 20170315
 Modifica: 20170407
 Funzione: componente react che renderizza la sidebar di default
 */

import React from 'react';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { CardTitle } from 'react-toolbox/lib/card';

/**
 * @author Giulia Petenazzi
 * @description componente react che renderizza la sidebar di default
 * @namespace DeGeOP::View::Sidebar
 */

/**
 * @class HomeSidebar
 * @extends React.Component
 * @memberOf DeGeOP::View::Sidebar
 */
class HomeSidebar extends React.Component {

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.HomeSidebar
   * @param {Object} props parametri per la creazione di componenti react
   */
  constructor(props) {
    super(props);
  }

  /**
   * @function
   * @memberOf DeGeOP::View::Sidebar.HomeSidebar
   * @return {Object} renderizza il contenuto della sidebar di default
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
          <CardTitle
            title="Benvenuto in DeGeOP"
            subtitle="DeGeOP è la tua applicazione che si occupa del disegno di
             processi produttivi su mappa"
          />
        </Layout>
      </div>
    );
  }
}

export { HomeSidebar };
