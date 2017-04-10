/*
 File: src/DeGeOP/store/polygon/concretePolygon.js
 Autore: Daniel De Gaspari
 Creazione: 20170326
 Modifica: 20170402
 Funzione: gestisce la creazione concreta dei poligoni
 */

import { PolygonFactory } from './polygonFactory';
import { ConcretePolygon } from './concretePolygon';

/**
 * @author Daniel De Gaspari
 * @description gestisce la creazione concreta dei poligoni
 */

/**
 * @extends PolygonFactory
 * @memberOf DeGeOP::Store::Polygon
 */

class ConcretePolygonFactory extends PolygonFactory {

  /**
   * @function
   * @memberOf DeGeOP::Store::Polygon.ConcretePolygonFactory
   */
  constructor() {
    super();
  }

    /**
     * @function
     * @memberOf DeGeOP::Store::Polygon.ConcretePolygonFactory
     * @param {Array} coord ordinato di coordinate che descrivono un poligono
     * @return {ConcretePolygon} Ritorna un nuovo ConcretePolygon
     */
  static createPolygon(coord = []) {
    return new ConcretePolygon(coord);
  }
}

export { ConcretePolygonFactory };
