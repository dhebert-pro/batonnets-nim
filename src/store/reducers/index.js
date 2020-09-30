import { combineReducers } from 'redux';

import GenerationReducer from './GenerationReducer';
import GameReducer from './GameReducer';

export default combineReducers({
    generation: GenerationReducer,
    game: GameReducer
});