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

    app.post('/add/Partidos', (req, res) =>{
      var crud =  require('./crudPartido')
      const partiObject = {
        id_partido: req.body.id_partido,
        correo: req.body.correo
      };

      id_partido = partiObject.id_partido
      correo = partiObject.correo
     
      conn.query(crud.set_partido(id_partido, correo), err =>{
        if (err)
        {
          throw err
        };
        res.send("Creado")
      })
    })

    app.post('/add/Usuarios', (req, res) =>{
      var crud =  require('./crudUsuarios')
      const userObject = {
        user: req.body.user,
        correo: req.body.correo
      };

      user = userObject.user
      correo = userObject.correo
     
      conn.query(sql = crud.setData(user, correo), err =>{
        if (err)
        {
          console.log(sql)
          throw err
        };
        res.send("Creado")
      })
    })

    app.post('/add/Votantes', (req, res) =>{
      var crud =  require('./crudVotantes')
      const votantesObject = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        curp: req.body.curp,
        clave_elector: req.body.clave_elector,
        estado: req.body.estado,
        municipio: req.body.municipio,
      };

      nombre = votantesObject.nombre
      apellido = votantesObject.apellido,
      curp =  votantesObject.curp,
      clave_elector =  votantesObject.clave_elector,
      estado =  votantesObject.estado,
      municipio =  votantesObject.municipio,
  
      conn.query(sql = crud.setData(nombre, apellido, curp,clave_elector, estado, municipio), err =>{
        if (err)
        {
          console.log(sql)
          throw err
        };
        res.send("Creado")
      })
    })
})

app.listen(Port, ()=> console.log(`Server running on port ${Port}`))