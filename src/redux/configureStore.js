import {createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions'
import { Comments } from './comments'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })// our initialState
    );

    return store;
};