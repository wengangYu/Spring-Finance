var myChart = echarts.init(document.getElementById('echarts'));
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push(i +'天');
    data1.push((Math.sin(i / 5) * (i / 6 -1) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -1) + i / 6) * 5);
}

var option = {
    title: {
        text: '100天借款/出借金额柱状图（万元）'
    },
    legend: {
        data: ['借款金额', '出借金额'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '借款金额',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: '出借金额',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};
myChart.setOption(option);