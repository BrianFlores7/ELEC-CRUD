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

const express = require('express')
const bodyParser = require('body-parser')
const Port = process.env.PORT || 3000
const app = express()
app.use(bodyParser.json())


ibmdb.open(connStr, function (err,conn) {
  if (err) return console.log(err);

  app.get('/Partidos/:id', (req, res) =>{
    var crud =  require('./crudPartido')
    var {id} = req.params;
    conn.query(crud.get_partido(`${id}`), (err, result) =>{
      if(err) throw console.log(err);
      if (result.length > 0)
      {
        res.json(result);
      }
      else
      {
        res.send('No hay resultados')
      }
    })
  })
  app.get('/Usuarios/:user', (req, res) =>{
    var crud =  require('./crudUsuarios')
    var {user} = req.params;
    conn.query(crud.get_user(`${user}`), (err, result) =>{
      if(err) throw console.log(err);
      if (result.length > 0)
      {
        res.json(result);
      }
      else
      {
        res.send('No hay resultados')
      }
    })
  })
  app.get('/Votantes/:curp', (req, res) =>{
    var crud =  require('./crudVotantes')
    var {curp} = req.params;
    conn.query(crud.getData(`${curp}`), (err, result) =>{
      if(err) throw console.log(err);
      if (result.length > 0)
      {
        res.json(result);
      }
      else
      {
        res.send('No hay resultados')
      }
    })
  })

  

    // app.post('/add/Partidos', (req, res) =>{

    //   var sql = 'INSERT INTO PQG82494.PARTIDOS ("ID_PARTIDO","CORREO") VALUES (?)'
      
    //   const partiObject = {
    //     id_partido: req.body.id_partido,
    //     correo: req.body.correo
    //   }
      
    //   conn.query(sql, partiObject, err =>{
    //     if (err) throw err;
    //     res.send(partiObject)
    //   })
    // })
  // })
});


app.listen(Port, ()=> console.log(`Server running on port ${Port}`))