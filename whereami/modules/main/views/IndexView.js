/**
 * To show icon and item name, containing the tooltips!
 * Created by liu.wang on 3/2/17.
 */
define([
    'text!modules/main/templates/IndexTmpl.html',
    'css!modules/main/styles/IndexStl.css'
], function (IndexViewTpl, IndexCss) {

	var currentObj;
	var myChart;
	var option = {
    backgroundColor: '#1b1b1b',
    color: ['gold','aqua','lime'],
    title : {
        text: '我的轨迹',
        subtext:'刘旺的2017年',
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b}'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['2017'],
        selectedMode: 'single',
        selected:{
            
        },
        textStyle : {
            color: '#fff'
        }
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataRange: {
        min : 1,
        max : 12,
        splitNumber: 1,
        calculable : true,
        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
        textStyle:{
            color:'#fff'
        }
    },
    animationDurationUpdate: 2000, // for update animation, like legend selected.
    series : [
        {
            name: '2017',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'china',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:0.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            geoCoord: {
                '上海': [121.4648,31.2891],
                '广州': [113.5107,23.2196],
                '北京': [116.4551,40.2539],
                '福州': [119.300,26.083],
                '厦门': [118.100,24.483],
                '昆明': [102.683,25],
                '武汉': [114.35,30.617],
                '长沙': [113,28.183],
                '南昌': [115.867,28.683],
                '盘锦': [122.070897,41.142479],
                '西双版纳': [100.783,21.95],
                '乌鲁木齐': [87.6, 43.8],
                '桂林': [110.258045, 25.264678],
                '潮州':[116.66172000000006, 23.65846],
                '汕头': [116.725261, 23.385748],
                '肇庆':[112.477165, 23.080489],
                '韶关':[113.59216, 24.804768],
                '佛山':[112.891108989715582,22.883074735421907],
                '深圳':[114.023616,22.54791],
                '清远':[113.038723, 23.700283],
                '雅加达':[98.762834, -5.352634],
                '库塔':[115.16822000000002, -8.7702],
                '拉布安芭蕉':[119.80445046875002, -8.629020954050597],
                '毛梅雷':[122.28736062500002, -8.802772191695064],
                'Ende':[121.65015359375002, -8.965589936037233],
                'Moni':[121.89185281250002, -8.737624951327554], 

            },
            markLine : {
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        label: {
                            show: false
                        },
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data : [
                    [{name:'广州', smoothness:0.1}, {name:'长沙',value:1}],
                    [{name:'长沙', smoothness:0.1}, {name:'广州',value:1}],

                    [{name:'广州', smoothness:0.2}, {name:'潮州',value:7}],
                     [{name:'潮州', smoothness:0.2}, {name:'汕头',value:7}],

                    [{name:'汕头', smoothness:0.2}, {name:'广州',value:7}],

                    [{name:'广州', smoothness:0.2}, {name:'韶关',value:2}],
                    [{name:'韶关', smoothness:0.2}, {name:'广州',value:2}],

                    [{name:'广州', smoothness:0.2}, {name:'肇庆',value:3}],
                    [{name:'肇庆', smoothness:0.2}, {name:'广州',value:3}],

                    [{name:'广州', smoothness:0.2}, {name:'肇庆',value:9}],
                    [{name:'肇庆', smoothness:0.3}, {name:'广州',value:9}],

                    
                    

                    [{name:'广州', smoothness:0.1}, {name:'清远',value:10}],
                    [{name:'清远', smoothness:0.1}, {name:'广州',value:10}],

					[{name:'广州', smoothness:0.1}, {name:'深圳',value:8}],
                    [{name:'深圳', smoothness:0.1}, {name:'广州',value:8}],

                    [{name:'广州', smoothness:0.1}, {name:'雅加达',value:5}],
                    [{name:'雅加达', smoothness:0.1}, {name:'库塔',value:5}],

                    [{name:'库塔', smoothness:0.1}, {name:'毛梅雷',value:5}],

                    [{name:'毛梅雷', smoothness:0.1}, {name:'Moni',value:5}],

                    [{name:'Moni', smoothness:0.1}, {name:'Ende',value:5}],

                    [{name:'Ende', smoothness:0.1}, {name:'拉布安芭蕉',value:5}],

                    [{name:'拉布安芭蕉', smoothness:0.1}, {name:'库塔',value:6}],
                    [{name:'库塔', smoothness:0.1}, {name:'雅加达',value:6}],

					
                    [{name:'雅加达', smoothness:0.1}, {name:'广州',value:6}],

                    [{name:'广州', smoothness:0.1}, {name:'盘锦',value:1}],
                    [{name:'盘锦', smoothness:0.1}, {name:'广州',value:2}],


                    [{name:'广州', smoothness:0.1}, {name:'桂林',value:5}],
                    [{name:'桂林', smoothness:0.1}, {name:'广州',value:5}],
                    [{name:'广州', smoothness:0.1}, {name:'福州',value:7}],
                    [{name:'福州', smoothness:0.1}, {name:'广州',value:8}],
                    [{name:'福州', smoothness:0.1}, {name:'厦门',value:8}],
                    [{name:'厦门', smoothness:0.1}, {name:'福州',value:8}],

                    [{name:'福州', smoothness:0.1}, {name:'南昌',value:8}],
                    [{name:'南昌', smoothness:0.1}, {name:'福州',value:8}],

                    [{name:'广州', smoothness:0.1}, {name:'武汉',value:10}],
                    [{name:'武汉', smoothness:0.1}, {name:'昆明',value:10}],

                    [{name:'昆明', smoothness:0.1}, {name:'西双版纳',value:10}],
                    [{name:'西双版纳', smoothness:0.1}, {name:'昆明',value:10}],

                    [{name:'昆明', smoothness:0.1}, {name:'肇庆',value:10}],
                    [{name:'肇庆', smoothness:0.2}, {name:'佛山',value:10}],
                    [{name:'佛山', smoothness:0.3}, {name:'广州',value:10}],
                    [{name:'广州', smoothness:0.1}, {name:'乌鲁木齐',value:10}]
                ]
            }
        }
    ]
};
                    

    return fish.View.extend({
        el: '#demo',
        template: fish.compile(IndexViewTpl),

        initialize:function(options){
    		currentObj = this;
    	},

        afterRender: function () {

        $.getJSON("http://127.0.0.1/~liuw53/phalphp/PhalApi/Public/",function(data){ 
			console.log(data);
		}); 
        /**fish.ajax({
    		url: 'http://api.football-data.org/v1/soccerseasons/445/leagueTable',
    		type: 'GET'
		}).then(function (data) {
    		console.log(data);
		}).fail(function (data) {
    		console.log(data);
		});*/


        	currentObj.$(".mainEC").height($(window).height());
        	var curEC = currentObj.$(".mainEC").get(0);
        	myChart = echarts.init(curEC);
        	myChart.setOption(option);

            return this;
        }


    });

});

