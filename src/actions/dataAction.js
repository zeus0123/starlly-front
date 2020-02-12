import { FETCH_DATA,LATEST_DATA,PARAMETER_ONE_DATA,PARAMETER_TWO_DATA,PARAMETER_THREE_DATA,GET_TIME } from './type';
import axios from 'axios';
import { config } from '../config/config';


export const startAnalysis = () => dispatch => {
   axios.get(`${config.url}data-analysis`)
        
}

export const fetchData = () => dispatch => {

    axios.get(`${config.url}/get-data`)
        .then(res => {
            const data = res.data;
            

            dispatch({
                type : FETCH_DATA,
                payload : data
            })
        })
}

export const latestData = () => dispatch => {
    axios.get(`${config.url}latest-data`)
        .then(res => {
            const data = res.data;
            dispatch({
                type : LATEST_DATA,
                payload : data
            })
        })
}

export const parameterOneData = () => dispatch => {
    axios.get(`${config.url}parameter-one-data`)
    .then(res => {
        const data = res.data;
        dispatch({
            type : PARAMETER_ONE_DATA,
            payload : data
        })
    })
}

export const parameterTwoData = () => dispatch => {
    axios.get(`${config.url}parameter-two-data`)
    .then(res => {
        const data = res.data;
        dispatch({
            type : PARAMETER_TWO_DATA,
            payload : data
        })
    })  

}

export const parameterThreeData = () => dispatch => {
    axios.get(`${config.url}parameter-three-data`)
    .then(res => {
        const data = res.data;
        dispatch({
            type : PARAMETER_THREE_DATA,
            payload : data
        })
    })  

}

export const getTinme = () => dispatch => {
    axios.get(`${config.url}get-time`)
    .then(res => {
        const data = res.data;
        dispatch({
            type : GET_TIME,
            payload : data
        })
    })  

}