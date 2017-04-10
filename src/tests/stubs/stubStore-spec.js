/* eslint-disable prefer-const, import/no-mutable-exports */

export let objectAsset0 = {
  uuid: null,
  name: 'NomeAsset',
  description: 'Descrizione dell\'asset',
  type: 'Mattoni',
  ownership: 'Cliente',
  color: 'red',
  surface: 1000,
  unitValue: 2000.12,
  currency: null,
  polygon: [{
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 1,
    y: 2,
  }],
};

export let objectAsset1 = {
  uuid: '550e8400-e29b-41d4-a716-446655440000',
  name: 'NomeAsset',
  description: 'Descrizione dell\'asset',
  type: 'Mattoni',
  ownership: 'Cliente',
  color: 'red',
  surface: 1000,
  unitValue: 2000.12,
  currency: 1, // si suppone che corrisponda a un enum
  polygon: [{
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 1,
    y: 2,
  }],
};

export let objectAsset2 = {
  uuid: '550e8400-e29b-41d4-a716-446655440010',
  name: 'NomeAsset',
  description: 'Descrizione asset',
  type: 'Mattoni',
  ownership: 'Cliente',
  color: 'red',
  surface: 1000,
  unitValue: 2000.12,
  currency: 1, // si suppone che corrisponda a un enum
  polygon: [{
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 1,
    y: 2,
  }],
};

export let assetList = [objectAsset1, objectAsset2];

export let objectNode0 = {
  uuid: null,
  name: 'NomeNodo',
  asset: '550e8400-e29b-41d4-a716-446655440021',
};

export let objectNode1 = {
  uuid: '550e8400-e29b-41d4-a716-446655440001',
  name: 'NomeNodo',
  asset: '550e8400-e29b-41d4-a716-446655440021',
};

export let objectNode2 = {
  uuid: '550e8400-e29b-41d4-a716-446655440030',
  name: 'NomeNodo',
  asset: '550e8400-e29b-41d4-a716-446655440031',
};

export let objectNodeResource = {
  uuid: '550e8400-e29b-41d4-a716-446655441030',
  name: 'NomeNodo Risorsa',
  asset: '550e8400-e29b-41d4-a716-446655440031',
  type: '6',
};

export let objectNodeExit = {
  uuid: '550e8400-e29b-41d4-a716-446655441030',
  name: 'NomeNodo Uscita',
  asset: '550e8400-e29b-41d4-a716-446655440031',
  type: '1',
};

export let objectNodeMachine = {
  uuid: '550e8400-e29b-41d4-a716-446655441030',
  name: 'NomeNodo Macchina',
  asset: '550e8400-e29b-41d4-a716-446655440031',
  capacity: 1234.65,
  processingTime: 320.76,
  value: 1238454.35,
  type: '2',
};

export let objectNodeQueue = {
  uuid: '550e8400-e29b-41d4-a716-446655442030',
  name: 'NomeNodo Queue',
  asset: '550e8400-e29b-41d4-a716-446655440031',
  capacity: 1234.65,
  type: '3',
};

export let objectNodeSource = {
  uuid: '550e8400-e29b-41d4-a716-446655445030',
  name: 'NomeNodo Source',
  asset: '550e8400-e29b-41d4-a716-446655440031',
  leadTime: 1234.65,
  type: '5',
};

export let nodeList = [objectNode1, objectNode2];

export let objectEdge0 = {
  uuid: null,
  nodeStart: '550e8400-e29b-41d4-a716-446655440403',
  nodeEnd: '550e8400-e29b-41d4-a716-446655440404',
};


export let objectEdge1 = {
  uuid: '550e8400-e29b-41d4-a716-446655440002',
  nodeStart: '550e8400-e29b-41d4-a716-446655440403',
  nodeEnd: '550e8400-e29b-41d4-a716-446655440404',
};

export let objectEdge2 = {
  uuid: '550e8400-e29b-41d4-a716-446655440502',
  nodeStart: '550e8400-e29b-41d4-a716-446655440503',
  nodeEnd: '550e8400-e29b-41d4-a716-446655440504',
};

export let edgeList = [objectEdge1, objectEdge2];

export let assetEmpty = [];

export let nodeEmpty = [];

export let edgeEmpty = [];

export let objectStore = {
  assets: assetList,
  nodes: nodeList,
  edges: edgeList,
  options: {
    option1: 'option1',
    option2: 'option2',
  },
};
