// Viene verificato che i campi di un oggetto Node vengano validati o meno

import { Node } from '../../DeGeOP/store/process/node';
import { Edge } from '../../DeGeOP/store/process/edge';
import * as stubStrings from '../stubs/stubStrings-spec';
import { objectNode1, objectNode0, objectEdge0, objectEdge1 } from '../stubs/stubStore-spec';

describe('Un Asset', function () {
  // Nome
  it('valida il campo dati nome se contiene caratteri validi ed è più corto di 50 caratteri', function () {
    const res = Node.testNameValidation(objectNode1.name);
    expect(res).toBe(true);
  });
  it('non valida il campo dati nome se contiene caratteri non ammessi', function () {
    const res = Node.testNameValidation(stubStrings.stringInvalidChar);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati nome se è più lungo di 50 caratteri', function () {
    const res = Node.testNameValidation(stubStrings.stringLong);
    expect(res).not.toBe(true);
  });
  // Validazione Node
  it('valida tutti i campi necessari', function () {
    expect(Node.nodeIsValid(objectNode1)).toBe(true);
  });
  it('può essere creato senza dover specificare un uuid', function () {
    const node = new Node(objectNode0);
    expect(node.uuid).not.toEqual(objectNode0.uuid);
  });
});

describe('Un edge', function () {
  it('può essere creato con un uuid', function () {
    const edge = new Edge(objectEdge1);
    expect(edge.uuid).toEqual(objectEdge1.uuid);
  });
  it('può essere creato senza dover specificare un uuid', function () {
    const node = new Edge(objectEdge0);
    expect(node.uuid).not.toEqual(objectEdge0.uuid);
  });
});
