// Viene verificato che i campi di un oggetto ExitNode vengano validati o meno

import { ExitNode } from '../../DeGeOP/store/process/exitNode';
import { objectNode1 } from '../stubs/stubStore-spec';

describe('Un Asset', function () {
  // Validazione ResourceNode
  it('valida tutti i campi necessari', function () {
    expect(ExitNode.nodeIsValid(objectNode1)).toBe(true);
  });
});
