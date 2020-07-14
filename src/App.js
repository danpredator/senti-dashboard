import React, { Component }from 'react';

import './App.css';
import {CanvasJSChart} from 'canvasjs-react-charts'

class App extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
		this.scrolltolabel = this.scrolltolabel.bind(this);
	}
	scrolltolabel(s){
		const anchor = document.querySelector(s)
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
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
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "line",
				toolTipContent: "Date {x}: Actual  Value {y}",
				name: "Actual  Value",
				axisYType: "primary",
				showInLegend: true,
				dataPoints: [{x: new Date(2020,4,19),y:-27.273},{x: new Date(2020,4,20),y:154.944},
							 {x: new Date(2020,4,21),y:165.089},{x: new Date(2020,4,22),y:130.557},
							 {x: new Date(2020,4,23),y:134.809},{x: new Date(2020,4,24),y:109.248},
							 {x: new Date(2020,4,25), y: 96.094},{x: new Date(2020,4,26),y: 150.026},
							 {x: new Date(2020,4,27), y: 95.688}, {x: new Date(2020,4,28), y: 123.417},
							 {x: new Date(2020,4,28), y: 195.202},{x: new Date(2020,4,30), y: 125.779},
							 {x: new Date(2020,4,31), y: 155.463}, {x: new Date(2020,5,1), y: 121.364},
							 {x: new Date(2020,5,2), y: 115.221}, {x: new Date(2020,5,3), y: 130.255},
							 {x: new Date(2020,5,4), y: 41.313}, {x: new Date(2020,5,5), y: 120.367},
							 {x: new Date(2020,5,6), y: 112.195}, {x: new Date(2020,5,7), y: 90.698},
							 {x: new Date(2020,5,8), y: 149.354}, {x: new Date(2020,5,9), y: 132.923},
							 {x: new Date(2020,5,10),y: 145.282}, {x: new Date(2020,5,11), y: 62.314},
							 {x: new Date(2020,5,12), y: 130.088}, {x: new Date(2020,5,13), y: 199.996},
							 {x: new Date(2020,5,14), y: 73.795}, {x: new Date(2020,5,15), y: -15.831},
							 {x: new Date(2020,5,16), y: 122.435}, {x: new Date(2020,5,17), y: 122.435},
							 {x: new Date(2020,5,18), y: 122.435}, {x: new Date(2020,5,19), y: 122.435},
							 {x: new Date(2020,5,20), y: 122.435}, {x: new Date(2020,5,21), y: 122.435},
							 {x: new Date(2020,5,22), y: 122.435}, {x: new Date(2020,5,23), y: 122.435},
							 {x: new Date(2020,5,24), y: 122.435}, {x: new Date(2020,5,25), y: 122.435},
							 {x: new Date(2020,5,26), y: 122.435}, {x: new Date(2020,5,27), y: 122.435},
							 {x: new Date(2020,5,28), y: 102.883}, {x: new Date(2020,5,29), y: 83.973},
							 {x: new Date(2020,5,30), y: 117.58}, {x: new Date(2020,6,1), y: 132.335},
							 {x: new Date(2020,6,2), y: 187.589}, {x: new Date(2020,6,3), y: 116.153},
							 {x: new Date(2020,6,4), y: 106.473}, {x: new Date(2020,6,5), y: 76.887},
							 {x: new Date(2020,6,6), y: 136.118}, {x: new Date(2020,6,7), y: 89.83},
							 {x: new Date(2020,6,8), y: 155.884}, {x: new Date(2020,6,9), y: 106.252},
							 {x: new Date(2020,6,10), y: 150.769}, {x: new Date(2020,6,11), y: 134.036},
							 {x: new Date(2020,6,12), y: 97.409}, {x: new Date(2020,6,13), y: 68.702},
							 {x: new Date(2020,6,14), y: 120.641}, {x: new Date(2020,6,15), y: 124.959},
							 {x: new Date(2020,6,16), y: 118.671}, {x: new Date(2020,6,17), y: 150.954},
							 {x: new Date(2020,6,18), y: 125.754}, {x: new Date(2020,6,19), y: 118.906},
							 {x: new Date(2020,6,20), y: 133.495}, {x: new Date(2020,6,21), y: 112.477},
							 {x: new Date(2020,6,22), y: 145.313}, {x: new Date(2020,6,23), y: 104.966},
							 {x: new Date(2020,6,24), y: 128.372}, {x: new Date(2020,6,25), y: 124.396},
							 {x: new Date(2020,6,26), y: 130.071}, {x: new Date(2020,6,27), y: 173.907},
							 {x: new Date(2020,6,28), y: 150.845}, {x: new Date(2020,6,29), y: 173.628},
							 {x: new Date(2020,6,30), y: 158.592}, {x: new Date(2020,6,31), y: 158.354},
							 {x: new Date(2020,7,1), y: 160.233}, {x: new Date(2020,7,2), y: 67.155},
							 {x: new Date(2020,7,3), y: 130.67}, {x: new Date(2020,7,4), y: 120.018},
							 {x: new Date(2020,7,5), y: 144.979}, {x: new Date(2020,7,6), y: 149.895},
							 {x: new Date(2020,7,7), y: 162.306}, {x: new Date(2020,7,8), y: 167.045},
							 {x: new Date(2020,7,9), y: 100.335}, {x: new Date(2020,7,10), y: 109.208},
							 {x: new Date(2020,7,11), y: 91.806}, {x: new Date(2020,7,12), y: 164.123},
							 {x: new Date(2020,7,13), y: 104.197}, {x: new Date(2020,7,14), y: 114.709},
							 {x: new Date(2020,7,15), y: 100.642}, {x: new Date(2020,7,16), y: 125.372},
							 {x: new Date(2020,7,17), y: 162.663}, {x: new Date(2020,7,18), y: 86.809},
							 {x: new Date(2020,7,19), y: 144.941}, {x: new Date(2020,7,20), y: 142.287},
							 {x: new Date(2020,7,21), y: 153.387}, {x: new Date(2020,7,22), y: 164.914},
							 {x: new Date(2020,7,23), y: 3.731}
							]
				 
			},
			{
				type: "line",
				toolTipContent: "Date {x}: Predicted Value {y}",
				name: "Predicted Value",
				axisYType: "secondary",
				showInLegend: true,
				dataPoints: [{x: new Date(2020,4,21),y:18.3},{x: new Date(2020,4,22),y:13.9},
							 {x: new Date(2020,4,23),y:9.6},{x: new Date(2020,4,24),y:100}]
			}
		]
		}


    return(
      <div>
		  
        <nav className="d-flex justify-content-start flex-row navbar-header navbar-dark sticky-top bg-dark flex-md-nowrap p-2">
		<button hidden type="button" id="right-panel-link" class="btn btn-info shadow "
            data-toggle="collapse" data-target="#modalLoginForm" 
            >E</button>
          <span className="navbar-brand col-sm-3 col-md-2 mr-0" >Sentimental Analysis of COVID 19 Tweets</span>
          <input hidden className="form-control form-control-dark w-50 ml-4" type="text" placeholder="Search" aria-label="Search" />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              
            </li>
          </ul>
        </nav>

        <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar " id="modalLoginForm">
          <div class="sidebar-sticky font-italic font-weight-bold  " >
            <ul class="nav flex-column">
              <li class="nav-item">
			  <span class="nav-link text-primary border-bottom border-dark" 
				style={{'cursor':'pointer'}}  
				  onClick={() => this.scrolltolabel('#pie')} >
                  Pie Chart 
                </span>
              </li>
              <li class="nav-item">
			  <span class="nav-link text-primary border-bottom border-dark" 
				style={{'cursor':'pointer'}}  
				  onClick={() => this.scrolltolabel('#test')} >
                  Test
                </span>
              </li>
			  <li class="nav-item">
			  <span class="nav-link text-primary border-bottom border-dark" 
				style={{'cursor':'pointer'}}  
				  onClick={() => this.scrolltolabel('#tweets')} >
                  Tweets and Their Sentiments
                </span>
              </li>
              <li class="nav-item">
			  <span class="nav-link text-primary border-bottom border-dark" 
				style={{'cursor':'pointer'}}  
				  onClick={() => this.scrolltolabel('#graph')} >
                  Graph
                </span>
              </li>
              <li class="nav-item">
			  <span class="nav-link text-primary border-bottom border-dark" 
				style={{'cursor':'pointer'}}  
				  onClick={() => this.scrolltolabel('#con')} >
                  Conclusion
                </span>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		    id="pie">
            <h1 class="h2">Pie Chart</h1>
          </div>
          <div class="container-fluid">
            <CanvasJSChart style={{ 'min-width' : '100%'}} options = {optionsPie} />
          </div>
          <br/>
          <br/>

          <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		    id="test">
            <h1 class="h2">Form</h1>
          </div>
		  <div class="container text-center">
			  <form class="px-3 py-2" 
			  	onSubmit={(event) => {
					event.preventDefault()
					  //some functin
				  }}>
				<div class="form-group mt-4 pt-2">
					<label>Test Data : &nbsp;</label> 
					<input type="text" class="w-50 " 
					ref={(input) => { this.tname = input }} />
				</div>
								
				<button type="submit" className="ml-5  btn btn-default text-light" style={{'backgroundColor': '#04d6b1'}}>
					Run</button>
			  </form>
			  
			</div>
		  <br/>
          <br/>

		  <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		   id="tweets">
            <h1 class="h2">Tweets and Their Sentiments</h1>
          </div>
          <div class="container-fluid">
            <p>text from python json</p>
			<button type="button" class="btn shadow " style={{ 'backgroundColor' : '#d32e2e'}}
			>Next</button>
          </div>
		  <br/>
          <br/>

          <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		  	id="graph">
            <h1 class="h2">Graph</h1>
          </div>
          <div class="container-fluid">
            <CanvasJSChart style={{ 'min-width' : '100%'}} options = {optionsGraph} 
			onRef={ref => this.chart = ref}/>
          </div>
		  <br/>
          <br/>

		  <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		  id="con">
            <h1 class="h2">Conclusion</h1>
          </div>
		  <div class="container">
			  <p><em>Write Conclusion text heere</em> </p>
		  </div>


          
        </main>
      </div>
    </div>
    
               
    </div>

    );
  }
}
export default App;
