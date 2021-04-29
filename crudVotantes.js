let get_Data = function()
{
    var sentencia = 'SELECT "NOMBRE", "APELLIDO", "CURP", "CLAVEELECTOR" FROM "PQG82494"."VOTANTES";'
    return sentencia
}

let setData = function(nombre, apellido, curp, clave_elector)
{
    var sentencia = 'INSERT INTO  "PQG82494"."VOTANTES" '
    +  '("NOMBRE","APELLIDO","CURP","CLAVEELECTOR") VALUES('
    + "'" + nombre + "','" + apellido + "','" + curp + "','" + clave_elector + "');" 
    return sentencia
}

let getData = function(curp)
{
    var sentencia = 'SELECT "NOMBRE", "APELLIDO", "CURP", "CLAVEELCTOR" FROM "PQG82494"."VOTANTES" WHERE "CURP" = '
    + "'" + curp + "'"
    return sentencia
}

module.exports =
{
    getData,
    setData,
}
