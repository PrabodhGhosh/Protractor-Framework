var basePath = __dirname;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Regression/SubmitFormWithDataSet.js'],
  capabilities: {
	  'browserName': 'chrome'
	},
	
	onPrepare : function()
	{
		browser.driver.manage().window().maximize();
		
		
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