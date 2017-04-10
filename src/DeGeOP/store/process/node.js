/*
 File: src/DeGeOP/store/process/node.js
 Autore: Daniel De Gaspari
 Creazione: 201703222
 Modifica: 20170402
 Funzione: rappresenta la classe node presente nello store
 */
import { uuidGenerator } from './uuidGenerator';

/**
 * @author Daniel De Gaspari
 * @description Rappresenta un elemento di interesse strategico all’interno di un asset
 */

/**
 * @class Node
 * @memberOf DeGeOP::Store::Process
 */
class Node {
  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Node
   * @param  {Object} param Rappresenta l'oggetto contenente i dati relativi
   * al nodo che viene creato
   */
  constructor(param) {
    let uuid = param.uuid;
    if (param.uuid === null) {
      uuid = uuidGenerator();
    }
    this.uuid = uuid;
    this.name = param.name;
    this.asset = param.asset;
    this.type = param.type;
    this.shape = param.shape;
    this.coordinates = param.coordinates;
  }


  /* sezione per testare il nome del nodo */

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Node
   * @return {String} Il metodo restituisce la stringa corrispondente alla
   * RegExp relativa ad una stringa
   * non contenente nessuna delle seguenti caratteristiche:
   * - vuota
   * - più lunga di 50 caratteri
   * - inizia e/o finisce con uno spazio
   * - contiene caratteri speciali
   */
  static getNameValidation() {
    return "^\\w[\\w\\s']{0,49}$";
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Node
   * @param  {String} name Rappresenta il nome del nodo
   * @return {boolean} Il metodo restituisce true solamente il nome è valido secondo l'espressione
   * regolare garantita dalla POST-condizione del metodo getNameValidation()
   */
  static testNameValidation(name) {
    const regExp = new RegExp(Node.getNameValidation(), 'i');
    return regExp.test(name);
  }

  /**
   * @function
   * @memberOf DeGeOP::Store::Process.Node
   * @param  {Object} node Rappresenta il payload relativamente ad un nodo
   * @return {boolean} Il metodo restituisce true solamente se gli attributi del
   * payload hanno valori significativi e sono validi
   */
  static nodeIsValid(node) {
    return (Node.testNameValidation(node.name));
  }
}

export { Node };
