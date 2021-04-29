let get_Data = function()
{
    var sentencia = 'SELECT "NOMBRE", "APELLIDO", "CURP", "CLAVEELCTOR" FROM "PQG82494"."VOTANTES";'
    return sentencia
}

let setData = function(nombre, apellido, curp, clave_elector, estado, municipio)
{
    var sentencia = 'INSERT INTO  "PQG82494"."VOTANTES" '
    +  '("NOMBRE","APELLIDO","CURP","CLAVEELCTOR", "ESTADO", "MUNICIPIO") VALUES('
    + "'" + nombre + "','" + apellido + "','" + curp + "','" + clave_elector + "', '"+ estado + "', '" + municipio + "');" 
    return sentencia
}

let getData = function(curp)
{
    var sentencia = 'SELECT "NOMBRE", "APELLIDO", "CURP", "CLAVEELCTOR", "ESTADO", "MUNICIPIO" FROM "PQG82494"."VOTANTES" WHERE "CURP" = '
    + "'" + curp + "'"
    return sentencia
}

module.exports =
{
    getData,
    setData,
}
