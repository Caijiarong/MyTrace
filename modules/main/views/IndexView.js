/**
 * To show icon and item name, containing the tooltips!
 * Created by liu.wang on 10/29/17.
 */
define([
    'text!modules/main/templates/IndexTmpl.html',
    'css!modules/main/styles/IndexStl.css',
    'modules/main/echart/echart.js'
], function (IndexViewTpl, IndexCss, myTrace) {

    var currentObj;
    var myChart;

    return fish.View.extend({
        el: '#demo',
        template: fish.compile(IndexViewTpl),

        initialize: function () {
            myChart = myTrace.newInstance();
            currentObj = this;
        },

        afterRender: function () {

            fish.ajax({
                url: 'http://127.0.0.1/~liuw53/phalphp/PhalApi/Public/wApi/?service=City.allCities',
                type: 'GET'
            }).then(function (data) {
                console.log(data);
                currentObj.$(".mainEC").height($(window).height());
                myChart.init(currentObj,"mainEC", data);
            }).fail(function (data) {
                console.log(data);
            });

            return this;
        }


    });

});

