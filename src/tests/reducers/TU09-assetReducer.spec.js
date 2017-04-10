// Viene verificato che l'AssetReducer esegua correttamente l'azione ricevuta sulla lista di Asset

import { Asset } from '../../DeGeOP/store/process/asset';
import { assetReducer } from '../../DeGeOP/reducer/assetReducer';
import * as stubObjects from '../stubs/stubObjects-spec';
import * as stubStore from '../stubs/stubStore-spec';

describe('L\'AssetReducer', function () {
  it('aggiunge un Asset valido alla lista', function () {
    const newList = assetReducer(stubStore.assetList, stubObjects.actionAssetDefinedInsert);
    const newAsset = new Asset(stubObjects.actionAssetDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.assetList.length + 1);
    expect(newList[newList.length - 1]).toEqual(newAsset);
  });
  it('non aggiunge un Asset non valido alla lista', function () {
    const newList = assetReducer(stubStore.assetList, stubObjects.actionAssetInvalidInsert);
    const newAsset = new Asset(stubObjects.actionAssetDefinedInsert.payload);
    expect(newList.length).toBe(stubStore.assetList.length);
    expect(newList[newList.length - 1]).not.toEqual(newAsset);
  });
  it('rimuove un Asset valido dalla lista', function () {
    const newList = assetReducer(stubStore.assetList, stubObjects.actionAssetDefinedDelete);
    const newAsset = new Asset(stubObjects.actionAssetDefinedInsert.payload);
    expect(newList.lastIndexOf(newAsset)).toBe(-1);
  });
  it('non rimuove un Asset non valido dalla lista', function () {
    const newList = assetReducer(stubStore.assetList, stubObjects.actionAssetEmptyDelete);
    expect(newList.length).toBe(stubStore.assetList.length);
  });
  it('aggiorna un Asset valido', function () {
    const newList = assetReducer(stubStore.assetList, stubObjects.actionAssetDefinedUpdate);
    const newAsset = new Asset(stubObjects.actionAssetDefinedInsert.payload);
    expect(newList.find(function (asset) {
      return (asset.uuid === stubObjects.actionAssetDefinedUpdate.payload.uuid);
    })).toEqual(newAsset);
  });
  it('non aggiorna un Asset non valido', function () {
    const newList = assetReducer(stubStore.assetList, stubObjects.actionAssetInvalidUpdate);
    const newAsset = new Asset(stubObjects.actionAssetInvalidUpdate.payload);
    expect(newList.find(function (asset) {
      return (asset.uuid === stubObjects.actionAssetInvalidUpdate.payload.uuid);
    })).not.toEqual(newAsset);
  });
  it('non esegue nessuna azione se la tipologia di operazione non è supportata', function () {
    const newList = assetReducer(stubStore.assetList, stubObjects.actionTestOperation);
    expect(newList).toEqual(stubStore.assetList);
  });
  it('crea una lista vuota ed esegue l\'operazione se quella iniziale non è definita', function () {
    const newList = assetReducer(undefined, stubObjects.actionTestOperation);
    expect(newList).toEqual(stubStore.assetEmpty);
  });
});
