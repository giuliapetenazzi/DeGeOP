/*
File: src/DeGeOP/reducer/assetReducer.js
Autore: Giovanni Prete
Creazione: 20170322
Modifica: 20170325
Funzione: reducer che agisce sugli asset
*/

import { Asset } from '../store/process/asset';

/**
 * @function
 * @author Giovanni Prete <giovanni.prete.1@studenti.unipd.it>
 * @description 20170322
 * @version 0.0.1
 * @param {Asset[]} assetList - The current list of assets in the store
 * @param {object} action - The action to be executed on the store
 * @return {Asset[]} newList - The new asset list to be returned
 * @description Execute the action and return the new asset list
 * @memberOf DeGeOP::Reducer
 */
export const assetReducer = function assetReducer(assetList = [], action) {
  let newList = [];

  switch (action.operation) {
    case 'INSERT':
      if (Asset.assetIsValid(action.payload)) {
        newList = [...assetList, new Asset(action.payload)];
      } else {
        newList = assetList;
      }
      break;

    case 'UPDATE':
      if (Asset.assetIsValid(action.payload)) {
        newList = assetList.map(function (asset) {
          if (asset.uuid !== action.payload.uuid) {
            return asset;
          }
          return new Asset(action.payload);
        });
      } else {
        newList = assetList;
      }
      break;

    case 'DELETE':
      newList = assetList.filter(function (asset) {
        return (asset.uuid !== action.payload.uuid);
      });
      break;

    default:
      newList = assetList;
      break;
  }

  return newList;
};
