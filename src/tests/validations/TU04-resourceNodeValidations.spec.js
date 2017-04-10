// Viene verificato che i campi di un oggetto ResourceNode vengano validati o meno

import { ResourceNode } from '../../DeGeOP/store/process/resourceNode';
import { objectNode1 } from '../stubs/stubStore-spec';

describe('Un Asset', function () {
  // Validazione ResourceNode
  it('valida tutti i campi necessari', function () {
    expect(ResourceNode.nodeIsValid(objectNode1)).toBe(true);
  });
});
