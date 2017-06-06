var prompt = require('prompt');
var mysql = require('mysql');
var Table = require('easy-table');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bamazon_db'
});

connectin.connect(function(err) {
	if (err) throw err;
	start();
});

var start = function() {
	inquirer.prompt([{
		type: 'list',
		name: 'action',
		message: 'Welcome to Bamazon',
		choices: ['Products', 'Purchase Product']
	}]).then(function(res) {
		switch(res.action){
		case 'Products'
			products();
			break;
		case 'Purchases':
			promptPurchases();
			break;
		}
	});
}

var promptPurchases = function() {
	console.log('please select purchasing item and quantity');
	prompt.start();
	prompt.get(['itemID', 'quantity'], function(err, result) {

	});
}





