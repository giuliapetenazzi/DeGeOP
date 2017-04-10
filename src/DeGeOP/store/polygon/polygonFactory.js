/*
 File: src/DeGeOP/store/polygon/polygonFactory.js
 Autore: Daniel De Gaspari
 Creazione: 20170326
 Modifica: 20170402
 Funzione: interfaccia che si occupa della costruzione dei poligoni
 */

/**
 * @author Daniel De Gaspari
 * @description interfaccia che si occupa della costruzione dei poligoni
 * @namespace DeGeOP::Store::Polygon
 */

/**
 * @class PolygonFactory
 * @memberOf DeGeOP::Store::Polygon
 */
class PolygonFactory {

  /**
   * @function
   * @memberOf DeGeOP::Store::Polygon.PolygonFactory
   */
  constructor() {

  }

    /**
     * @function
     * @memberOf DeGeOP::Store::Polygon.PolygonFactory
     * @param {Array} coord Array ordinato di coordinate che descrivono un poligono
     * @return {ConcretePolygon} Ritorna un nuovo ConcretePolygon
     */
  createPolygon(coord = []) {}
}

export { PolygonFactory };
