/**
 * Created by liuw53 on 10/29/17.
 */
define([], function () {
    var defaultConf = {};


    var defaultOption = {
        backgroundColor: '#1b1b1b',
        color: ['gold', 'aqua', 'lime'],
        title: {
            text: '我的轨迹',
            subtext: 'by liuw53',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['2017','2016'],
            selectedMode: 'multiple',
            selected: {},
            textStyle: {
                color: '#fff'
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        dataRange: {
            min: 1,
            max: 12,
            splitNumber: 1,
            calculable: true,
            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            textStyle: {
                color: '#fff'
            }
        },
        animationDurationUpdate: 2000, // for update animation, like legend selected.
        series: [
            {
                name: '2017',
                type: 'map',
                roam: true,
                hoverable: false,
                mapType: 'china',
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 1,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [
                        [{name: '广州', smoothness: 0.1}, {name: '长沙', value: 1}],
                        [{name: '长沙', smoothness: 0.1}, {name: '广州', value: 1}],

                        [{name: '广州', smoothness: 0.2}, {name: '潮州', value: 7}],
                        [{name: '潮州', smoothness: 0.2}, {name: '汕头', value: 7}],

                        [{name: '汕头', smoothness: 0.2}, {name: '广州', value: 7}],

                        [{name: '广州', smoothness: 0.2}, {name: '韶关', value: 2}],
                        [{name: '韶关', smoothness: 0.2}, {name: '广州', value: 2}],

                        [{name: '广州', smoothness: 0.2}, {name: '肇庆', value: 3}],
                        [{name: '肇庆', smoothness: 0.2}, {name: '广州', value: 3}],

                        [{name: '广州', smoothness: 0.2}, {name: '肇庆', value: 9}],
                        [{name: '肇庆', smoothness: 0.3}, {name: '广州', value: 9}],


                        [{name: '广州', smoothness: 0.1}, {name: '清远', value: 10}],
                        [{name: '清远', smoothness: 0.1}, {name: '广州', value: 10}],

                        [{name: '广州', smoothness: 0.1}, {name: '深圳', value: 8}],
                        [{name: '深圳', smoothness: 0.1}, {name: '广州', value: 8}],

                        [{name: '广州', smoothness: 0.1}, {name: '雅加达', value: 5}],
                        [{name: '雅加达', smoothness: 0.1}, {name: '库塔', value: 5}],

                        [{name: '库塔', smoothness: 0.1}, {name: '毛梅雷', value: 5}],

                        [{name: '毛梅雷', smoothness: 0.1}, {name: 'Moni', value: 5}],

                        [{name: 'Moni', smoothness: 0.1}, {name: 'Ende', value: 5}],

                        [{name: 'Ende', smoothness: 0.1}, {name: '拉布安芭蕉', value: 5}],

                        [{name: '拉布安芭蕉', smoothness: 0.1}, {name: '库塔', value: 6}],
                        [{name: '库塔', smoothness: 0.1}, {name: '雅加达', value: 6}],


                        [{name: '雅加达', smoothness: 0.1}, {name: '广州', value: 6}],

                        [{name: '广州', smoothness: 0.1}, {name: '盘锦', value: 1}],
                        [{name: '盘锦', smoothness: 0.1}, {name: '广州', value: 2}],


                        [{name: '广州', smoothness: 0.1}, {name: '桂林', value: 5}],
                        [{name: '桂林', smoothness: 0.1}, {name: '广州', value: 5}],
                        [{name: '广州', smoothness: 0.1}, {name: '福州', value: 7}],
                        [{name: '福州', smoothness: 0.1}, {name: '广州', value: 8}],
                        [{name: '福州', smoothness: 0.1}, {name: '厦门', value: 8}],
                        [{name: '厦门', smoothness: 0.1}, {name: '福州', value: 8}],

                        [{name: '福州', smoothness: 0.1}, {name: '南昌', value: 8}],
                        [{name: '南昌', smoothness: 0.1}, {name: '福州', value: 8}],

                        [{name: '广州', smoothness: 0.1}, {name: '武汉', value: 10}],
                        [{name: '武汉', smoothness: 0.1}, {name: '昆明', value: 10}],

                        [{name: '昆明', smoothness: 0.1}, {name: '西双版纳', value: 10}],
                        [{name: '西双版纳', smoothness: 0.1}, {name: '昆明', value: 10}],

                        [{name: '昆明', smoothness: 0.1}, {name: '肇庆', value: 10}],
                        [{name: '肇庆', smoothness: 0.2}, {name: '佛山', value: 10}],
                        [{name: '佛山', smoothness: 0.3}, {name: '广州', value: 10}],
                        [{name: '广州', smoothness: 0.1}, {name: '乌鲁木齐', value: 10}]
                    ]
                }
            },  {
                name: '2016',
                type: 'map',
                roam: true,
                hoverable: false,
                mapType: 'china',
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 0.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                markLine: {
                    smooth: true,
                    effect: {
                        show: true,
                        scaleSize: 1,
                        period: 30,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            label: {
                                show: false
                            },
                            lineStyle: {
                                type: 'solid',
                                shadowBlur: 10
                            }
                        }
                    },
                    data: [

                        [{name: '广州', smoothness: 0.1}, {name: '西双版纳', value: 10}],

                        [{name: '佛山', smoothness: 0.3}, {name: '乌鲁木齐', value: 10}],
                        [{name: '广州', smoothness: 0.1}, {name: '乌鲁木齐', value: 10}]
                    ]
                }
            }
        ]
    };

    function MyTrace() {
        // dom
        this._domClassName;
        this._view;
    }

    MyTrace.prototype = {

        constructor: MyTrace,

        init: function (view, domClassName, data) {
            this._domClassName = domClassName;
            this._view = view;
            this.initMyTraceData(data);
            this.initEchart();
            return this;
        },

        initMyTraceData: function (data) {
            defaultOption.series[0].geoCoord = data.data;
        },


        //backgroundColor
        initEchart: function () {
            this.echartObj = echarts.init(this._view.$("." + this._domClassName).get(0));
            console.log(defaultOption);

            this.echartObj.setOption(defaultOption);
            
        },

        newInstance:function(){
            return new MyTrace();
        },

    }
    return new MyTrace();
});
