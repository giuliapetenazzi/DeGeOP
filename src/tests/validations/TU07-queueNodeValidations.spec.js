// Viene verificato che i campi di un oggetto QueueNode vengano validati o meno

import { QueueNode } from '../../DeGeOP/store/process/queueNode';
import * as stubStrings from '../stubs/stubStrings-spec';
import { objectNodeQueue } from '../stubs/stubStore-spec';

describe('Un QueueNode', function () {
  // Capacità
  it('valida il campo dati capacità se contiene al massimo 5 cifre per la parte intera e 2 per la parte decimale', function () {
    const res = QueueNode.testCapacityValidation(objectNodeQueue.capacity);
    expect(res).toBe(true);
  });
  it('non valida il campo dati capacità se contiene un numero non valido', function () {
    const res = QueueNode.testCapacityValidation(stubStrings.decimalNotValid);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati capacità se contiene più di 5 cifre per la parte intera', function () {
    const res = QueueNode.testCapacityValidation(stubStrings.decimalLongFirst);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati capacità se contiene più di 2 cifre per la parte decimale', function () {
    const res = QueueNode.testCapacityValidation(stubStrings.decimalLongLast);
    expect(res).not.toBe(true);
  });
  // Validazione QueueNode
  it('valida tutti i campi necessari', function () {
    expect(QueueNode.nodeIsValid(objectNodeQueue)).toBe(true);
  });
});
