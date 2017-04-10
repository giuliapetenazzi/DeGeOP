/*
 File: src/DeGeOP/action/actionCreators/nodeActionCreator.js
 Autore: Daniel De Gaspari
 Creazione: 20170320
 Modifica: 20170402
 Funzione: rappresenta la factory delle actions per un generico node
 */

/**
 * @author Daniel De Gaspari
 * @description 2017-03-20
 * @description 2017-04-02
 * @description rappresenta la factory delle actions per un generico node
 */

/**
 * @class NodeActionCreator
 * @memberof DeGeOP::ActionsCreators
 */
class NodeActionCreator {

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.NodeActionCreator
     * @param  {Object} node rappresenta l'oggetto contenente i dati relativi all'elemento node
     * @return {Object} Costruisce l'azione relativa all'inserimento di un node
     */
  static insertNode(node) {
    return {
      operation: 'INSERT',
      payload: node,
      type: 'NODE',
    };
  }

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.NodeActionCreator
     * @param  {Object} node rappresenta l'oggetto contenente i dati relativi all'elemento node
     * @return {Object} Costruisce l'azione relativa alla modifica di un node
     */
  static editNode(node) {
    return {
      operation: 'UPDATE',
      payload: node,
      type: 'NODE',
    };
  }

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.NodeActionCreator
     * @param  {Object} node rappresenta l'oggetto contenente i dati relativi all'elemento node
     * @return {Object} Costruisce l'azione relativa all'eliminazione di un node
     */
  static deleteNode(node) {
    return {
      operation: 'DELETE',
      payload: node,
      type: 'NODE',
    };
  }
}

export { NodeActionCreator };
