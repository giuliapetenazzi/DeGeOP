/*
 File: src/DeGeOP/action/actionCreators/optionActionCreator.js
 Autore: Daniel De Gaspari
 Creazione: 20170320
 Modifica: 20170402
 Funzione: rappresenta la factory delle options
 */

/**
 * @author Daniel De Gaspari
 * @description 2017-03-20
 * @description 2017-04-02
 * @description rappresenta la factory delle options
 */

/**
 @class OptionActionCreator
 @memberof DeGeOP::ActionsCreators
 */
class OptionActionCreator {

    /**
     * @function
     * @memberof DeGeOP::ActionsCreators.OptionActionCreator
     * @param  {option} object Rappresenta l'oggetto contenente le nuove options
     * @return {Object} Costruisce l'azione relativa all'inserimento di un asset
     */
  static insertOption(option) {
    return {
      type: 'OPTION',
      payload: option,
    };
  }
}

export { OptionActionCreator };
