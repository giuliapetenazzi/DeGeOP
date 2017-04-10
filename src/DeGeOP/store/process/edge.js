/*
 File: src/DeGeOP/store/process/edge.js
 Autore: Daniel De Gaspari
 Creazione: 20170321
 Modifica: 20170402
 Funzione: rappresenta la classe edge presente nello store
 */
import { uuidGenerator } from './uuidGenerator';

/**
 * @author Daniel De Gaspari
 * @description Rappresenta un collegamento fra due nodi
 */

/**
 * @class Edge
 * @memberOf DeGeOP::Store::Process
 */
class Edge {

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Edge
   * @param  {Object} param Rappresenta l'oggetto contenente i dati relativi all'edge
   * che viene creato
  */
  constructor(param) {
    let uuid = param.uuid;
    if (param.uuid === null) {
      uuid = uuidGenerator();
    }
    this.uuid = uuid;
    this.nodeStart = param.nodeStart;
    this.nodeEnd = param.nodeEnd;
  }
}

export { Edge };
