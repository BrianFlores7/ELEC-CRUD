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
