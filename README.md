# temp-mail-check
Node JS plugin to compare email addresses with domains that generate known `temporary` emails



##Installation

	npm i temp-mail-check


##Initialization

	const tempMailCheck = require('temp-mail-check'); 
	
	

##Exemples


### Test Email 

	tempMailCheck.checkEmail("jay@tickete.it") // TRUE
	tempMailCheck.checkEmail("jay@0-mail.com") // TRUE
		
		// should return true when the email is valid
		// should return false when the email is not valid
		
		
	
	
### Find Domain 

	tempMailCheck.findDomain("0-mail.com") // TRUE
	tempMailCheck.findDomain("tickete.it") // FALSE
		
		// should return TRUE when the domain is in source
		// should return FALSE when the domain is not in the source
		
		
### Get Source

	_tempEmailCheck.getSource() 
	// [ "getapet.net","0-mail.com", "027168.com", ... ]
	


##Test


	npm test
	
	