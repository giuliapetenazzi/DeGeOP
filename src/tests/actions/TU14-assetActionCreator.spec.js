// Viene verificato che l'ActionCreator crei correttamente le azioni relative ad un oggetto Asset

import { AssetActionCreator } from '../../DeGeOP/action/actionCreators/assetActionCreator';
import * as stubObjects from '../stubs/stubObjects-spec';

describe('L\'AssetActionCreator', function () {
  it('crea un\'azione di tipo INSERT', function () {
    const actionInsert = AssetActionCreator.insertAsset(stubObjects.objectAsset);
    expect(actionInsert).toEqual(stubObjects.actionAssetDefinedInsert);
  });
  it('crea un\'azione di tipo UPDATE', function () {
    const actionUpdate = AssetActionCreator.editAsset(stubObjects.objectAsset);
    expect(actionUpdate).toEqual(stubObjects.actionAssetDefinedUpdate);
  });
  it('crea un\'azione di tipo DELETE', function () {
    const actionDelete = AssetActionCreator.deleteAsset(stubObjects.objectAsset);
    expect(actionDelete).toEqual(stubObjects.actionAssetDefinedDelete);
  });
});
