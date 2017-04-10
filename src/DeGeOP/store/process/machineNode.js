/*
 File: src/DeGeOP/store/process/machineNode.js
 Autore: Daniel De Gaspari
 Creazione: 20170322
 Modifica: 20170402
 Funzione: rappresenta la classe machineNode presente nello store
 */

import { Node } from './node';

/**
 * @author Daniel De Gaspari
 * @description rappresenta un nodo di tipo Macchina
 */

/**
 * @class MachineNode
 * @extends Node
 * @memberOf DeGeOP::Store::Process
 */
class MachineNode extends Node {

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @param  {Object} param Rappresenta l'oggetto contenente i dati relativi al
   * nodo macchina che viene creato
  */
  constructor(param) {
    super(param);

    this.capacity = param.capacity;
    this.processingTime = param.processingTime;
    this.value = param.value;
  }

  /* sezione per testare la capacità del nodo macchina*/

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @return {string} Il metodo restituisce la stringa corrispondente
   * alla RegExp relativa ad una stringa non contenente nessuna delle seguenti caratteristiche:
   * - vuota
   * - più lunga di 5 cifre per la parte intera
   * - più lunga di 2 cifre per la parte decimale
   * - contiene caratteri non numerici
   */
  static getCapacityValidation() {
    return '^[0-9]{1,5}([\\.\\,]{1}[0-9]{1,2})?$';
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @param  {Object} capacity [rappresenta la capacità dell' asset
   * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita dalla POST-condizione del metodo getCapacityValidation()
   */
  static testCapacityValidation(capacity) {
    const regExp = new RegExp(MachineNode.getCapacityValidation(), 'i');
    return regExp.test(capacity);
  }


  /* sezione per testare il tempo di elaborazione del nodo macchina*/

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @return {string} Il metodo restituisce la stringa corrispondente alla RegExp relativa
   * ad una stringa non contenente nessuna delle seguenti caratteristiche:
   * - vuota
   * - più lunga di 5 cifre per la parte intera
   * - più lunga di 2 cifre per la parte decimale
   * - contiene caratteri non numerici
   */
  static getProcessingTimeValidation() {
    return '^[0-9]{1,5}([\\.\\,]{1}[0-9]{1,2})?$';
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @param  {Object} processingTime Rappresenta il tempo di elaborazione del nodo macchina
   * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita dalla POST-condizione del metodo getProcessingTimeValidation()
   */
  static testProcessingTimeValidation(processingTime) {
    const regExp = new RegExp(MachineNode.getProcessingTimeValidation(), 'i');
    return regExp.test(processingTime);
  }

  /* sezione per testare il valore del nodo macchina */

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @return {string} Il metodo restituisce la stringa corrispondente alla RegExp
   * relativa ad una stringa non contenente nessuna delle seguenti caratteristiche:
   * - vuota
   * - più lunga di 20 cifre per la parte intera
   * - più lunga di 2 cifre per la parte decimale
   * - contiene caratteri non numerica
   */
  static getValueValidation() {
    return '^[0-9]{1,20}\\.[0-9]{2}$';
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @param  {Object} value Rappresenta il valore unitario del nodo macchina
   * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita dalla POST-condizione del metodo getValueValidation()
   */
  static testValueValidation(value) {
    const regExp = new RegExp(MachineNode.getValueValidation(), 'i');
    return regExp.test(value);
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.MachineNode
   * @param  {Object} machineNode Rappresenta il payload relativamente ad un nodo macchina
   * @return {boolean} Il metodo restituisce true solamente se gli attributi
   * del payload hanno valori significativi
   * e sono validi
   */
  static nodeIsValid(machineNode) {
    return (Node.nodeIsValid(machineNode) &&
      MachineNode.testCapacityValidation(machineNode.capacity) &&
      MachineNode.testProcessingTimeValidation(machineNode.processingTime) &&
      MachineNode.testValueValidation(machineNode.value));
  }
}

export { MachineNode };
