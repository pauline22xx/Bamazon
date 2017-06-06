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
		queryProduct(result);
	});
}

var continueShopping = function() {
	inquirer.prompt([{
		type: 'confirm',
		name: 'action',
		message: 'continue shopping'
	}]).then(function(res) {
		if (!res.action) {
			connection.end();
			console.log('Thank you - come again');
			return;
		}else if (res.action) {
			start();
		}
		});
	}
}

var displayProducts = function() {
	var t = new Table();

	connection.query('SELECT * FROM products', function(error, results, fields) {
		if (err) throw err;

		results.forEach(function(product) {
			t.cell('Product Id', product.item_id);
			t.cell('Product Name', product.product_name);
			t.cell('Pricem USD', product.price, Table.number(2));
			t.newRow();
		});
		console.log('\n' + t.toString());
	});
	start();
}

var queryProduct = function(request) {
	var productId = "'" + request.itemID + "'";
	var sql = 'SELECT * FROM products WHERE item_id = ' + productId;
}


exports.start = start;





