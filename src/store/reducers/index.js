import { combineReducers } from 'redux';

import GenerationReducer from './GenerationReducer';
import GenerationPoolReducer from './GenerationPoolReducer';

export default combineReducers({
    generation: GenerationReducer,
    generationPool: GenerationPoolReducer
});