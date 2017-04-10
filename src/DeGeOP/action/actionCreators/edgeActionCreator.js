/*
 File: src/DeGeOP/action/actionCreators/edgeActionCreator.js
 Autore: Daniel De Gaspari
 Creazione: 20170320
 Modifica: 20170402
 Funzione: rappresenta la factory delle actions per un generico edge
 */

/**
 * @author Daniel De Gaspari
 * @description 2017-03-20
 * @description 2017-04-02
 * @description Rappresenta la factory delle actions per un generico edge
 */

/**
 * @class EdgeActionCreator
 * @memberof DeGeOP::ActionsCreators
 */
class EdgeActionCreator {

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.EdgeActionCreator
     * @param  {edge} edge Rappresenta l'oggetto contenente i dati relativi all'elemento edge
     * @return {Object} Costruisce l'azione relativa all'inserimento di un edge
     */
  static insertEdge(edge) {
    return {
      operation: 'INSERT',
      payload: edge,
      type: 'EDGE',
    };
  }

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.EdgeActionCreator
     * @param  {edge} edge Rappresenta l'oggetto contenente i dati relativi all'elemento edge
     * @return {Object} Costruisce l'azione relativa alla modifica di un edge
     */
  static editEdge(edge) {
    return {
      operation: 'UPDATE',
      payload: edge,
      type: 'EDGE',
    };
  }

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.EdgeActionCreator
     * @param  {edge} edge Rappresenta l'oggetto contenente i dati relativi all'elemento edge
     * @return {Object} Costruisce l'azione relativa all'eliminazione di un edge
     */
  static deleteEdge(edge) {
    return {
      operation: 'DELETE',
      payload: edge,
      type: 'EDGE',
    };
  }
}

export { EdgeActionCreator };
