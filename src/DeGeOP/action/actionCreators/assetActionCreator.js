/*
 File: src/DeGeOP/action/actionCreators/assetActionCreator.js
 Autore: Daniel De Gaspari
 Creazione: 20170320
 Modifica: 20170402
 Funzione: rappresenta la factory delle actions per un generico asset
 */

/**
 * @author Daniel De Gaspari
 * @description 2017-03-20
 * @description 2017-04-02
 * @description rappresenta la factory delle actions per un generico asset
 */

/**
 @class AssetActionCreator
 @memberof DeGeOP::ActionsCreators
 */
class AssetActionCreator {

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.AssetActionCreator
     * @param  {asset} asset Rappresenta l'oggetto contenente i dati relativi all'elemento asset
     * @return {Object} Costruisce l'azione relativa all'inserimento di un asset
     */
  static insertAsset(asset) {
    return {
      operation: 'INSERT',
      payload: asset,
      type: 'ASSET',
    };
  }

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.AssetActionCreator
     * @param  {asset} asset Rappresenta l'oggetto contenente i dati relativi all'elemento asset
     * @return {Object} Costruisce l'azione relativa alla modifica di un asset
     */
  static editAsset(asset) {
    return {
      operation: 'UPDATE',
      payload: asset,
      type: 'ASSET',
    };
  }

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.AssetActionCreator
     * @param  {asset} asset Rappresenta l'oggetto contenente i dati relativi all'elemento asset
     * @return {Object} Costruisce l'azione relativa all'eliminazione di un asset
     */
  static deleteAsset(asset) {
    return {
      operation: 'DELETE',
      payload: asset,
      type: 'ASSET',
    };
  }
}

export { AssetActionCreator };
