import { FETCH_DATA } from '../actions/type'

const initialState = {
    data : {},
    loading : true
}


export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data : action.payload,
                loading : false
            }
        default:
            return state;
    }
}