// Viene verificato che il NodeReducer esegua correttamente l'azione ricevuta sulla lista di Node

import { Node } from '../../DeGeOP/store/process/node';
import { ResourceNode } from '../../DeGeOP/store/process/resourceNode';
import { ExitNode } from '../../DeGeOP/store/process/exitNode';
import { QueueNode } from '../../DeGeOP/store/process/queueNode';
import { SourceNode } from '../../DeGeOP/store/process/sourceNode';
import { MachineNode } from '../../DeGeOP/store/process/machineNode';
import { nodeReducer } from '../../DeGeOP/reducer/nodeReducer';
import * as stubObjects from '../stubs/stubObjects-spec';
import * as stubStore from '../stubs/stubStore-spec';

describe('Il NodeReducer', function () {
  it('aggiunge un Node valido alla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeDefinedInsert);
    const newNode = new Node(stubObjects.actionNodeDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.nodeList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newNode);
  });
  it('aggiunge un ResourceNode valido alla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeResourceDefinedInsert);
    const newNode = new ResourceNode(stubObjects.actionNodeResourceDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.nodeList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newNode);
  });
  it('aggiunge un ExitNode valido alla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeExitDefinedInsert);
    const newNode = new ExitNode(stubObjects.actionNodeExitDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.nodeList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newNode);
  });
  it('aggiunge un QueueNode valido alla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeQueueDefinedInsert);
    const newNode = new QueueNode(stubObjects.actionNodeQueueDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.nodeList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newNode);
  });
  it('aggiunge un SourceNode valido alla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeSourceDefinedInsert);
    const newNode = new SourceNode(stubObjects.actionNodeSourceDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.nodeList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newNode);
  });
  it('aggiunge un MachineNode valido alla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeMachineDefinedInsert);
    const newNode = new MachineNode(stubObjects.actionNodeMachineDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.nodeList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newNode);
  });
  it('non aggiunge un Node non valido alla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeInvalidInsert);
    const newNode = new Node(stubObjects.actionNodeDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.nodeList.length);
    expect(newList[newList.length - 1]).not.toEqual(newNode);
  });
  it('rimuove un Node valido dalla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeDefinedDelete);
    const newNode = new Node(stubObjects.actionNodeDefinedInsert.payload);
    expect(newList.lastIndexOf(newNode)).toBe(-1);
  });
  it('non rimuove un Node non valido dalla lista', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeEmptyDelete);
    expect(newList.length).toBe(stubStore.nodeList.length);
  });
  it('aggiorna un Node valido', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeDefinedUpdate);
    const newNode = new Node(stubObjects.actionNodeDefinedInsert.payload);
    expect(newList.find(function (node) {
      return (node.uuid === stubObjects.actionNodeDefinedUpdate.payload.uuid);
    })).toEqual(newNode);
  });
  it('non aggiorna un Node non valido', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionNodeInvalidUpdate);
    const newNode = new Node(stubObjects.actionNodeInvalidUpdate.payload);
    expect(newList.find(function (node) {
      return (node.uuid === stubObjects.actionNodeInvalidUpdate.payload.uuid);
    })).not.toEqual(newNode);
  });
  it('non esegue nessuna azione se la tipologia di operazione non è supportata', function () {
    const newList = nodeReducer(stubStore.nodeList, stubObjects.actionTestOperation);
    expect(newList).toEqual(stubStore.nodeList);
  });
  it('crea una lista vuota ed esegue l\'operazione se quella iniziale non è definita', function () {
    const newList = nodeReducer(undefined, stubObjects.actionTestOperation);
    expect(newList).toEqual(stubStore.nodeEmpty);
  });
});
