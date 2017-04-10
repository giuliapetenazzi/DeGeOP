/* eslint-disable prefer-const, import/no-mutable-exports */

// oggetti da passare alle actions
export let objectEmpty = {};

export let objectUndefinded;

export let objectDefined = {
  name: 'Oggetto stub definito',
  uuid: 1,
};
export let objectInvalid = {
  name: 'Oggetto % stub & definito',
  uuid: 1,
};

export let objectOption = {
  option2: 'opzione aggiornata',
  option3: 'opzione nuova',
};

// oggetti "corretti" da passare ai reducer
export let objectAsset = {
  uuid: '550e8400-e29b-41d4-a716-446655440000',
  name: 'NomeAsset',
  description: 'Descrizione asset per action',
  type: 'Mattoni',
  ownership: 'Cliente',
  color: 'red',
  surface: 1000,
  unitValue: 2000,
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

export let objectNode = {
  uuid: '550e8400-e29b-41d4-a716-446655440001',
  name: 'NomeNodo action',
  asset: '550e8400-e29b-41d4-a716-446655440000',
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

export let objectEdge = {
  uuid: '550e8400-e29b-41d4-a716-446655440002',
  nodeStart: '550e8400-e29b-41d4-a716-446655441003',
  nodeEnd: '550e8400-e29b-41d4-a716-446655441004',
};


// oggetti actions da passare al rootReducer
export let actionTestOperation = {
  type: 'TEST',
  payload: objectDefined,
  operation: 'TEST',
};
// OPTION
export let actionOption = {
  type: 'OPTION',
  payload: objectOption,
};

// ASSET
export let actionAssetDefinedInsert = {
  type: 'ASSET',
  payload: objectAsset,
  operation: 'INSERT',
};
export let actionAssetDefinedUpdate = {
  type: 'ASSET',
  payload: objectAsset,
  operation: 'UPDATE',
};
export let actionAssetDefinedDelete = {
  type: 'ASSET',
  payload: objectAsset,
  operation: 'DELETE',
};
export let actionAssetUndefinedInsert = {
  type: 'ASSET',
  payload: undefined,
  operation: 'INSERT',
};
export let actionAssetUndefinedUpdate = {
  type: 'ASSET',
  payload: undefined,
  operation: 'UPDATE',
};
export let actionAssetUndefinedDelete = {
  type: 'ASSET',
  payload: undefined,
  operation: 'DELETE',
};
export let actionAssetEmptyInsert = {
  type: 'ASSET',
  payload: objectEmpty,
  operation: 'INSERT',
};
export let actionAssetEmptyUpdate = {
  type: 'ASSET',
  payload: objectEmpty,
  operation: 'UPDATE',
};
export let actionAssetEmptyDelete = {
  type: 'ASSET',
  payload: objectEmpty,
  operation: 'DELETE',
};
export let actionAssetInvalidInsert = {
  type: 'ASSET',
  payload: objectInvalid,
  operation: 'INSERT',
};
export let actionAssetInvalidUpdate = {
  type: 'ASSET',
  payload: objectInvalid,
  operation: 'UPDATE',
};

// EDGE
export let actionEdgeDefinedInsert = {
  type: 'EDGE',
  payload: objectEdge,
  operation: 'INSERT',
};
export let actionEdgeDefinedUpdate = {
  type: 'EDGE',
  payload: objectEdge,
  operation: 'UPDATE',
};
export let actionEdgeDefinedDelete = {
  type: 'EDGE',
  payload: objectEdge,
  operation: 'DELETE',
};
export let actionEdgeUndefinedInsert = {
  type: 'EDGE',
  payload: undefined,
  operation: 'INSERT',
};
export let actionEdgeUndefinedUpdate = {
  type: 'EDGE',
  payload: undefined,
  operation: 'UPDATE',
};
export let actionEdgeUndefinedDelete = {
  type: 'EDGE',
  payload: undefined,
  operation: 'DELETE',
};
export let actionEdgeEmptyInsert = {
  type: 'EDGE',
  payload: objectEmpty,
  operation: 'INSERT',
};
export let actionEdgeEmptyUpdate = {
  type: 'EDGE',
  payload: objectEmpty,
  operation: 'UPDATE',
};
export let actionEdgeEmptyDelete = {
  type: 'EDGE',
  payload: objectEmpty,
  operation: 'DELETE',
};

// NODE
export let actionNodeDefinedInsert = {
  type: 'NODE',
  payload: objectNode,
  operation: 'INSERT',
};
export let actionNodeMachineDefinedInsert = {
  type: 'NODE',
  payload: objectNodeMachine,
  operation: 'INSERT',
};
export let actionNodeQueueDefinedInsert = {
  type: 'NODE',
  payload: objectNodeQueue,
  operation: 'INSERT',
};
export let actionNodeSourceDefinedInsert = {
  type: 'NODE',
  payload: objectNodeSource,
  operation: 'INSERT',
};
export let actionNodeExitDefinedInsert = {
  type: 'NODE',
  payload: objectNodeExit,
  operation: 'INSERT',
};
export let actionNodeResourceDefinedInsert = {
  type: 'NODE',
  payload: objectNodeResource,
  operation: 'INSERT',
};
export let actionNodeDefinedUpdate = {
  type: 'NODE',
  payload: objectNode,
  operation: 'UPDATE',
};
export let actionNodeDefinedDelete = {
  type: 'NODE',
  payload: objectNode,
  operation: 'DELETE',
};
export let actionNodeUndefinedInsert = {
  type: 'NODE',
  payload: undefined,
  operation: 'INSERT',
};
export let actionNodeUndefinedUpdate = {
  type: 'NODE',
  payload: undefined,
  operation: 'UPDATE',
};
export let actionNodeUndefinedDelete = {
  type: 'NODE',
  payload: undefined,
  operation: 'DELETE',
};
export let actionNodeEmptyInsert = {
  type: 'NODE',
  payload: objectEmpty,
  operation: 'INSERT',
};
export let actionNodeEmptyUpdate = {
  type: 'NODE',
  payload: objectEmpty,
  operation: 'UPDATE',
};
export let actionNodeEmptyDelete = {
  type: 'NODE',
  payload: objectEmpty,
  operation: 'DELETE',
};
export let actionNodeInvalidInsert = {
  type: 'NODE',
  payload: objectInvalid,
  operation: 'INSERT',
};
export let actionNodeInvalidUpdate = {
  type: 'NODE',
  payload: objectInvalid,
  operation: 'UPDATE',
};
