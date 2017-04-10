/*
 File: src/DeGeOP/store/polygon/coordinate.js
 Autore: Daniel De Gaspari
 Creazione: 20170326
 Modifica: 20170402
 Funzione: rappresenta una coordinata geografica
 */

/**
 * @author Daniel De Gaspari
 * @description Rappresenta una coordinata geografica
 */

/**
 * @class Coordinate
 * @memberOf DeGeOP::Store::Polygon
 */
class Coordinate {

  /**
   * @function
   * @memberOf DeGeOP::Store::Polygon.Coordinate
  * @param {Object} param Rappresenta l'oggetto contenente coordinate geografiche
  */
  constructor(param) {
    this.x = param.x;
    this.y = param.y;
  }
}

export { Coordinate };
