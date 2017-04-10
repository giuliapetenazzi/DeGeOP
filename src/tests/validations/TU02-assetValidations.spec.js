// Viene verificato che i campi di un oggetto Asset vengano validati o meno

import { Asset } from '../../DeGeOP/store/process/asset';
import * as stubStrings from '../stubs/stubStrings-spec';
import { objectAsset1, objectAsset0 } from '../stubs/stubStore-spec';

describe('Un Asset', function () {
  // Nome
  it('valida il campo dati nome se contiene caratteri validi ed è più corto di 50 caratteri', function () {
    const res = Asset.testNameValidation(objectAsset1.name);
    expect(res).toBe(true);
  });
  it('non valida il campo dati nome se contiene caratteri non ammessi', function () {
    const res = Asset.testNameValidation(stubStrings.stringInvalidChar);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati nome se è più lungo di 50 caratteri', function () {
    const res = Asset.testNameValidation(stubStrings.stringLong);
    expect(res).not.toBe(true);
  });
  // Descrizione
  it('valida il campo dati descrizione se contiene caratteri validi ed è più corto di 50 caratteri', function () {
    const res = Asset.testDescriptionValidation(objectAsset1.description);
    expect(res).toBe(true);
  });
  it('non valida il campo dati descrizione se contiene caratteri non ammessi', function () {
    const res = Asset.testDescriptionValidation(stubStrings.stringInvalidChar);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati descrizione se è più lungo di 50 caratteri', function () {
    const res = Asset.testDescriptionValidation(stubStrings.stringLong.repeat(1000));
    expect(res).not.toBe(true);
  });
  // Superficie
  it('valida il campo dati superficie se contiene al massimo 5 cifre per la parte intera e 2 per la parte decimale', function () {
    const res = Asset.testSurfaceValidation(objectAsset1.surface);
    expect(res).toBe(true);
  });
  it('non valida il campo dati superficie se contiene un numero non valido', function () {
    const res = Asset.testSurfaceValidation(stubStrings.decimalNotValid);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati superficie se contiene più di 5 cifre per la parte intera', function () {
    const res = Asset.testSurfaceValidation(stubStrings.decimalLongFirst);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati superficie se contiene più di 2 cifre per la parte decimale', function () {
    const res = Asset.testSurfaceValidation(stubStrings.decimalLongLast);
    expect(res).not.toBe(true);
  });
  // Valore unitario
  it('valida il campo dati valore unitario se contiene al massimo 20 cifre per la parte intera e 2 per la parte decimale', function () {
    const res = Asset.testUnitValueValidation(objectAsset1.unitValue);
    expect(res).toBe(true);
  });
  it('non valida il campo dati valore unitario se contiene più di 20 cifre per la parte intera', function () {
    const res = Asset.testUnitValueValidation(stubStrings.decimalLongLongFirst);
    expect(res).not.toBe(true);
  });
  it('non valida il campo dati valore unitario se contiene più di 2 cifre per la parte decimale', function () {
    const res = Asset.testUnitValueValidation(stubStrings.decimalLongLast);
    expect(res).not.toBe(true);
  });
  // Validazione Asset
  it('valida tutti i campi necessari', function () {
    expect(Asset.assetIsValid(objectAsset1)).toBe(true);
  });
  it('può essere creato senza dover specificare un uuid', function () {
    const asset = new Asset(objectAsset0);
    expect(asset.uuid).not.toEqual(objectAsset0.uuid);
  });
});
