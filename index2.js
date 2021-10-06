//modulos de node js
const os = require("os");
console.log(os.platform());
//reconoce sistema win 32
console.log(os.release());
// última version de la plataforma en la que se ejecuta 
console.log("free memory",os.freemem(),"bytes");
//memoria libre en bits
console.log("total memory",os.totalmem(),"bytes");
//memoria total  en bits console log concatena por comas

const fs=require("fs");
fs.writeFile("./texto.txt","linea uno",function(err){
if(err){
    console.log(err);
}else{
    console.log("archivo creado");
}
});
//crea texto y le inserto un mensaje pero la direccion en el mismo proyecto ,/
//cuando termina hace la función  ejecuta codigo ultima linea y luego archivo creado "codigo asincrono"
console.log("última linea de codigo");
fs.readFile("./texto.txt",function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});
//se cambia a string pues de lo contrario lee un archivo crudo

//modulo para crear servidores
//http consiste en recibir peticiones y dar respuesta

//-------
/*const http =require("http");
//requiere y responde

//para colores
const colors = require("colors");

const handleServer= function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>esto es un simple texto</h1>");
    res.end();
} 
const server= http.createServer(handleServer);
server.listen(3000,function(){
    console.log("server on port 3000".yellow);
});*/

//-------
/*se puede hacer de esta forma */
/**const http =require("http");
//requiere y responde 
http.createServer(function(req, resp){
// 200 da ok. la respuesta del servidor al navegador es correcta
//404 cuando la pagina no existe no found

    resp.writeHead(200,{"content-type":"text/html"})
   // resp.writeHead(404,{"content-type":"text/html"})    ----404 la pagina no existe por eso se muestra en rojo en la consola 
resp.write("<h1>Hola mundoss</h1>");
//resp.writeHead(200,{"content-type":"text/plano"})
//resp.write("esto es un simple texto");
//puerto
resp.end();
}).listen(3000); */
//control C y control C cancelamos la escucha en el localhost:3000

//npmjs.com  instalamos colors ---(npm install colors) en consola lo escribimos

//npm init me pide mas informacion del proyecto
//package.json da mas informacion
//en packge agregar "start":"node index2.js" al ejecutar el npm star en consola me lee el index2.js
//para ejecutar "desarrollo" digo npm run desarrollo

//express nodejs frameworks
const  express= require("express");
const colors=require("colors");
const server= express();
//=> para funciones
server.get("/",function(rep,res){
    res.send("<h1>hola mundo con express</h1>");
    res.end();
});
server.listen(3000,function(){
console.log("server on part 3000".red);
});