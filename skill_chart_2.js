    // Initialize the echarts instance based on the prepared dom
    var chartDom2 = document.getElementById('mainchart2');
    var myChart2 = echarts.init(chartDom2);
    var option2;
    // Specify the configuration items and data for the chart

    function makeOption2(type, symbol) {
        return {
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                },
                // formatter: function(params) {
                //     return  `<p class="lead">${params.data.tt_name}</p>${params.data.tt_pj} related projects<br/>${params.data.tt_yoe} years of experience<br/>${params.data.tt_ct} related courses taken`;
                // }
            },
            grid: {
                containLabel: true,
                left: 0,
                top: 0,
                // right: 20,
                bottom: 0
            },
            yAxis: {
                // data: ['Visualization',  "Communication", 'Statistical Analysis', "PyTorch", "Bioinformatics"],
                data:[{
                    value: 'Visualization',
                    // Highlight Monday
                    textStyle: {
                        color: '#ffffff'
                    }
                }, {
                    value: 'Communication',
                    // Highlight Monday
                    textStyle: {
                        color: '#ffffff'
                    }
                },{
                    value: 'Bioinformatics',
                    // Highlight Monday
                    textStyle: {
                        color: '#ffffff'
                    }
                },{
                    value: 'Statistical Analysis',
                    // Highlight Monday
                    textStyle: {
                        color: '#ffffff'
                    }
                },{
                    value: 'PyTorch',
                    // Highlight Monday
                    textStyle: {
                        color: '#ffffff'
                    }
                },],
                inverse: true,
                // type: 'category',
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    margin: 18,
                    fontSize: 14
                },
                axisPointer: {
                    label: {
                        show: true,
                        margin: 30
                    }
                }
            },
            xAxis: {
                splitLine: { show: false },
                axisLabel: { show: false },
                axisTick: { show: false },
                axisLine: { show: false },
                // type: 'value'
            },
            animationDurationUpdate: 500,
            series: [
                {
                    id: 'bar1',
                    type: type,
                    label: labelSetting,
                    stack: 'total',
                    emphasis: {
                        focus: 'series'
                    },
                    showBackground: false,
                    symbolRepeat: true,
                    symbolSize: ['80%', '75%'],
                    barCategoryGap: '40%',
                    universalTransition: {
                        enabled: true,
                        delay: function (idx, total) {
                            return (idx / total) * 1000;
                        }
                    },data: [{value: 100, symbol: symbol || pathSymbols.visualisation}, // Visualisation
                        {value: 90, symbol: symbol || pathSymbols.communication}, // Communication
                        {value: 80, symbol: symbol || pathSymbols.binf}, // Bioinformatics
                        {value: 80, symbol: symbol || pathSymbols.statAnalysis, tt_name:"Statistical Analysis", tt_pj:"3", tt_yoe:"2", tt_ct:"3"}, // Statistical Analysis
                        {value: 80, symbol: symbol || pathSymbols.torch, tt_name:"PyTorch", tt_pj:"6", tt_yoe:"2", tt_ct:"3"}, // PyTorch
                        // {value: 60, symbol: symbol || pathSymbols.python, tt_name:"Haskell", tt_pj:"3", tt_yoe:"1", tt_ct:"1"}, //
                    // {value: 60, symbol: symbol || pathSymbols.python, tt_name:"Haskell", tt_pj:"3", tt_yoe:"1", tt_ct:"1"},
                    ] // Haskell

                },

            ]
        };
    }
    var options2 = [
        makeOption2('pictorialBar'),
        makeOption2('bar'),
    ];
    var optionIndex2 = 0;
    option2 = options2[optionIndex2];

    // Display the chart using the configuration items and data just specified.
    myChart2.setOption(option2);
