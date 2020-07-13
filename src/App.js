import React, { Component }from 'react';

import './App.css';
import {CanvasJSChart} from 'canvasjs-react-charts'

class App extends Component {
  render() {
    const optionsPie = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Sentimental Analysis of COVID-19 Tweets"
			},
			data: [{
				type: "pie",
				startAngle: -90,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 51.5, label: "Positive Sentimentals" },
					{ y: 16.5, label: "Negative Sentimentals" },
					{ y: 32, label: "Neutral Sentimentals" }
				]
			}]
    }
    
    const optionsGraph = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Sentimental Analysis of People if Lockdown extends"
			},
			axisY: {
				title: "Average Sentimantal Values",
				includeZero: false,
				//suffix: "%"
			},
			axisX: {
				title: "Dates",
				//prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Date {x}: Value {y}%",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
		}


    return(
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2">
          <span className="navbar-brand col-sm-3 col-md-2 mr-0" >Sentimental Analysis of COVID 19 Tweets</span>
          <input className="form-control form-control-dark w-50 ml-4" type="text" placeholder="Search" aria-label="Search" />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              
            </li>
          </ul>
        </nav>

        <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Pie Chart 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Test
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Graph
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Conclusion
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Pie Chart</h1>
          </div>

          <div>
            <CanvasJSChart options = {optionsPie} />
          </div>
          <br/>
          <br/>

          
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Form</h1>
          </div>

          <div>
            <CanvasJSChart options = {optionsGraph} />
          </div>


          
        </main>
      </div>
    </div>
    
               
    </div>

    );
  }
}
export default App;
