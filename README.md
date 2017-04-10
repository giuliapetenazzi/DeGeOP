# Stato attuale del sistema di build
Al momento il sistema di build è funzionante, mancano però alcune cose:
* React-toolbox: richiede alcuni pacchetti in più e la configurazione non mi è ancora chiara;
* Devtools: esistono dei tool di development che si interfacciano con react e redux, al momento ne ho installato uno per redux, ma temo richieda un plugin sul browser per funzionare correttamente
* Inoltre se dentro alla cartella src c'è del codice che non rispetta le regole stabilite da ESLint, il sistema vi impedisce di completare la build fino a che non risolvete gli errori di sintassi/normate
# Come usare il sistema di build
**Non pullate da terminale, usate Webstorm**
* Aprite Webstorm e dovrebbe esserci una opzione per scaricare un progetto da un VCS, e collegatevi alla repo di Jordan/DegeOP
    * Questo facilità l'utilizzo del sistema di build perché Webstorm è conscio della struttura del progetto e non vi spare mille mila errori ovunque;
    * Commit/pull/push sono facilitate a mio parere, se fatte da dentro l'IDE
* Andate su `Settings | Appearance & Behavior | System Settings` e disabilitate `Use "safe write" (save changes to temporary file first)`
* Una volta fatto il primo pull via webstorm:
    * Accedete al "Terminal" e lanciate questi comandi
        * `[sudo] npm install npm@4.2.0 -g`
        * `[sudo] npm install marked -g`
        * `npm install`
    * Sperando che fino a questo punto non ci siano stati errori, salvo che per qualche warning possibile su un pacchetto "fserver" (che è roba in più solo per OSX), potete lanciare l'applicazione allo stato attuale con il comando:
        * `npm start`
    * A questo punto lasciate il terminale andare (se non da errori) e aprite un browser sulla pagina:
        * `http://localhost:8080/`
    * Se tutto va bene dovrebbe apparire un messaggio di benvenuto

# JSDoc
## Leggete la documentazione
[JSDoc documentation](http://usejsdoc.org/about-getting-started.html)
## Mini riferimento alla sintassi JSDoc
### Componenti
```javascript
/**
  * @author [<name>]
  * @description [<creation_date>] YYYY-MM-GG;
  * @description [<last_edit_date>] YYYY-MM-GG;
  * @description [<descrizione>]
  */
```
### Classi
```javascript
/**
  * @class [<name>]
  * @memberof <parentNamepath>
  * @param [<type>] [<name>] [<desc>] tipo dell’attributo, nome, breve descrizione dei membri della classe;
  * @constructs [<name>] nome del costruttore;
  */
```
### Metodi
```javascript
/**
  * @memberof <parentNamepath> percorso del padre del metodo;
  * @param [<type>] [<name>] [<desc>] tipo del parametro, nome e breve descrizione;
  * @return [<type>] [<desc>] tipo di ritorno del metodo e breve descrizione.
  */
```
