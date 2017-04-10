/*
 File: src/DeGeOP/store/process/asset.js
 Autore: Daniel De Gaspari
 Creazione: 20170320
 Modifica: 20170401
 Funzione: rappresenta l'asset presente nello store
 */
import { uuidGenerator } from './uuidGenerator';

/**
* @author Daniel De Gaspari
* @description Rappresenta un asset del cliente con le relative informazioni
*/

/**
 * @class Asset
 * @memberOf DeGeOP::Store::Process
 */
class Asset {
  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @param  {object} param Rappresenta l'oggetto contenente i dati relativi
   * all'asset che viene creato
  */
  constructor(param) {
    let uuid = param.uuid;
    if (param.uuid === null) {
      uuid = uuidGenerator();
    }
    this.uuid = uuid;
    this.name = param.name;
    this.type = param.type;
    this.ownership = param.ownership;
    this.color = param.color;
    this.surface = param.surface;
    this.unitValue = param.unitValue;
    this.currency = param.currency;
    this.description = param.description;
    this.polygon = param.polygon;
    if (param.currency === null) { this.currency = '€'; }
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @return {String} Il metodo restituisce la stringa corrispondente alla RegExp relativa
   * ad una stringa
  * non contenente nessuna delle seguenti caratteristiche:
  * - vuota
  * - più lunga di 50 caratteri
  * - inizia e/o finisce con uno spazio
  * - contiene caratteri speciali
  */
  static getNameValidation() {
    return "^\\w[\\w\\s']{0,49}$";
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @param  {String} name Rappresenta il nome dell' asset
  * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita
   * dalla POST-condizione del metodo getNameValidation()
  */
  static testNameValidation(name) {
    const regExp = new RegExp(Asset.getNameValidation(), 'i');
    return regExp.test(name);
  }

  /* sezione per testare la descrizione dell'asset */

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @return {String} Il metodo restituisce la stringa corrispondente alla RegExp relativa
   * ad una stringa non contenente
   * nessuna delle seguenti caratteristiche:
  * - vuota
  * - più lunga di 5000 caratteri
  * - inizia e/o finisce con uno spazio
  * - contiene caratteri speciali diversi dall'apostrofo
  */
  static getDescriptionValidation() {
    return "^\\w[\\w'\\s]{0,4999}$";
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @param  {String} description Rappresenta la descrizione dell' asset
  * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
     * regolare garantita dalla POST-condizione del metodo getDescriptionValidation()
  */
  static testDescriptionValidation(description) {
    const regExp = new RegExp(Asset.getDescriptionValidation(), 'i');
    return regExp.test(description);
  }

  /* sezione per testare la superficie dell'asset */

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @return {String} Il metodo restituisce la stringa corrispondente alla RegExp relativa
   * ad una stringa
   * non contenente nessuna delle seguenti caratteristiche:
   * - vuota
   * - più lunga di 5 cifre per la parte intera
   * - più lunga di 2 cifre per la parte decimale
   * - contiene caratteri non numerici
  */
  static getSurfaceValidation() {
    return '^[0-9]{1,5}([\\.\\,]{1}[0-9]{1,2})?$';
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @param  {number} surface Rappresenta la superficie dell' asset
   * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita dalla POST-condizione del metodo getSurfaceValidation()
  */
  static testSurfaceValidation(surface) {
    const regExp = new RegExp(Asset.getSurfaceValidation(), 'i');
    return regExp.test(surface);
  }

  /* sezione per testare il valore unitario dell'asset */

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @return {String} Il metodo restituisce la stringa corrispondente alla RegExp relativa
   * ad una stringa
   * non contenente nessuna delle seguenti caratteristiche:
   * - vuota
   * - più lunga di 20 cifre per la parte intera
   * - più lunga di 2 cifre per la parte decimale
   * - contiene caratteri non numerici
  */
  static getUnitValueValidation() {
    return '^[0-9]{1,20}([\\.\\,]{1}[0-9]{1,2})?$';
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @param  {number} unitValue Rappresenta il valore unitario dell' asset
  * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita dalla POST-condizione del metodo getUnitValueValidation()
  */
  static testUnitValueValidation(unitValue) {
    const regExp = new RegExp(Asset.getUnitValueValidation(), 'i');
    return regExp.test(unitValue);
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Asset
  * @param  {Object} asset Rappresenta il payload relativamente ad un asset
  * @return {boolean} Il metodo restituisce true solamente se gli attributi del payload hanno
   * valori significativi
   * e sono validi
  */
  static assetIsValid(asset) {
    return (Asset.testNameValidation(asset.name) &&
      Asset.testDescriptionValidation(asset.description) &&
      Asset.testSurfaceValidation(asset.surface) &&
      Asset.testUnitValueValidation(asset.unitValue));
  }
}

export { Asset };
