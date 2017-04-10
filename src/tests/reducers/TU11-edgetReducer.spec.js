// Viene verificato che l'edgeReducer esegua correttamente l'azione ricevuta sulla lista di Edge

import { Edge } from '../../DeGeOP/store/process/edge';
import { edgeReducer } from '../../DeGeOP/reducer/edgeReducer';
import * as stubObjects from '../stubs/stubObjects-spec';
import * as stubStore from '../stubs/stubStore-spec';

describe('L\'EdgeReducer', function () {
  it('aggiunge un Edge valido alla lista', function () {
    const newList = edgeReducer(stubStore.edgeList, stubObjects.actionEdgeDefinedInsert);
    const newEdge = new Edge(stubObjects.actionEdgeDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.edgeList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newEdge);
  });
  it('rimuove un Edge valido dalla lista', function () {
    const newList = edgeReducer(stubStore.edgeList, stubObjects.actionEdgeDefinedDelete);
    const newEdge = new Edge(stubObjects.actionEdgeDefinedInsert.payload);
    expect(newList.lastIndexOf(newEdge)).toBe(-1);
  });
  it('non rimuove un Edge non valido dalla lista', function () {
    const newList = edgeReducer(stubStore.edgeList, stubObjects.actionEdgeEmptyDelete);
    expect(newList.length).toBe(stubStore.edgeList.length);
  });
  it('aggiorna un Edge valido', function () {
    const newList = edgeReducer(stubStore.edgeList, stubObjects.actionEdgeDefinedUpdate);
    const newEdge = new Edge(stubObjects.actionEdgeDefinedInsert.payload);
    expect(newList.find(function (edge) {
      return (edge.uuid === stubObjects.actionEdgeDefinedUpdate.payload.uuid);
    })).toEqual(newEdge);
  });
  it('non aggiorna un Edge non valido', function () {
    const newList = edgeReducer(stubStore.edgeList, stubObjects.actionEdgeEmptyUpdate);
    const newEdge = new Edge(stubObjects.actionEdgeDefinedInsert.payload);
    expect(newList.find(function (edge) {
      return (edge.uuid === stubObjects.actionEdgeDefinedUpdate.payload.uuid);
    })).not.toEqual(newEdge);
  });
  it('non esegue nessuna azione se la tipologia di operazione non è supportata', function () {
    const newList = edgeReducer(stubStore.edgeList, stubObjects.actionTestOperation);
    expect(newList).toEqual(stubStore.edgeList);
  });
  it('crea una lista vuota ed esegue l\'operazione se quella iniziale non è definita', function () {
    const newList = edgeReducer(undefined, stubObjects.actionTestOperation);
    expect(newList).toEqual(stubStore.edgeEmpty);
  });
});
