// Viene verificato che il NodeCreator crei correttamente le azioni relative ad un oggetto Node

import { NodeActionCreator } from '../../DeGeOP/action/actionCreators/nodeActionCreator';
import * as stubObjects from '../stubs/stubObjects-spec';

describe('Il NodeActionCreator', function () {
  it('crea un\'azione di tipo INSERT', function () {
    const actionInsert = NodeActionCreator.insertNode(stubObjects.objectNode);
    expect(actionInsert).toEqual(stubObjects.actionNodeDefinedInsert);
  });
  it('crea un\'azione di tipo UPDATE', function () {
    const actionUpdate = NodeActionCreator.editNode(stubObjects.objectNode);
    expect(actionUpdate).toEqual(stubObjects.actionNodeDefinedUpdate);
  });
  it('crea un\'azione di tipo DELETE', function () {
    const actionDelete = NodeActionCreator.deleteNode(stubObjects.objectNode);
    expect(actionDelete).toEqual(stubObjects.actionNodeDefinedDelete);
  });
});
