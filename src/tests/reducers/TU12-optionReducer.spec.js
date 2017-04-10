// Viene verificato che l'OptionReducer esegua correttamente l'azione ricevuta sull'oggetto Options

import { optionReducer } from '../../DeGeOP/reducer/optionReducer';
import * as stubObjects from '../stubs/stubObjects-spec';
import * as stubStore from '../stubs/stubStore-spec';

describe('L\'OptionReducer', function () {
  it('aggiorna le opzioni sullo store', function () {
    const newList = optionReducer(stubStore.objectStore.options, stubObjects.actionOption);
    expect(newList.option1).toEqual(stubStore.objectStore.options.option1);
    expect(newList.option2).not.toEqual(stubStore.objectStore.options.option2);
    expect(newList.option2).toEqual(stubObjects.objectOption.option2);
    expect(newList.option3).toEqual(stubObjects.objectOption.option3);
  });
  it('crea un oggetto vuoto ed esegue l\'azione se è chiamato con uno oggetto non definito', function () {
    const newStore = optionReducer(undefined, stubObjects.actionTestOperation);
    expect(newStore).toEqual(stubObjects.actionTestOperation.payload);
  });
});
