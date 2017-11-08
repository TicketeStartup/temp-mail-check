# temp-mail-check
Node JS plugin to compare email addresses with domains that generate known `temporary` emails

2534 Opensource Domains


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
	
	
	
##Contributions	

Temporary email providers frequently update domains, then to identify all temporary emails it is important to update the domain file (disposable-email-domains.json).
This is an opensource project so it's important to contribute!

To simplify the insertion of new domains I made a script to use : `__addDomains.js`

### Steps

 Add new domains with `__addDomains.js`
	
	node __addDomains.js  --list=newdomain1.com,newdomain2.com


This tool checks that the domains you are adding are not already present and updates the file only with new domains.

It is important to enter only valid domains that respect the regex: 

	^([\s\S])+\.+[a-z]{2,}$

After entering the domains make a commit and send a pullrequest.


Thanks for collaboration <3 


##Suggestions	

These are just some of the temporary email services to monitor : 


	https://temp-mail.org
	https://www.mohmal.com
	https://www.guerrillamail.com
	https://app.getnada.com
	https://tempail.com
	https://mytemp.email
	https://mailto.space
	https://10minutemail.com
	http://www.fakemailgenerator.com
	https://maildrop.cc
	https://www.hidemyass.com
	https://www.mailinator.com/