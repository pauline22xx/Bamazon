var prompt = require('prompt');
var mysql = require('mysql');
var Table = require('easy-table');
var inquirer = require('inquirer');
var bamazonCustomer = requirer('./bamazonCustomer.js');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bamazon_db'
});

connection.connect(function(err) {
	if (err) throw err;
	inquirer.prompt([{
		type: 'list',
		name: 'user',
		message: 'LOG IN',
		choices: ['Customer', 'Manager']
	}]).then(function(res){
		swtich(res.user){
			case 'Customer':
				bamazonCustomer.start();
				break;
			case 'Manager';
				console.log('manager level');
				break;
		}
	});
});