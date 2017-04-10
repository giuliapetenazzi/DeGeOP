/*
 File: src/DeGeOP/store/process/queueNode.js
 Autore: Daniel De Gaspari
 Creazione: 20170323
 Modifica: 20170402
 Funzione: rappresenta la classe queueNode presente nello store
 */

import { Node } from './node';

/**
 * @author Daniel De Gaspari
 * @description Rappresenta un nodo di tipo Coda
 */

/**
 * @extends Node
 * @memberOf DeGeOP::Store::Process
 */
class QueueNode extends Node {

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.QueueNode
   * @param  {Object} param Rappresenta l'oggetto contenente i dati relativi al nodo
   * coda che viene creato
   */
  constructor(param) {
    super(param);
    this.capacity = param.capacity;
  }

  /* sezione per testare la capacità del nodo coda*/

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.QueueNode
   * @return {string} Il metodo restituisce la stringa corrispondente alla RegExp
   * relativa ad una stringa non contenente nessuna delle seguenti caratteristiche:
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
   * @memberOf DeGeOP::Store::Process.QueueNode
   * @param  {number} capacity Rappresenta la capacità dell' asset
   * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita dalla POST-condizione del metodo getCapacityValidation()
   */
  static testCapacityValidation(capacity) {
    const regExp = new RegExp(QueueNode.getCapacityValidation(), 'i');
    return regExp.test(capacity);
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.QueueNode
   * @param  {Object} queueNode Rappresenta il payload relativamente ad un nodo coda
   * @return {boolean} Il metodo restituisce true solamente se gli attributi del
   * payload hanno valori significativi
   * e sono validi
   */
  static nodeIsValid(queueNode) {
    return (Node.nodeIsValid(queueNode) &&
    QueueNode.testCapacityValidation(queueNode.capacity));
  }

}

export { QueueNode };
