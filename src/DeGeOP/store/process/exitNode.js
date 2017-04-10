/*
 File: src/DeGeOP/store/process/exitNode.js
 Autore: Daniel De Gaspari
 Creazione: 20170322
 Modifica: 20170402
 Funzione: rappresenta la classe exitNode presente nello store
 */

import { Node } from './node';

/**
 * @author Daniel De Gaspari
 * @description Rappresenta un nodo di tipo Uscita
 */

/**
 * @extends Node
 * @memberOf DeGeOP::Store::Process
*/
class ExitNode extends Node {
  /**
   * @function
   * @memberOf DeGeOP::Store::Process.ExitNode
   * @param  {Object} param Rappresenta l'oggetto contenente i dati relativi
   * all'exitNode che viene creato
   */
  constructor(param) {
    super(param);
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.ExitNode
   * @param  {Object} exitNode Rappresenta il payload relativamente ad un nodo macchina
   * @return {Boolean} Il metodo restituisce true solamente se gli attributi del payload
   * hanno valori significativi e sono validi
   */
  static nodeIsValid(exitNode) {
    return (Node.nodeIsValid(exitNode));
  }
}

export { ExitNode };
