var ibmdb = require('ibm_db');
var envJson = require('./.env.json')
var node_env = process.env.NODE_ENV || 'production';
var DATABASE = envJson[node_env].DATABASE;
var HOSTNAME = envJson[node_env].HOSTNAME;
var UID = envJson[node_env].UID;
var PWD = envJson[node_env].PWD;
var PORT = envJson[node_env].PORT;
var PROTOCOL = envJson[node_env].PROTOCOL;
var connStr = "DATABASE=" + DATABASE + ";HOSTNAME=" + HOSTNAME + 
";UID=" + UID + ";PWD="+ PWD + ";PORT=" + PORT +
  ";PROTOCOL=" + PROTOCOL + ";"

ibmdb.open(connStr, function (err,conn) {
  if (err) return console.log(err);
  
  conn.query("select * from pqg82494.usuarios", function (err, data) {
    if (err) console.log(err);
    else console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
});

ibmdb.open(connStr).then(
    conn => {
      conn.query("select * from pqg82494.usuarios").then(data => {
        console.log(data);
        conn.closeSync();
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err)
    }
);
