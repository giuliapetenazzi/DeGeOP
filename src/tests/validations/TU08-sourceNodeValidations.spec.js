// Viene verificato che i campi di un oggetto SourceNode vengano validati o meno

import { SourceNode } from '../../DeGeOP/store/process/sourceNode';
import * as stubStrings from '../stubs/stubStrings-spec';
import { objectNodeSource } from '../stubs/stubStore-spec';

describe('Un SourceNode', function () {
  // Capacità
  it('valida il campo dati capacità se contiene al massimo 5 cifre per la parte intera e 2 per la parte decimale', function () {
    const res = SourceNode.testLeadTimeValidation(objectNodeSource.leadTime);
    expect(res).toBe(true);
  });
  it('non valida il campo dati capacità se contiene un numero non valido', function () {
    const res = SourceNode.testLeadTimeValidation(stubStrings.decimalNotValid);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati capacità se contiene più di 5 cifre per la parte intera', function () {
    const res = SourceNode.testLeadTimeValidation(stubStrings.decimalLongFirst);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati capacità se contiene più di 2 cifre per la parte decimale', function () {
    const res = SourceNode.testLeadTimeValidation(stubStrings.decimalLongLast);
    expect(res).not.toBe(true);
  });
  // Validazione SourceNode
  it('valida tutti i campi necessari', function () {
    expect(SourceNode.nodeIsValid(objectNodeSource)).toBe(true);
  });
});
