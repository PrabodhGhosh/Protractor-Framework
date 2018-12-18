var basePath = __dirname;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['Regression/SubmitFormWithDataSet.js'],
		capabilities: {
			'browserName': 'chrome'
		},

		onPrepare : function()
		{
			browser.driver.manage().window().maximize();

			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);


			global.requirePageObjects = function (relativePath) {
				return require(basePath + '/PageObjects/' + relativePath + '.js');
			};

			global.requireHelper = function (relativePath) {
				return require(basePath + '/Helper/' + relativePath + '.js');
			};

			global.requireData = function (relativePath) {
				return require(basePath + '/DataSource/' + relativePath + '.js');
			};
		}
};