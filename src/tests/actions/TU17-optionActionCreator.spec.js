// Viene verificato che l'OptionCreator crei correttamente le azioni relative all'oggetto Options

import { OptionActionCreator } from '../../DeGeOP/action/actionCreators/optionActionCreator';
import * as stubObjects from '../stubs/stubObjects-spec';

describe('L\'OptionActionCreator', function () {
  it('crea un\'azione di tipo OPTION', function () {
    const actionInsert = OptionActionCreator.insertOption(stubObjects.objectOption);
    expect(actionInsert).toEqual(stubObjects.actionOption);
  });
});
