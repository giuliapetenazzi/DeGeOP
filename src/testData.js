/* eslint-disable */

import { AssetActionCreator } from './DeGeOP/action/actionCreators/assetActionCreator';
import { NodeActionCreator } from './DeGeOP/action/actionCreators/nodeActionCreator';
import { EdgeActionCreator } from './DeGeOP/action/actionCreators/edgeActionCreator';
import { ConcretePolygonFactory } from './DeGeOP/store/polygon/concretePolygonFactory';
import { Coordinate } from './DeGeOP/store/polygon/coordinate';


function randomValue() {
    const array = [...arguments];
    return array[Math.floor(Math.random() * array.length)];
}

function asset(name, surface, unitValue, polygon) {
    return AssetActionCreator.insertAsset({
        uuid: null,
        name: name,
        type: randomValue(["0010", "0020", "0030", "0040", "0050"]),
        ownership: randomValue(["CUST", "CLIE", "SUPP"]), //CUST o CLIE o SUPP
        color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        },
        surface: surface,
        unitValue: unitValue,
        currency: null,
        description: "descrizione " + name,
        polygon: polygon
    });
}

function node(name, asset, coordinate) {
    return NodeActionCreator.insertNode({
        uuid: null,
        name: name,
        asset: asset, //uuid asset
        nodeType: randomValue([1,2,3,4.5]), //1,2,3,4,5
        shape: randomValue(["triangleDown", "square", "circle"]), //triangleDown, square, circle
        coordinates : coordinate
    });
}

function edge(start, end) {
    return EdgeActionCreator.insertEdge({
        uuid: null,
        nodeStart: start, //uuid
        nodeEnd: end ////uuid
    });
}

function dispatch(store, data) {
    while (data.length > 0) {
        store.dispatch(data.shift());
    }
}

let logNumber = 0;

function log(text) {
    logNumber += 1;
    dlog("dataTest log " + logNumber + " : " + text);
}

function dlog(data) {
    //console.log(data);
}

export function insertData(store) {
    let data = {
        asset: [],
        node: [],
        edge: []
    };

    data.asset.push(asset("sede amministrativa", 10.10, 1000.10, ConcretePolygonFactory.createPolygon([
        new Coordinate({x: 0, y: 0}),
        new Coordinate({x: 0, y: 10}),
        new Coordinate({x: 10, y: 10}),
        new Coordinate({x: 10, y: 0})
    ])));
    data.asset.push(asset("sede legale", 20.50, 1000.10, ConcretePolygonFactory.createPolygon([
        new Coordinate({x: 20, y: 0}),
        new Coordinate({x: 20, y: 10}),
        new Coordinate({x: 30, y: 10}),
        new Coordinate({x: 30, y: 0})
    ])));
    data.asset.push(asset("sede produttiva", 100.50, 1000.10, ConcretePolygonFactory.createPolygon([
        new Coordinate({x: 40, y: 0}),
        new Coordinate({x: 40, y: 10}),
        new Coordinate({x: 50, y: 10}),
        new Coordinate({x: 50, y: 0})
    ])));
    data.asset.push(asset("sede trasporto", 87.30, 1000.10, ConcretePolygonFactory.createPolygon([
        new Coordinate({x: 60, y: 0}),
        new Coordinate({x: 60, y: 10}),
        new Coordinate({x: 70, y: 10}),
        new Coordinate({x: 70, y: 0})
    ])));
    data.asset.push(asset("fornitore legna", 158.00, 1000.10, ConcretePolygonFactory.createPolygon([
        new Coordinate({x: 80, y: 0}),
        new Coordinate({x: 80, y: 10}),
        new Coordinate({x: 90, y: 10}),
        new Coordinate({x: 90, y: 0})
    ])));
    data.asset.push(asset("comune Mira", 100.10, 527.36, ConcretePolygonFactory.createPolygon([
        new Coordinate({x: 12.123108, y: 45.433097}),
        new Coordinate({x: 12.123194, y: 45.432695}),
        new Coordinate({x: 12.123729, y: 45.432724}),
        new Coordinate({x: 12.123681, y: 45.433143})
    ])));

    dispatch(store, data.asset);

    log("inserimenti asset finiti");

    const assetUuid = store.getState().assets.map(function(obj) {return obj['uuid']});

    data.node.push(node("stampante", assetUuid[0], new Coordinate({x: 2, y: 2}))); // 0
    data.node.push(node("server", assetUuid[0], new Coordinate({x: 8, y: 8}))); // 1
    data.node.push(node("router", assetUuid[1], new Coordinate({x: 22, y: 2}))); // 2
    data.node.push(node("stampante", assetUuid[1], new Coordinate({x: 28, y: 8}))); // 3
    data.node.push(node("sega circolare", assetUuid[2], new Coordinate({x: 42, y: 2}))); // 4
    data.node.push(node("muletto", assetUuid[2], new Coordinate({x: 45, y: 5}))); // 5
    data.node.push(node("camion", assetUuid[2], new Coordinate({x: 48, y: 8}))); // 6
    data.node.push(node("camion", assetUuid[3], new Coordinate({x: 62, y: 2}))); // 7
    data.node.push(node("magazzino", assetUuid[3], new Coordinate({x: 68, y: 8}))); // 8
    data.node.push(node("pila di legna", assetUuid[4], new Coordinate({x: 82, y: 2}))); // 9
    data.node.push(node("ragno", assetUuid[4], new Coordinate({x: 88, y: 8}))); // 10

    data.node.push(node("stampante", assetUuid[5], new Coordinate({x: 12.123247, y: 45.432764}))); //11
    data.node.push(node("desk", assetUuid[5], new Coordinate({x: 12.123655, y: 45.432834}))); //12
    data.node.push(node("computer", assetUuid[5], new Coordinate({x: 12.1233, y: 45.4330}))); //13
    data.node.push(node("magazzino", assetUuid[5], new Coordinate({x: 12.1236, y: 45.4330}))); //14

    dispatch(store, data.node);

    log("inserimenti nodi finiti");

    const nodeUuid = store.getState().nodes.map(function(obj) {return obj['uuid']});

    data.edge.push(edge(nodeUuid[0], nodeUuid[3]));
    data.edge.push(edge(nodeUuid[1], nodeUuid[2]));
    data.edge.push(edge(nodeUuid[1], nodeUuid[8]));
    data.edge.push(edge(nodeUuid[9], nodeUuid[10]));
    data.edge.push(edge(nodeUuid[10], nodeUuid[6]));
    data.edge.push(edge(nodeUuid[6], nodeUuid[5]));
    data.edge.push(edge(nodeUuid[5], nodeUuid[4]));
    data.edge.push(edge(nodeUuid[4], nodeUuid[7]));
    data.edge.push(edge(nodeUuid[7], nodeUuid[8]));

    data.edge.push(edge(nodeUuid[11], nodeUuid[12]));
    data.edge.push(edge(nodeUuid[12], nodeUuid[13]));

    dispatch(store, data.edge);

    log("inserimenti edge finiti");

    const edgeUuid = store.getState().edges.map(function(obj) {return obj['uuid']});

    //store.dispatch(AssetActionCreator.deleteAsset({uuid: assetUuid[0]}));

    const assetUuidAfter = store.getState().assets.map(function(obj) {return obj['uuid']});

    dlog(assetUuid);
    dlog(assetUuidAfter);
    dlog(store.getState().assets.find((e) => (e.uuid === assetUuid[1])));
}

/* eslint-enable */