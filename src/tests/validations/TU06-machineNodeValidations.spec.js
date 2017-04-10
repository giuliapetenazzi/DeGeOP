// Viene verificato che i campi di un oggetto MachineNode vengano validati o meno

import { MachineNode } from '../../DeGeOP/store/process/machineNode';
import * as stubStrings from '../stubs/stubStrings-spec';
import { objectNodeMachine } from '../stubs/stubStore-spec';

describe('Un MachineNode', function () {
  // Capacità
  it('valida il campo dati capacità se contiene al massimo 5 cifre per la parte intera e 2 per la parte decimale', function () {
    const res = MachineNode.testCapacityValidation(objectNodeMachine.capacity);
    expect(res).toBe(true);
  });
  it('non valida il campo dati capacità se contiene un numero non valido', function () {
    const res = MachineNode.testCapacityValidation(stubStrings.decimalNotValid);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati capacità se contiene più di 5 cifre per la parte intera', function () {
    const res = MachineNode.testCapacityValidation(stubStrings.decimalLongFirst);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati capacità se contiene più di 2 cifre per la parte decimale', function () {
    const res = MachineNode.testCapacityValidation(stubStrings.decimalLongLast);
    expect(res).not.toBe(true);
  });
  // Tempo di processo
  it('valida il campo dati tempo di processo se contiene al massimo 5 cifre per la parte intera e 2 per la parte decimale', function () {
    const res = MachineNode.testProcessingTimeValidation(objectNodeMachine.processingTime);
    expect(res).toBe(true);
  });
  it('non valida il campo dati tempo di processo se contiene un numero non valido', function () {
    const res = MachineNode.testProcessingTimeValidation(stubStrings.decimalNotValid);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati tempo di processo se contiene più di 5 cifre per la parte intera', function () {
    const res = MachineNode.testProcessingTimeValidation(stubStrings.decimalLongFirst);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati tempo di processo se contiene più di 2 cifre per la parte decimale', function () {
    const res = MachineNode.testProcessingTimeValidation(stubStrings.decimalLongLast);
    expect(res).not.toBe(true);
  });
  // Valore
  it('valida il campo dati valore se contiene al massimo 5 cifre per la parte intera e 2 per la parte decimale', function () {
    const res = MachineNode.testValueValidation(objectNodeMachine.value);
    expect(res).toBe(true);
  });
  it('non valida il campo dati valore se contiene un numero non valido', function () {
    const res = MachineNode.testValueValidation(stubStrings.decimalNotValid);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati valore se contiene più di 20 cifre per la parte intera', function () {
    const res = MachineNode.testValueValidation(stubStrings.decimalLongLongFirst);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati valore se contiene più di 2 cifre per la parte decimale', function () {
    const res = MachineNode.testValueValidation(stubStrings.decimalLongLast);
    expect(res).not.toBe(true);
  });
  // Validazione MachineNode
  it('valida tutti i campi necessari', function () {
    expect(MachineNode.nodeIsValid(objectNodeMachine)).toBe(true);
  });
});
