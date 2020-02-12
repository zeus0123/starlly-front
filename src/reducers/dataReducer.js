import { FETCH_DATA,LATEST_DATA,PARAMETER_ONE_DATA,PARAMETER_TWO_DATA,PARAMETER_THREE_DATA,GET_TIME } from '../actions/type'

const initialState = {
    data : {},
    loading : true,
    latestData : {},
    parameterOneData : [],
    parameterTwoData : [],
    parameterTwoData : [],
    getTime : []
    
}


export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data : action.payload,
                loading : false
            }
        case LATEST_DATA:
            return {
                ...state,
                latestData : action.payload,
                loading : false
            }  
        case PARAMETER_ONE_DATA :       
        return {
            ...state,
            parameterOneData : action.payload,
            loading : false
        } 
        case PARAMETER_TWO_DATA :       
        return {
            ...state,
            parameterTwoData : action.payload,
            loading : false
        }
        case PARAMETER_THREE_DATA :       
        return {
            ...state,
            parameterThreeData : action.payload,
            loading : false
        }
        case GET_TIME :       
        return {
            ...state,
            getTime : action.payload,
            loading : false
        }
        default:
            return state;
    }
}