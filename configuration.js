exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['SubmitForm.js'],
  capabilities: {
	  'browserName': 'chrome'
	}
};