/*
 File: src/DeGeOP/store/process/resourceNode.js
 Autore: Daniel De Gaspari
 Creazione: 20170323
 Modifica: 20170402
 Funzione: rappresenta la classe resourceNode presente nello store
 */

import { Node } from './node';

/**
 * @author Daniel De Gaspari
 * @description Rappresenta un nodo di tipo Risorsa
 */

/**
 * @extends Node
 * @memberOf DeGeOP::Store::Process
 */
class ResourceNode extends Node {

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.ResourceNode
   * @param  {Object} param Rappresenta l'oggetto contenente i dati relativi al nodo risorsa
   * che viene creato
  */
  constructor(param) {
    super(param);
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.ResourceNode
   * @param  {Object} resourceNode Rappresenta il payload relativamente ad un nodo macchina
   * @return {boolean} Il metodo restituisce true solamente se gli attributi del payload
   * hanno valori significativi e sono validi
   */
  static nodeIsValid(resourceNode) {
    return (Node.nodeIsValid(resourceNode));
  }

}

export { ResourceNode };
