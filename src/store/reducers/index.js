import { combineReducers } from 'redux';

import GenerationReducer from './GenerationReducer';
import GameReducer from './GameReducer';
import ControlReducer from './ControlReducer';

export default combineReducers({
    generation: GenerationReducer,
    game: GameReducer,
    control: ControlReducer
});