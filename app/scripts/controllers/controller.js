'use strict';

angular.module('POCApp')
  .controller('example1Ctrl', function ($scope) {

		/*----- BAR CHART ------*/
  				$scope.optionsBAR = {
				    chart: {
				        type: 'discreteBarChart',
				        height: 450,
				        margin : {
				            top: 20,
				            right: 20,
				            bottom: 60,
				            left: 55
				        },
				        x: function(d){ return d.label; },
				        y: function(d){ return d.value; },
				        showValues: true,
				        valueFormat: function(d){
				            return d3.format(',.4f')(d);
				        },
				        transitionDuration: 500,
				        xAxis: {
				            axisLabel: 'X Axis'
				        },
				        yAxis: {
				            axisLabel: 'Y Axis',
				            axisLabelDistance: 30
				        }
				    }
				};

  				$scope.dataBAR = [{
				    key: "Cumulative Return",
				    values: [
				        { "label" : "A" , "value" : -29.765957771107 },
				        { "label" : "B" , "value" : 50 },
				        { "label" : "C" , "value" : 32.807804682612 },
				        { "label" : "D" , "value" : 196.45946739256 },
				        { "label" : "E" , "value" : 20.19434030906893 },
				        { "label" : "F" , "value" : -98.079782601442 },
				        { "label" : "G" , "value" : -13.925743130903 },
				        { "label" : "H" , "value" : -5.1387322875705 },
				        { "label" : "I" , "value" : 5 },
				        { "label" : "J" , "value" : 62.807804682612 },
				        { "label" : "K" , "value" : 16.45946739256 },
				        { "label" : "L" , "value" : 6.19434030906893 },
				    ]
				}];

  				$scope.BARValues=JSON.stringify($scope.dataBAR[0].values, null, 2);
  				console.info($scope.dataBAR);

  				$scope.cambiarBAR = function(newValues) {

					$scope.dataBAR = [{
					    key: "Cumulative Return",
					    values:JSON.parse(newValues, null, 2)
					    }];
			    };


  		/*----- PIE CHART ------*/

		$scope.optionsPIE = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                transitionDuration: 500,
                labelThreshold: 0.01,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.dataPIE = [
            { key: "One",    y: 5   },
            { key: "Two",    y: 2   },
            { key: "Three",  y: 9   },
            { key: "Four",   y: 7   },
            { key: "Five",   y: 4   },
            { key: "Six",    y: 3   },
            { key: "Seven",  y: .5  }
        ];
			$scope.PIEValues=JSON.stringify($scope.dataPIE, null, 2);
			console.info($scope.dataPIE);

		    $scope.cambiarPIE = function(pieNewValues) {
		    	$scope.dataPIE = JSON.parse(pieNewValues, null, 2);
		    	console.log(pieNewValues);
		    };



  })
//---scatterChartCtrl
  .controller('example2Ctrl', function ($scope) {

  				$scope.optionsscatterChart = {
		            chart: {
		                type: 'scatterChart',
		                height: 450,
		                color: d3.scale.category10().range(),
		                scatter: {
		                    onlyCircles: true
		                },
		                showDistX: true,
		                showDistY: true,
		                tooltipContent: function(key) {
		                    return '<h3>' + key + '</h3>';
		                },
		                transitionDuration: 350,
		                xAxis: {
		                    axisLabel: 'X Axis',
		                    tickFormat: function(d){
		                        return d3.format('.02f')(d);
		                    }
		                },
		                yAxis: {
		                    axisLabel: 'Y Axis',
		                    tickFormat: function(d){
		                        return d3.format('.02f')(d);
		                    },
		                    axisLabelDistance: 50
		                }
		            }
		        };



		        //$scope.datascatterChart = $scope.generateData(4,40);

		        /* Random Data Generator (took from nvd3.org) */
		         $scope.generateData =function(SCgroups, SCpoints){
		         	var groups= SCgroups ? SCgroups:4;
		         	var points= SCpoints ? SCpoints:400;
		            var data = [],
		                //shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
		                shapes = ['circle'],
		                random = d3.random.normal();

		            for (var i = 0; i < groups; i++) {
		                data.push({
		                    key: 'Group ' + i,
		                    values: []
		                });

		                for (var j = 0; j < points; j++) {
		                    data[i].values.push({
		                        x: random()
		                        , y: random()
		                        , size: Math.random()
		                        , shape: shapes[j % 6]
		                    });
		                }
		            }
		            //return data;
		            $scope.datascatterChart=data;
		            $scope.newData=[];

		            for (var i=0;i<data.length;i++){
		            	$scope.newData[i]=JSON.stringify(data[i], null, 2);//data[i];
		            }

		            //console.log($scope.newData);
		            //$scope.datascatterChartTextarea=JSON.stringify(data, null, 2);
		        }

		        $scope.generateData(4,40);
		        

		        /*$scope.$watch('newData', function (oldValue, newValue) {
				    console.log(oldValue, newValue);
				});*/


		    $scope.cambiarScatter = function(ChangedData) {
		    	//console.info(ChangedData);
		    	//console.info(ChangedData.length);
		    	var renewData=[];
		    	for(var i=0;i<ChangedData.length;i++){
		    		renewData.push(JSON.parse(ChangedData[i]));
		    	}
		    	$scope.datascatterChart = renewData;//JSON.parse(newData, null, 2);
		    	
		    };



  });
