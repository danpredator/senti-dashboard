import React, { Component }from 'react';

import './App.css';
import {CanvasJSChart} from 'canvasjs-react-charts'

class App extends Component {
	constructor() {
		super();
		this.state ={
			records : [
				{text:"Day 53 of our COVID19 selfisolation Todays portrait is from the fields across the Yamuna River facing the Taj Mahal in Agra India taken in 2015On one side of the Yamuna River sites the magnificent Taj Mahal ",sentiment:"Neutral sentiment"},{text:"#darwintheory #currentlyreading#covid19 #coronavirus#currentsituation#adaptability #change #brightfutureJAQK HolidaysGoa ",sentiment:"Positive sentiment"},{text:"Very Good Morning Corona Virus Advisory for my birder friends Please be inside your nests and dont fly aroundIts time to be a skulker and not a canaryIts time to become uncommon rather ",sentiment:"Negative sentiment"},{text:"#coronavirus #yoga2020 #saftyfirst #health #healthconcious #opengym #handwash #relaxAfter workout and yoga session ",sentiment:"Neutral sentiment"},{text:"#novel Corona COVID19 IS NOT SPREAD FROM DIRTTHE FRESH EVIDENCE OF THIS STATEMENT IS THAT COVID19 FOUND IN FAMOUS SINGER AND ACTRESSKANIKA KAPOOR SOI URGED TO ALL OUR COUNTRYMEN PLZ FOLLOW JANTA CURFEW ",sentiment:"Positive sentiment"},{text:"40 days of COVID19 lockdown ends today and we enter lockdown 30 with a fresh perspective of life and lots of hope Good Evening World#lockdown#goodevening #goodeveningworld #sunset #coronavirus #covid19 ",sentiment:"Positive sentiment"},{text:"Many jails are already suffering with Corona outbreaks with hundreds of patients At such times its important that prisoners from other jails are released on parole so that such a scenario can be avoided in other prisons #CoronaRiskInJail",sentiment:"Neutral sentiment"},{text:"Anki Group provides handy and safe packing and moving services during lockdownOur team follow all safety precaution during this CoVid19 pandemic Using MasksFrequently Sanitize Hands with SanitizerMaintain ",sentiment:"Neutral sentiment"},{text:" please take action otherwise we will die in new disease not corona ",sentiment:"Negative sentiment"},{text:"Good morning friends#RajGardenPlants #ROOKHRAJPAUDHSHALA#Rimjhim #RimjhimSolanki #daughter #beti #betibachaobetipadhao #RimjhimBaisaa #covid19 #corona #IndiaFightsCorona #stayhome #staysafe #family #savefamily",sentiment:"Positive sentiment"}
			]
		}
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
    
    const optionsGraph1 = {
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
				markerType: "circle",
				// legendText: "circle",
				markerSize: 5,
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
				 
			}
		]
		}


		const optionsGraph2 = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Lockdown Extension Sentimental Predition"
			},
			axisY: {
				title: "Sentimantal Values",
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
				name: 'Past data',
				showInLegend: true,
				
				dataPoints: [{ x : new Date(2020,4,19), y : -27.273000 },{ x : new Date(2020,4,20), y : 154.944000 },
					{ x : new Date(2020,4,21), y : 165.089000 },
					{ x : new Date(2020,4,22), y : 130.557000 },
					{ x : new Date(2020,4,23), y : 134.809000 },
					{ x : new Date(2020,4,24), y : 109.248000 },
					{ x : new Date(2020,4,25), y : 96.094000 },
					{ x : new Date(2020,4,26), y : 150.026000 },
					{ x : new Date(2020,4,27), y : 95.688000 },
					{ x : new Date(2020,4,28), y : 123.417000 },
					{ x : new Date(2020,4,29), y : 195.202000 },
					{ x : new Date(2020,4,30), y : 125.779000 },
					{ x : new Date(2020,4,31), y : 155.463000 },
					{ x : new Date(2020,5,1), y : 121.364000 },
					{ x : new Date(2020,5,2), y : 115.221000 },
					{ x : new Date(2020,5,3), y : 130.255000 },
					{ x : new Date(2020,5,4), y : 41.313000 },
					{ x : new Date(2020,5,5), y : 120.367000 },
					{ x : new Date(2020,5,6), y : 112.195000 },
					{ x : new Date(2020,5,7), y : 90.698000 },
					{ x : new Date(2020,5,8), y : 149.354000 },
					{ x : new Date(2020,5,9), y : 132.923000 },
					{ x : new Date(2020,5,10), y : 145.282000 },
					{ x : new Date(2020,5,11), y : 62.314000 },
					{ x : new Date(2020,5,12), y : 130.088000 },
					{ x : new Date(2020,5,13), y : 199.996000 },
					{ x : new Date(2020,5,14), y : 73.795000 },
					{ x : new Date(2020,5,15), y : -15.831000 },
					{ x : new Date(2020,5,16), y : 122.435000 },
					{ x : new Date(2020,5,17), y : 122.435000 },
					{ x : new Date(2020,5,18), y : 122.435000 },
					{ x : new Date(2020,5,19), y : 122.435000 },
					{ x : new Date(2020,5,20), y : 122.435000 },
					{ x : new Date(2020,5,21), y : 122.435000 },
					{ x : new Date(2020,5,22), y : 122.435000 },
					{ x : new Date(2020,5,23), y : 122.435000 },
					{ x : new Date(2020,5,24), y : 122.435000 },
					{ x : new Date(2020,5,25), y : 122.435000 },
					{ x : new Date(2020,5,26), y : 122.435000 },
					{ x : new Date(2020,5,27), y : 122.435000 },
					{ x : new Date(2020,5,28), y : 102.883000 },
					{ x : new Date(2020,5,29), y : 83.973000 },
					{ x : new Date(2020,5,30), y : 117.580000 },
					{ x : new Date(2020,6,1), y : 132.335000 },
					{ x : new Date(2020,6,2), y : 187.589000 },
					{ x : new Date(2020,6,3), y : 116.153000 },
					{ x : new Date(2020,6,4), y : 106.473000 },
					{ x : new Date(2020,6,5), y : 76.887000 },
					{ x : new Date(2020,6,6), y : 136.118000 },
					{ x : new Date(2020,6,7), y : 89.830000 },
					{ x : new Date(2020,6,8), y : 155.884000 },
					{ x : new Date(2020,6,9), y : 106.252000 },
					{ x : new Date(2020,6,10), y : 150.769000 },
					{ x : new Date(2020,6,11), y : 134.036000 },
					{ x : new Date(2020,6,12), y : 97.409000 },
					{ x : new Date(2020,6,13), y : 68.702000 },
					{ x : new Date(2020,6,14), y : 120.641000 },
					{ x : new Date(2020,6,15), y : 124.959000 },
					{ x : new Date(2020,6,16), y : 118.671000 },
					{ x : new Date(2020,6,17), y : 150.954000 },
					{ x : new Date(2020,6,18), y : 125.754000 },
					{ x : new Date(2020,6,19), y : 118.906000 },
					{ x : new Date(2020,6,20), y : 133.495000 },
					{ x : new Date(2020,6,21), y : 112.477000 },
					{ x : new Date(2020,6,22), y : 145.313000 },
					{ x : new Date(2020,6,23), y : 104.966000 },
					{ x : new Date(2020,6,24), y : 128.372000 },
					{ x : new Date(2020,6,25), y : 124.396000 },
					{ x : new Date(2020,6,26), y : 130.071000 },
					{ x : new Date(2020,6,27), y : 173.907000 },
					{ x : new Date(2020,6,28), y : 150.845000 },
					{ x : new Date(2020,6,29), y : 173.628000 },
					{ x : new Date(2020,6,30), y : 158.592000 },
					{ x : new Date(2020,6,31), y : 158.354000 },
					{ x : new Date(2020,7,1), y : 160.233000 },
					{ x : new Date(2020,7,2), y : 67.155000 },
					{ x : new Date(2020,7,3), y : 130.670000 },
					{ x : new Date(2020,7,4), y : 120.018000 },
					{ x : new Date(2020,7,5), y : 144.979000 },
					{ x : new Date(2020,7,6), y : 149.895000 },
					{ x : new Date(2020,7,7), y : 162.306000 },
					{ x : new Date(2020,7,8), y : 167.045000 },
					{ x : new Date(2020,7,9), y : 100.335000 },
					{ x : new Date(2020,7,10), y : 109.208000 },
					{ x : new Date(2020,7,11), y : 91.806000 },
					{ x : new Date(2020,7,12), y : 164.123000 },
					{ x : new Date(2020,7,13), y : 104.197000 },
					{ x : new Date(2020,7,14), y : 114.709000 },
					{ x : new Date(2020,7,15), y : 100.642000 },
					{ x : new Date(2020,7,16), y : 125.372000 },
					{ x : new Date(2020,7,17), y : 162.663000 },
					{ x : new Date(2020,7,18), y : 86.809000 },
					{ x : new Date(2020,7,19), y : 144.941000 },
					{ x : new Date(2020,7,20), y : 142.287000 },
					{ x : new Date(2020,7,21), y : 153.387000 },
					{ x : new Date(2020,7,22), y : 164.914000 },
					{ x : new Date(2020,7,23), y : 3.731000 }
							]
				 
			},
			{
				type: "line",
				toolTipContent: "Date {x}: Predicted Value {y}",
				name: "Predicted Value",
				showInLegend: true,
				markerSize: 5,
				dataPoints: [{ x : new Date(2020,7,24), y : 132.355000 },
					{ x : new Date(2020,7,25), y : 130.461000 },
					{ x : new Date(2020,7,26), y : 128.158000 },
					{ x : new Date(2020,7,27), y : 126.094000 },
					{ x : new Date(2020,7,28), y : 125.719000 },
					{ x : new Date(2020,7,29), y : 126.154000 },
					{ x : new Date(2020,7,30), y : 126.277000 }]
			},
			{
				type: "line",
				toolTipContent: "Date {x}: Predicted Value {y}",
				name: 'Future prediction',
				showInLegend: true,
				markerSize: 5,
				dataPoints: [{ x : new Date(2020,8,1), y : 127.508000 },
					{ x : new Date(2020,8,2), y : 127.822000 },
					{ x : new Date(2020,8,3), y : 128.114000 },
					{ x : new Date(2020,8,4), y : 128.188000 },
					{ x : new Date(2020,8,5), y : 128.064000 },
					{ x : new Date(2020,8,6), y : 130.223000 },
					{ x : new Date(2020,8,7), y : 130.838000 },
					{ x : new Date(2020,8,8), y : 132.764000 },
					{ x : new Date(2020,8,9), y : 132.058000 },
					{ x : new Date(2020,8,10), y : 131.278000 },
					{ x : new Date(2020,8,11), y : 130.449000 },
					{ x : new Date(2020,8,12), y : 130.646000 },
					{ x : new Date(2020,8,13), y : 130.516000 },
					{ x : new Date(2020,8,14), y : 130.516000 },
					{ x : new Date(2020,8,15), y : 130.516000 },
					{ x : new Date(2020,8,16), y : 130.516000 },
					{ x : new Date(2020,8,17), y : 130.516000 },
					{ x : new Date(2020,8,18), y : 130.516000 },
					{ x : new Date(2020,8,19), y : 130.516000 },
					{ x : new Date(2020,8,20), y : 130.516000 },
					{ x : new Date(2020,8,21), y : 130.516000 },
					{ x : new Date(2020,8,22), y : 130.516000 },
					{ x : new Date(2020,8,23), y : 130.516000 },
					{ x : new Date(2020,8,24), y : 130.516000 },
					{ x : new Date(2020,8,25), y : 130.516000 },
					{ x : new Date(2020,8,26), y : 130.516000 },
					{ x : new Date(2020,8,27), y : 130.516000 },
					{ x : new Date(2020,8,28), y : 130.516000 },
					{ x : new Date(2020,8,29), y : 130.516000 },
					{ x : new Date(2020,8,30), y : 130.516000 },
					{ x : new Date(2020,8,31), y : 130.516000 }]
			}
		]
		}



    return(
      <div>
		  
        <nav className="d-flex justify-content-start flex-row navbar-header navbar-dark sticky-top bg-dark flex-md-nowrap p-2">
		  <span className="navbar-brand col-sm-3 col-md-2 mr-0" >
			  Sentimental Analysis of COVID 19 Tweets - Visualization Dashboard</span>
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
				  onClick={() => this.scrolltolabel('#graph')} >
                  Graph
                </span>
              </li>
			  <li class="nav-item">
			  <span class="nav-link text-primary border-bottom border-dark" 
				style={{'cursor':'pointer'}}  
				  onClick={() => this.scrolltolabel('#data')} >
                  Data
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
		  	id="graph">
            <h1 class="h2">Graph - Train Data</h1>
          </div>
          <div class="container-fluid">
            <CanvasJSChart style={{ 'min-width' : '100%'}} options = {optionsGraph1} 
			onRef={ref => this.chart = ref}/>
          </div>
		  <br/>
          <br/>

		  <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		  	id="graph">
            <h1 class="h2">Graph - Test Data</h1>
          </div>
          <div class="container-fluid">
            <CanvasJSChart style={{ 'min-width' : '100%'}} options = {optionsGraph2} 
			onRef={ref => this.chart = ref}/>
          </div>
		  <br/>
          <br/>

		  <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		  	id="data">
            <h1 class="h2">Data</h1>
          </div>
          <div class="container-fluid">
		  <table class="table text-center " >
			<thead class="thead-light">
				<tr>
				<th scope="col">Text</th>
				<th scope="col">Sentiments</th>
				</tr>
			</thead>
			<tbody>
				{ this.state.records.map((record,key) => {
					return(
						<tr key={key}>
							<td class="table-dark text-left small">{record.text}</td>
							<td class="table-dark text-center small">{record.sentiment}</td>
						</tr>
					)
				})}
			</tbody>
			</table>
          </div>
		  <br/>
          <br/>

		  <div class="container d-flex justify-content-between start flex-row align-items-center pb-2 mb-3 border-bottom border-danger"
		  id="con">
            <h1 class="h2">Conclusion</h1>
          </div>
		  <div class="container">
			  <p class="h5"><em>The above graph predicts sentiments of people in future dates if the lockdown is extended, where X axis represents the dates starting from 19 March until 31st July, and Y axis represents the sentimental values. We have taken the average of everyday tweets sentiments and multiplied it with 1000 in order to get maximum difference between corresponding points. The values till 23rd June are trained and are tested on data from June 23 to June 30 and the prediction has been extended till July 31st.
				From the pie chart it is observable that Positive Sentiments > Neutral Sentiments > Negative Sentiments and in the graph maximum of average sentiment values are between 50 and 175(0.05-0.175) and also the future predicted values are within the same range.
				This gives a conclusion that if government decides to extend the lockdown there will be more positive sentiments and neutral sentiments due to the uncontrolled increase of number of patients effected due to corona, people think of protecting themselves so support the lockdown.
				There might be some number of negative sentiments also with regards to increase in number of deaths and unemployment and lack of money due to no work indicating such situations.
				There is possibility that this model might not be accurate but the past responses of people towards corona and lockdown shows that they will support the extension of lockdown.
				</em> </p>
		  </div>


          
        </main>
      </div>
    </div>
    
               
    </div>

    );
  }
}
export default App;
