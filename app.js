console.log("starting password manager...");

var storage = require("node-persist");
storage.initSync();

function createAccount(account){
	var accounts = storage.getItemSync("accounts");

	if(typeof accounts === "undefined"){
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync("accounts", accounts);

	return account;
}

function getAccount(accountName){
	var accounts = storage.getItemSync("accounts");
	var matchedAccount;
	if(typeof accounts != "undefined"){
		accounts.forEach(function(account){
			if(account.name === accountName){
				matchedAccount = account;
			}
		});
	}
	return matchedAccount;
}

/*createAccount({
	name: 'Facebook',
	username: 'tiwari.vijay.k@gmail.com',
	password: 'password123!'
});*/

console.log(getAccount("Facebook"));