// Viene verficato che il concretePolygon sia creato correttamente

import { ConcretePolygonFactory } from '../../DeGeOP/store/polygon/concretePolygonFactory';
import { ConcretePolygon } from '../../DeGeOP/store/polygon/concretePolygon';
import { Coordinate } from '../../DeGeOP/store/polygon/coordinate';
import { PolygonFactory } from '../../DeGeOP/store/polygon/polygonFactory';

describe('Il metodo ConcretePolygonFactory.createPolygon', function () {
  it('crea un oggetto ConcretePolygon corretto', function () {
    const coord1 = new Coordinate({ x: 1, y: 1 });
    const coord2 = new Coordinate({ x: 1, y: 2 });
    const coord3 = new Coordinate({ x: 2, y: 2 });
    const coord4 = new Coordinate({ x: 2, y: 1 });
    const coordPolygon = [coord1, coord2, coord3, coord4];
    const polygon = ConcretePolygonFactory.createPolygon(coordPolygon);
    expect(polygon.coordinates[0]).toEqual(coord1);
    expect(polygon.coordinates[1]).toEqual(coord2);
    expect(polygon.coordinates[2]).toEqual(coord3);
    expect(polygon.coordinates[3]).toEqual(coord4);
    expect(polygon instanceof ConcretePolygon).toBe(true);
  });
  it('crea un oggetto ConcretePolygon senza coordinate', function () {
    const polygon = ConcretePolygonFactory.createPolygon();
    expect(polygon.coordinates).toEqual([]);
    expect(polygon instanceof ConcretePolygon).toBe(true);
  });
});

describe('Le classi della polygonFactory', function () {
  it('possono essere istanziate', function () {
    const polygonFactory = new PolygonFactory();
    const concretePolygonFactory = new ConcretePolygonFactory();
    const polygon = polygonFactory.createPolygon();
    const concretePolygon1 = new ConcretePolygon();
    expect(concretePolygon1.coordinates).toEqual([]);
    expect(polygon).toBe(undefined);
    expect(polygonFactory instanceof PolygonFactory).toBe(true);
    expect(concretePolygonFactory instanceof ConcretePolygonFactory).toBe(true);
  });
});
