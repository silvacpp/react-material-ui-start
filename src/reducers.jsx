import {combineReducers} from 'redux'

import drawerReducer from './components/Drawer/reducer';

const rootReducer = combineReducers({
    drawer : drawerReducer
})

export default rootReducer