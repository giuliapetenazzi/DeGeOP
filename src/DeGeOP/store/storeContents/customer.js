/*
 File: src/DeGeOP/store/storeContents/customer.js
 Autore: Daniel De Gaspari
 Creazione: 20170328
 Modifica: 20170402
 Funzione: rappresenta l'assicurando
 */

/**
 * @author Daniel De Gaspari
 * @description Rappresenta l'assicurando
 * @namespace DeGeOP::Store::StoreContents
 */

/**
 * @class Customer
 * @memberOf DeGeOP::Store::StoreContents
 */
class Customer {

  /**
   * @function
   * @memberOf DeGeOP::Store::StoreContents.Customer
  * @param  {Object} process Rappresenta l'oggetto contenente i dati relativi al customer
   * che viene creato
  */
  constructor(process) {
    /**
     Whether this component is visible or not
     @name Customer#process
     @type Boolean
     */
    this.process = process;

    /**
     Whether this component is visible or not
     @name Customer#processs
     @type Boolean
     */
    this.processs = process;
  }

}

export { Customer };
