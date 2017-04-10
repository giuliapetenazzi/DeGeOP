/*
 File: src/DeGeOP/store/polygon/concretePolygon.js
 Autore: Daniel De Gaspari
 Creazione: 20170325
 Modifica: 20170402
 Funzione: rappresenta un poligono
 */
import { Polygon } from './polygon';
/**
 * @author Daniel De Gaspari
 * @description rappresenta un poligono
 */

/**
 * @extends Polygon
 * @memberOf DeGeOP::Store::Polygon
 */
class ConcretePolygon extends Polygon {

    /**
     * @function
     * @memberOf DeGeOP::Store::Polygon.ConcreteFactory
     * @param {Array} coordinates Array ordinato di coordinate che descrivono un poligono
     */
  constructor(coordinates = []) {
    super();
    this.coordinates = coordinates;
  }
}

export { ConcretePolygon };
