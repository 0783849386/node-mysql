const  express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 


var connection = mysql.createConnection({
  host: 'http://sql12.freemysqlhosting.net',
  user: 'sql12391516',
  password: 'jTDiLRyEKn',
  database: 'sql12391516'
});

connection.connect(function(err){
	if(err) throw err;
	else {

		console.log('MySQL Connected...');
app.get("/", function(req, res){
	res.redirect("/showStudent");
});
app.get("/showStudent", function(req, res){
	connection.query('Select * from sinhvien', function(err, result){
		if(err) throw err;
		res.render("display", {
			sinhvien: result
		});
	});
});
app.get("/sinhvien", function(req, res){
	connection.query('Select * from sinhvien', function(err, result){
		if(err) throw err;
		res.render("display", {
			sinhvien: result
		});
	});
});
app.get("/show", function(req, res){
	connection.query('Select * from sinhvien', function(err, result){
		if(err) throw err;
		res.render("display", {
			sinhvien: result
		});
	});
});
app.get("/createStudent", function(req, res){
		//if(err) throw err;
		res.render('create');
	});
// var sql = "insert into sinhvien values ('123','Shu Chang', 'kl')";
app.post("/createStudent", function(req, res){
	var sql = "INSERT INTO sinhvien (fullname, age, address) VALUES ('"+ req.body.fullname +"', '"+ req.body.age +"', '"+ req.body.address +"')";
	//console.log(sql);
	connection.query(sql, function(err, result){
		//if(err) throw err;
		console.log('1 record inserted');
	});
	res.redirect("/showStudent");
});

//Delete 1 sinh vien
app.delete('/sinhvien/:id', function(req, res){
	var sql = 'delete from sinhvien where id = ?';
	connection.query(sql,[req.params.id], function(err,rows, fileds){
		if(err) throw err;
	});
});
//update sinhvien
app.post('/update', function(req, res){
	var id = req.body.id;
	var fullname = req.body.fullname;
	var age = req.body.age;
	var address = req.body.address;
	//console.log(id);
	var sql = "update sinhvien set fullname = ?, age = ?, address = ? where id = ?";
	connection.query(sql,[fullname, age, address, id], function(err,rows, fileds){
		if(err) throw err;
	});
	res.redirect("/showStudent");
});
app.get("/demo", function(req, res){
	if(err) throw err;
	res.sendfile("demo.html");
});
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server is running on port " + port);
});

	}
});

