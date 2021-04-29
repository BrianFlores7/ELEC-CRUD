

//obtenemos todos los datos de la tabla USURIOS
let getData = function()
{
    var sentencia = 'SELECT * FROM pqg82494.usuarios'
    return sentencia
} 

//guardamos los datos del usuario   
let setData = function (user, correo)
{
    var sentencia = 'INSERT INTO PQG82494.USUARIOS ("USUARIO","CORREO") VALUES(' + "'" + user + "', " + "'" + correo + "'" + ");"
    return sentencia
}

//Obtenemos todos los usuarios
let getUsers = function() 
{
    var sentencia = 'SELECT "USER" FROM PQG82494.USUARIOS'
    return sentencia
}


//puede servir en caso de que olvide su contraseña (esto regresa todos los valores con los cual coincida user)
let get_user = function(user)
{
    var sentencia = 'SELECT "USER","CORREO" FROM PQG82494.USUARIOS where "USER" = '+ "'" + user + "'"
    return sentencia
}


module.exports =
{
    getData,
    setData,
    getUsers,
    get_user,
}