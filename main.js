define(['modules/main/views/IndexView'], function(IndexView) {
    
	fish.View.configure({manage: true});

	// 这里配置一下语言，可以动态设置，真实的系统需要根据浏览器设置来获取语言然后设置给fish,默认语言是en
	fish.setLanguage('en');

	new IndexView().render();
});