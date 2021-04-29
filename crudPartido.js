let set_partido = function(id_partido, correo)
{
    var sentencia = 'INSERT INTO PQG82494.PARTIDOS ("ID_PARTIDO","CORREO") VALUES( ' + "'" + id_partido + "', '" + correo + "');"
    return sentencia
}

let get_partido = function (id_partido)
{
    var sentencia = 'SELECT COUNT(id_partido) as votos FROM "PQG82494"."PARTIDOS" WHERE "ID_PARTIDO" = ' + "'" + id_partido + "'"  
    return sentencia
}

let get_all = function ()
{
    var sentencia = 'SELECT * FROM "PQG82494"."PARTIDOS"'
    return sentencia
}

module.exports =
{
    set_partido,
    get_partido,
    get_all,
    
}