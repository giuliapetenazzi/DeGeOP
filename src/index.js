/**
 * @namespace DeGeOP
 */
// importazione librerie
import React from 'react';
import ReactDOM from 'react-dom';
// import ./DeGeOP/action/actionCreators/analysisActionCreator.js

// importazione Provider di React-Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// importazione codice prodotto da Zephyrus
import { DeGeOPView } from './DeGeOP/view/DeGeOPView/DeGeOPView';
import { reducer } from './DeGeOP/reducer/reducer';
import { MapWrapper } from './DeGeOP/view/mapComponents/mapWrapper';
import { ButtonWrapper } from './DeGeOP/view/mapComponents/buttonWrapper';
import { MessageWrapper } from './DeGeOP/view/mapComponents/messageWrapper';
import { PolygonOperationWrapper } from './DeGeOP/view/mapComponents/polygonOperationWrapper';
import { DropdownOwnership } from './DeGeOP/view/sidebar/content/dropdownOwnership';
import { DropdownMaterial } from './DeGeOP/view/sidebar/content/dropdownMaterial';
import { DropdownNodeClass } from './DeGeOP/view/sidebar/content/dropdownNodeClass';
import {OptionActionCreator} from './DeGeOP/action/actionCreators/optionActionCreator'

import { insertData } from './testData';


// Permette a DeGeOPView di accedere allo store tramite il context.
// Qualsiasi altra componente desideri accedere allo store via context
// dovrà avere una riga tipo la seguente.
// La componente "iscritta" al Provider può accedere allo store usando :
// const { store } = this.context;

DeGeOPView.contextTypes = {
  store: React.PropTypes.object,
};

MapWrapper.contextTypes = {
  store: React.PropTypes.object,
};

ButtonWrapper.contextTypes = {
  store: React.PropTypes.object,
};
MessageWrapper.contextTypes = {
  store: React.PropTypes.object,
};
PolygonOperationWrapper.contextTypes = {
  store: React.PropTypes.object,
};
DropdownOwnership.contextTypes = {
  store: React.PropTypes.object,
};

DropdownMaterial.contextTypes = {
  store: React.PropTypes.object,
};

DropdownNodeClass.contextTypes = {
  store: React.PropTypes.object,
};


const store = createStore(reducer); // creo lo store, accetta il root reducer

insertData(store);

ReactDOM.render(
  <Provider store={store}>
    <DeGeOPView />
  </Provider>,
    document.getElementById('app'),
);

