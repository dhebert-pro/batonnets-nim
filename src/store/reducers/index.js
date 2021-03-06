import { combineReducers } from 'redux';

import GenerationReducer from './GenerationReducer';
import AgentReducer from './AgentReducer';
import GameReducer from './GameReducer';
import ControlReducer from './ControlReducer';
import MoveReducer from './MoveReducer';

export default combineReducers({
    generation: GenerationReducer,
    agent: AgentReducer,
    game: GameReducer,
    control: ControlReducer,
    move: MoveReducer
});