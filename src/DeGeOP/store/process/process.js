/*
 File: src/DeGeOP/store/process/process.js
 Autore: Daniel De Gaspari
 Creazione: 20170322
 Modifica: 20170402
 Funzione: rappresenta un generico processo produttivo
 */
import { uuidGenerator } from './uuidGenerator';

/**
 * @author Daniel De Gaspari
 * @description rappresenta un processo produttivo dell’azienda dell’assicurando
 * @namespace DeGeOP::Store::Process
 */

/**
 * @class Process
 * @memberOf DeGeOP::Store::Process
 */
class Process {

/**
 * @function
 * @memberOf DeGeOP::Store::Process.Process
 * @param  {Object} param Rappresenta l'oggetto contenente i dati relativi al processo produttivo
 * che viene creato
 * @return {Process} Costruisce un processo produttivo
 */
  constructor(param) {
    let uuid = param.uuid;
    if (param.uuid === null) {
      uuid = uuidGenerator();
    }
    this.uuid = uuid;
    this.assets = param.assets;
    this.nodes = param.nodes;
    this.edges = param.edges;
  }

}

export { Process };
