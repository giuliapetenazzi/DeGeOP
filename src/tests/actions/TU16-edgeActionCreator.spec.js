// Viene verificato che l'EdgeCreator crei correttamente le azioni relative ad un oggetto Edge

import { EdgeActionCreator } from '../../DeGeOP/action/actionCreators/edgeActionCreator';
import * as stubObjects from '../stubs/stubObjects-spec';

describe('L\'EdgeActionCreator', function () {
  it('crea un\'azione di tipo INSERT', function () {
    const actionInsert = EdgeActionCreator.insertEdge(stubObjects.objectEdge);
    expect(actionInsert).toEqual(stubObjects.actionEdgeDefinedInsert);
  });
  it('crea un\'azione di tipo UPDATE', function () {
    const actionUpdate = EdgeActionCreator.editEdge(stubObjects.objectEdge);
    expect(actionUpdate).toEqual(stubObjects.actionEdgeDefinedUpdate);
  });
  it('crea un\'azione di tipo DELETE', function () {
    const actionDelete = EdgeActionCreator.deleteEdge(stubObjects.objectEdge);
    expect(actionDelete).toEqual(stubObjects.actionEdgeDefinedDelete);
  });
});
