
    // Initialize the echarts instance based on the prepared dom
    let chartDom = document.getElementById('mainchart');
    let myChart = echarts.init(chartDom);

    if (myChart.getWidth() < 500) {
    offset_myChart = [0, 0]
} else { offset_myChart = [10,0]}

    let option;
    // Specify the configuration items and data for the chart
    let pathSymbols = {
    communication:'path://M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z',
    statAnalysis:'path://M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z',
    torch:'path://M55 21.9 C55 24.551 52.851 26.7 50.2 26.7 47.549 26.7 45.4 24.551 45.4 21.9 45.4 19.249 47.549 17.1 50.2 17.1 52.851 17.1 55 19.249 55 21.9 Z M63.1 28.3 L56.5 34.9 C67.3 45.7 67.3 63.1 56.5 73.7 45.7 84.5 28.3 84.5 17.7 73.7 6.9 62.9 6.9 45.5 17.7 34.9 L34.8 17.8 37.2 15.4 37.2 2.5 11.4 28.3 C-3 42.7 -3 65.9 11.4 80.3 25.8 94.7 49 94.7 63.1 80.3 77.5 65.8 77.5 42.7 63.1 28.3 Z',
    binf:'path://M416 0c17.7 0 32 14.3 32 32c0 59.8-30.3 107.5-69.4 146.6c-28 28-62.5 53.5-97.3 77.4l-2.5 1.7c-11.9 8.1-23.8 16.1-35.5 23.9l0 0 0 0 0 0-1.6 1c-6 4-11.9 7.9-17.8 11.9c-20.9 14-40.8 27.7-59.3 41.5H283.3c-9.8-7.4-20.1-14.7-30.7-22.1l7-4.7 3-2c15.1-10.1 30.9-20.6 46.7-31.6c25 18.1 48.9 37.3 69.4 57.7C417.7 372.5 448 420.2 448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-59.8 30.3-107.5 69.4-146.6c28-28 62.5-53.5 97.3-77.4c-34.8-23.9-69.3-49.3-97.3-77.4C30.3 139.5 0 91.8 0 32C0 14.3 14.3 0 32 0S64 14.3 64 32H384c0-17.7 14.3-32 32-32zM338.6 384H109.4c-10.1 10.6-18.6 21.3-25.5 32H364.1c-6.8-10.7-15.3-21.4-25.5-32zM109.4 128H338.6c10.1-10.7 18.6-21.3 25.5-32H83.9c6.8 10.7 15.3 21.3 25.5 32zm55.4 48c18.4 13.8 38.4 27.5 59.3 41.5c20.9-14 40.8-27.7 59.3-41.5H164.7z',
    python:'path://M439.8,200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0,36.8-31.2,67.8-66.8,67.8H172.7c-29.2,0-53.4,25-53.4,54.3v101.8c0,29,25.2,46,53.4,54.3,33.8,9.9,66.3,11.7,106.8,0,26.9-7.8,53.4-23.5,53.4-54.3v-40.7H226.2v-13.6h160.2c31.1,0,42.6-21.7,53.4-54.2,11.2-33.5,10.7-65.7,0-108.6zM286.2,404c11.1,0,20.1,9.1,20.1,20.3,0,11.3-9,20.4-20.1,20.4-11,0-20.1-9.2-20.1-20.4.1-11.3,9.1-20.3,20.1-20.3zM167.8,248.1h106.8c29.7,0,53.4-24.5,53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2,8-53.4,24.7-53.4,55.6v40.7h106.9v13.6h-147c-31.1,0-58.3,18.7-66.8,54.2-9.8,40.7-10.2,66.1,0,108.6,7.6,31.6,25.7,54.2,56.8,54.2H101v-48.8c0-35.3,30.5-66.4,66.8-66.4zm-6.7-142.6c-11.1,0-20.1-9.1-20.1-20.3.1-11.3,9-20.4,20.1-20.4,11,0,20.1,9.2,20.1,20.4s-9,20.3-20.1,20.3z',
    visualisation:'path://M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z',
    sql: 'path://M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z',
    java: 'path://M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z',
    train:'path://M32,32H480c17.7,0,32,14.3,32,32V96c0,17.7-14.3,32-32,32H32C14.3,128,0,113.7,0,96V64C0,46.3,14.3,32,32,32zm0,128H480V416c0,35.3-28.7,64-64,64H96c-35.3,0-64-28.7-64-64V160zm128,80c0,8.8,7.2,16,16,16H336c8.8,0,16-7.2,16-16s-7.2-16-16-16H176c-8.8,0-16,7.2-16,16z',
    haskell:'path://M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z',
    js:'path://M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z',
    r:'path://M581 226.6C581 119.1 450.9 32 290.5 32S0 119.1 0 226.6C0 322.4 103.3 402 239.4 418.1V480h99.1v-61.5c24.3-2.7 47.6-7.4 69.4-13.9L448 480h112l-67.4-113.7c54.5-35.4 88.4-84.9 88.4-139.7zm-466.8 14.5c0-73.5 98.9-133 220.8-133s211.9 40.7 211.9 133c0 50.1-26.5 85-70.3 106.4-2.4-1.6-4.7-2.9-6.4-3.7-10.2-5.2-27.8-10.5-27.8-10.5s86.6-6.4 86.6-92.7-90.6-87.9-90.6-87.9h-199V361c-74.1-21.5-125.2-67.1-125.2-119.9zm225.1 38.3v-55.6c57.8 0 87.8-6.8 87.8 27.3 0 36.5-38.2 28.3-87.8 28.3zm-.9 72.5H365c10.8 0 18.9 11.7 24 19.2-16.1 1.9-33 2.8-50.6 2.9v-22.1z'
};
    const labelSetting = {
    show: true,
    position: 'right',
    offset: offset_myChart,
    fontSize: 16,
    textStyle: {
    color: '#ffffff'
}

};
    function makeOption(type, symbol) {
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

    // data: ['Python', 'SQL', 'Java', 'HTML/CSS/JS', 'R', "Haskell"],
    data:[{
    value: 'Python',
    // Highlight Monday
    textStyle: {
    color: '#ffffff'
}
}, {
    value: 'SQL',
    // Highlight Monday
    textStyle: {
    color: '#ffffff'
}
},{
    value: 'Java',
    // Highlight Monday
    textStyle: {
    color: '#ffffff'
}
},{
    value: 'HTML/CSS/JS',
    // Highlight Monday
    textStyle: {
    color: '#ffffff'
}
},{
    value: 'R',
    // Highlight Monday
    textStyle: {
    color: '#ffffff'
}
},{
    value: 'Haskell',
    // Highlight Monday
    textStyle: {
    color: '#ffffff'
}
}],
    inverse: true,
    color: "#ffffff",
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
    margin: 40,
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
    textStyle: {
    color: '#ffffff'
},
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
    symbolSize: ['100%', '100%'],
    barCategoryGap: '40%',
    universalTransition: {
    enabled: true,
    delay: function (idx, total) {
    return (idx / total) * 1000;
}
},data: [{value: 100, symbol: symbol || pathSymbols.python, tt_name:"Python", tt_pj:"20", tt_yoe:"5", tt_ct:"12"}, // Python
    {value: 80, symbol: symbol || pathSymbols.sql, tt_name:"SQL", tt_pj:"3", tt_yoe:"2", tt_ct:"3"}, // SQL
    {value: 80, symbol: symbol || pathSymbols.java, tt_name:"Java", tt_pj:"6", tt_yoe:"2", tt_ct:"3"}, // Java
    {value: 75, symbol: symbol || pathSymbols.js, tt_name:"Web Dev", tt_pj:"4", tt_yoe:"3", tt_ct:"4"}, // Web
    {value: 60, symbol: symbol || pathSymbols.r, tt_name:"R", tt_pj:"4", tt_yoe:"2", tt_ct:"3"}, // R
    {value: 60, symbol: symbol || pathSymbols.haskell, tt_name:"Haskell", tt_pj:"3", tt_yoe:"1", tt_ct:"1"}, //haskell
] // web
},

    ]
};
}
    var options = [
        makeOption('pictorialBar'),
        makeOption('bar'),
    // makeOption('pictorialBar', 'diamond')
    ];
    var optionIndex = 0;
    option = options[optionIndex];


    setInterval(function () {
        optionIndex = (optionIndex + 1) % options.length;
        myChart.setOption(options[optionIndex]);

        optionIndex2 = (optionIndex2 + 1) % options2.length;
        myChart2.setOption(options2[optionIndex2]);
    }, 10000);

    // Display the chart using the configuration items and data just specified.
    myChart.setOption(option);
