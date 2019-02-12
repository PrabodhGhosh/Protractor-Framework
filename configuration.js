var basePath = __dirname;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['Regression/ShopItem.js'],
		capabilities: {
			'browserName': 'chrome'
		},
		
		jasmineNodeOpts: {
		    showColors: true, // Use colors in the command line report.
		  },
		
		  //Regression suite
		  
		  suites:
			  {
			  
			  Regression:['Regression/ShopItem.js','Regression/SubmitFormWithDataSet.js']
			  },


		onPrepare : function()
		{
			browser.driver.manage().window().maximize(); //Maximize the window

			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots' //Generate HTML Report
					})
			);


			global.requirePageObjects = function (relativePath) {
				return require(basePath + '/PageObjects/' + relativePath + '.js'); // Access multi level page objects
			};

			global.requireHelper = function (relativePath) {
				return require(basePath + '/Helper/' + relativePath + '.js'); // Access multi level helper utilities
			};

			global.requireData = function (relativePath) {
				return require(basePath + '/DataSource/' + relativePath + '.js'); // Access multi level data source
				
				// This is on a new branch!
				
				// Creating PR
			};
		}
};