import React,{useEffect} from 'react';

import 'chart.js';
import { useSelector,useDispatch } from 'react-redux';
import { startAnalysis, 
        fetchData, 
        latestData, 
        parameterOneData, 
        parameterTwoData, 
        parameterThreeData, 
        getTinme, alertCount, 
        lastPowerOutage, lastPowerOutageTime } from '../actions/dataAction';
import {Line} from 'react-chartjs-2';
import moment from 'moment';



const DataAnalysis = () => {
    
   const dataAnalysisData = useSelector(state => state.data);
   let dispatch = useDispatch();

  

   useEffect(() => {
     if(dataAnalysisData.loading === true){
         dispatch(fetchData());
         dispatch(latestData());
         dispatch(parameterOneData());
         dispatch(parameterTwoData());
         dispatch(parameterThreeData());
         dispatch(getTinme())
         dispatch(alertCount())
         dispatch(lastPowerOutage())
         dispatch(lastPowerOutageTime())
  
      }
   })
   
   const handleClick = () => {
     dispatch(startAnalysis())
     alert('File Stream has started Refresh the page after every 2 minutes');
   }
     
    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                 <button type='button' className='btn btn-primary' onClick={handleClick}>Start Analysis</button>    
            </div>
            <br></br>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card'>
                         <div className='card-body'>
                              <div className='card-title'>
                                  Power Outage(in minutes)
                              </div>
                              <div className='card-text'>
                                  {dataAnalysisData.loading === false ?
                                       dataAnalysisData.lastPowerOutageTime.time
                                       : null  
                                  }
                              </div> 
                         </div>  
                    </div>
                </div> 
                <div className='col-md-3'>
                <div className='card'>
                         <div className='card-body'>
                              <div className='card-title'>
                                  Last Power Outage

                              </div>
                              <div className='card-text'>
                                   {dataAnalysisData.loading === false && dataAnalysisData.lastPowerOutage.length > 0
                                    ? moment(dataAnalysisData.lastPowerOutage[0].created_at).format('MMMM Do YYYY, h:mm:ss a') : null} 
                              </div>
                         </div>  
                    </div>
                </div> 
                <div className='col-md-3'>
                <div className='card'>
                         <div className='card-body'>
                         <div className ='card-title'> 
                                 Critical Alert
                                   
                         </div>
                         <div className='card-text'>
                              {dataAnalysisData.loading === false ?
                                dataAnalysisData.alertCount.count
                                : null    
                            }
                           </div> 
                         </div>  
                    </div>
                </div> 
                <div className='col-md-3'>
                <div className='card'>
                         <div className='card-body'>
                         <div className='card-title'> 
                                 Last Analysed Time  
                          
                         </div>
                         <div className='card-text'>
                             {dataAnalysisData.loading === false && dataAnalysisData.latestData.code === 1 && dataAnalysisData.latestData.data.length > 0 
                             ? moment(dataAnalysisData.latestData.data[0].created_at).format('MMMM Do YYYY, h:mm:ss a') : null}
                          </div>
                         </div>  
                    </div>
                </div> 
            </div>
            <br></br>
            <br></br>
           {dataAnalysisData.loading === false ?
                 <Line
                 data={ 
                        {
                            labels : dataAnalysisData.getTime,
                            datasets : [
                              {
                             label: 'Parameter1',
                             fill: false,
                             lineTension: 0.5,
                             backgroundColor: 'red',
                             borderColor: 'red',
                             borderWidth: 2,
                             data: dataAnalysisData.parameterOneData
                              },
                              {
                               label: 'Parameter2',
                               fill: false,
                               lineTension: 0.5,
                               backgroundColor: 'blue',
                               borderColor: 'blue',
                               borderWidth: 2,
                               data: dataAnalysisData.parameterTwoData
                                },
                                {
                                 label: 'Parameter3',
                                 fill: false,
                                 lineTension: 0.5,
                                 backgroundColor: 'green',
                                 borderColor: 'green',
                                 borderWidth: 2,
                                 data: dataAnalysisData.parameterThreeData
                                  }
       
                            ]
                        } 
                       
                 }
                 options={{
                   title:{
                     display:true,
                     text:'Data Analysis',
                     fontSize:20
                   },
                   legend:{
                     display:true,
                     position:'right'
                   }
                 }}
               />
               :null
          }
         
        </div>
    )
}

export default DataAnalysis;
