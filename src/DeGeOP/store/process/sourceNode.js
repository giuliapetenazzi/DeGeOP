/*
 File: src/DeGeOP/store/process/sourceNode.js
 Autore: Daniel De Gaspari
 Creazione: 20170324
 Modifica: 20170402
 Funzione: rappresenta la classe sourceNode presente nello store
 */

/**
 * @author Daniel De Gaspari
 * @description 2017-03-24
 * @description [2017-04-02
 * @description [rappresenta un nodo di tipo Sorgente
 */

import { Node } from './node';

/**
 * @extends Node
 * @memberOf DeGeOP::Store::Process
 */
class SourceNode extends Node {

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.SourceNode
   * @param {Object} param Rappresenta l'oggetto contenente i dati relativi al sourceNode che
   * viene creato
   */
  constructor(param) {
    super(param);
    this.leadTime = param.leadTime;
  }

  /* sezione per testare il tempo di esecuzione del sourceNode */

  /**
   * @return {string} il metodo restituisce la stringa corrispondente alla RegExp relativa
   * ad una stringa non contenente nessuna delle seguenti caratteristiche:
   * - vuota
   * - più lunga di 5 cifre per la parte intera
   * - più lunga di 2 cifre per la parte decimale
   * - contiene caratteri non numerici
   */

  static getLeadTimeValidation() {
    return '^[0-9]{1,5}([\\.\\,]{1}[0-9]{1,2})?$';
  }

  /**
   * @param  {number} leadTime Rappresenta il tempo di esecuzione del sourceNode
   * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
     * regolare garantita dalla POST-condizione del metodo getLeadTimeValidation()
   */
  static testLeadTimeValidation(leadTime) {
    const regExp = new RegExp(SourceNode.getLeadTimeValidation(), 'i');
    return regExp.test(leadTime);
  }

  /**
   * @param  {Object} sourceNode Rappresenta il payload relativamente ad un nodo coda
   * @return {boolean} Il metodo restituisce true solamente se gli attributi del payload hanno
   * valori significativi e sono validi
   */
  static nodeIsValid(sourceNode) {
    return (Node.nodeIsValid(sourceNode) &&
    SourceNode.testLeadTimeValidation(sourceNode.leadTime));
  }
}

export { SourceNode };
