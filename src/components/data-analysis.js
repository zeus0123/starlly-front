import React from 'react';
import {Line as LineChart} from 'react-chartjs';

function chartData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ]
    }
  }

  const options = {
    scaleShowGridLines: true,
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  }

const DataAnalysis = () => {
    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                 <button type='button' className='btn btn-primary'>Start Analysis</button>    
            </div>
            <br></br>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card'>
                         <div className='card-body'>
                              <div className='card-title'>
                                  Power Outage(in minutes)
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
                         </div>  
                    </div>
                </div> 
                <div className='col-md-3'>
                <div className='card'>
                         <div className='card-body'>
                         <div className ='card-title'> 
                                 Critical Alert  
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
                         </div>  
                    </div>
                </div> 
            </div>
            <br></br>

            <LineChart data={chartData()}
          options={options}
          width="600" height="250"/>
        </div>
    )
}

export default DataAnalysis;
