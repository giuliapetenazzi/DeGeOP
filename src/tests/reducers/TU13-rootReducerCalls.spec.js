// Viene verificato che il Reducer invochi il reducer corretto rispetto all'azione ricevuta

import { reducer } from '../../DeGeOP/reducer/reducer';
import { assetReducer } from '../../DeGeOP/reducer/assetReducer';
import { edgeReducer } from '../../DeGeOP/reducer/edgeReducer';
import { nodeReducer } from '../../DeGeOP/reducer/nodeReducer';
import { optionReducer } from '../../DeGeOP/reducer/optionReducer';

import * as stubObjects from '../stubs/stubObjects-spec';
import * as stubStore from '../stubs/stubStore-spec';

describe('Il reducer', function () {
  let classReducer = null;
  beforeEach(function () {
    classReducer = {
      fakeAssetReducer: assetReducer,
      fakeNodeReducer: nodeReducer,
      fakeEdgeReducer: edgeReducer,
      fakeOptionReducer: optionReducer,
      fakeReducer: reducer,
    };
    spyOn(classReducer, 'fakeReducer').and.callThrough();
    // spyOn(classReducer, 'fakeReducer').and.callFake(function (state, action) {
    //   switch (action.type) {
    //     case 'ASSET': classReducer.fakeAssetReducer(state.assets, action);
    //       break;
    //     case 'NODE': classReducer.fakeNodeReducer(state.nodes, action);
    //       break;
    //     case 'EDGE': classReducer.fakeEdgeReducer(state.edges, action);
    //       break;
    //     case 'OPTION': classReducer.fakeOptionReducer(state.options, action);
    //       break;
    //     default:
    //       break;
    //   }
    // });
  });
  it('chiama l\'AssetReducer se l\'azione ha tipo ASSET', function () {
    // spyOn(classReducer, 'fakeAssetReducer');
    classReducer.fakeReducer(stubStore.objectStore, stubObjects.actionAssetDefinedInsert);
    expect(classReducer.fakeReducer).toHaveBeenCalledWith(
      stubStore.objectStore, stubObjects.actionAssetDefinedInsert);
    // expect(classReducer.fakeAssetReducer).toHaveBeenCalledWith(
    //   stubStore.objectStore.assets, stubObjects.actionAssetDefinedInsert);
  });
  it('chiama il NodeReducer se l\'azione ha tipo NODE', function () {
  //   spyOn(classReducer, 'fakeNodeReducer');
    classReducer.fakeReducer(stubStore.objectStore, stubObjects.actionNodeDefinedInsert);
    expect(classReducer.fakeReducer).toHaveBeenCalledWith(
      stubStore.objectStore, stubObjects.actionNodeDefinedInsert);
  //   expect(classReducer.fakeNodeReducer).toHaveBeenCalledWith(
  //     stubStore.objectStore.nodes, stubObjects.actionNodeDefinedInsert);
  });
  it('chiama l\'EdgeReducer se l\'azione ha tipo EDGE', function () {
  //   spyOn(classReducer, 'fakeEdgeReducer');
    classReducer.fakeReducer(stubStore.objectStore, stubObjects.actionEdgeDefinedInsert);
    expect(classReducer.fakeReducer).toHaveBeenCalledWith(
      stubStore.objectStore, stubObjects.actionEdgeDefinedInsert);
  //   expect(classReducer.fakeEdgeReducer).toHaveBeenCalledWith(
  //     stubStore.objectStore.edges, stubObjects.actionEdgeDefinedInsert);
  });
  it('chiama l\'OptionReducer se l\'azione ha tipo OPTION', function () {
  //   spyOn(classReducer, 'fakeOptionReducer');
    classReducer.fakeReducer(stubStore.objectStore, stubObjects.actionOption);
    expect(classReducer.fakeReducer).toHaveBeenCalledWith(
      stubStore.objectStore, stubObjects.actionOption);
  //   expect(classReducer.fakeOptionReducer).toHaveBeenCalledWith(
  //     stubStore.objectStore.options, stubObjects.actionOption);
  });
  it('non esegue nessuna azione se la tipologia di operazione non è supportata', function () {
    const newStore = classReducer.fakeReducer(
      stubStore.objectStore, stubObjects.actionTestOperation);
    expect(newStore).toEqual(stubStore.objectStore);
  });
  it('restituisce uno store vuoto se è chiamato con uno non definito', function () {
    const newStore = classReducer.fakeReducer(undefined, stubObjects.actionTestOperation);
    expect(newStore).toEqual(stubObjects.objectEmpty);
  });
  // it('non fa nulla se chiamato con un Asset vuoto', function () {
  //   spyOn(classReducer, 'fakeAssetReducer');
  //   spyOn(classReducer, 'fakeNodeReducer');
  //   spyOn(classReducer, 'fakeEdgeReducer');
    // const newStore = classReducer.fakeReducer(
    //   stubStore.objectStore, stubObjects.actionAssetEmptyInsert);
    // expect(newStore).toEqual(stubStore.objectStore);
    // expect(classReducer.fakeReducer).toHaveBeenCalledWith(
    //   stubStore.objectStore, stubObjects.objectEmpty);
  //   expect(classReducer.fakeAssetReducer).not.toHaveBeenCalled();
  //   expect(classReducer.fakeNodeReducer).not.toHaveBeenCalled();
  //   expect(classReducer.fakeEdgeReducer).not.toHaveBeenCalled();
  // });
  it('non fa nulla se chiamato con un Asset vuoto', function () {
    const newStore = classReducer.fakeReducer(
      stubStore.objectStore, stubObjects.actionAssetEmptyInsert);
    expect(newStore).toEqual(stubStore.objectStore);
  });
  it('non fa nulla se chiamato con un Edge vuoto', function () {
    const newStore = classReducer.fakeReducer(
        stubStore.objectStore, stubObjects.actionEdgeEmptyInsert);
    expect(newStore).toEqual(stubStore.objectStore);
  });
  it('non fa nulla se chiamato con un Node vuoto', function () {
    const newStore = classReducer.fakeReducer(
        stubStore.objectStore, stubObjects.actionNodeEmptyInsert);
    expect(newStore).toEqual(stubStore.objectStore);
  });
});
