console.log("hola mundo");
const math={};//objeto

function suma(x1,x2){
    return x1 + x2;
    }
    function resta(x1,x2){
       return x1-x2 ;
    }
    function multiplica(x1,x2){
        return x1*x2;
    }
    function divide(x1,x2){
    if(x2==0){
    console.log("no se puede dividir");
    }else{
    return x1/x2;
    }
    }
    
/*
exports.suma=suma;
exports.resta=resta;
exports.multiplica=multiplica;
exports.divide=divide; */

math.suma=suma;//agrego propiedades al objeto
math.resta=resta;
math.multiplica=multiplica;
math.divide=divide;

module.exports=math;
//module puede exportar funciones
function hello(name){
console.log("hola",name);
}
//module.exports=hello;