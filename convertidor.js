
function unidad(numero){  
    let variantes = {
        1: "UNO",
        2: "DOS",
        3: "TRES",
        4: "CUATRO",
        5: "CINCO",
        6: "SEIS",
        7: "SIETE",
        8: "OCHO",
        9: "NUEVE"
    }
    return variantes[numero];

}

function decena10(numero){
    let variantes = {
        10 : "DIES",
        11: "ONCE",
        12: "DOCE",
        13: "TRECE",
        14: "CATORCE",
        15: "QUINCE",
        16: "DIECISEIS",
        17: "DIECISIETE",
        18: "DIECIOCHO",
        19: "DIECINUEVE"
    }
    return variantes[numero]

}

function decena20(numero){
    let variantes = {
        20: "VEINTE",
        21: "VEINTIÚN",
        22: "VEINTIDOS",
        23: "VEINTITRES",
        24: "VEINTICUATRO",
        25: "VEINTICINCO",
        26: "VEINTISEIS",
        27: "VEINTISIETE",
        28: "VEINTIOCHO",
        29: "VEINTINUEVE"
    }
    return variantes[numero]

}

function decena(numero){  

    let variantes = {                
        3: "TREINTA",
        4: "CUARENTA",
        5: "CINCUENTA",
        6: "SESENTA",
        7: "SETENTA",
        8: "OCHENTA",
        9: "NOVENTA",
    }
    return variantes[numero]


}

function centena(numero){
    let variantes = {
        1: "CIEN",
        2: "DOSCIENTOS",
        3: "TRESCIENTOS",
        4: "CUATROCIENTOS",
        5: "QUINIENTOS",
        6: "SEISCIENTOS",
        7: "SETECIENTOS",
        8: "OCHOCIENTOS",
        9: "NOVECIENTOS",
    }
    return variantes[numero]

}

function millar(numero){
    let variantes = {
        1: "MIL",
        2: this.unidad(numero)+" MIL",
        3: this.unidad(numero)+" MIL",
        4: this.unidad(numero)+" MIL",
        5: this.unidad(numero)+" MIL",
        6: this.unidad(numero)+" MIL",
        7: this.unidad(numero)+" MIL",
        8: this.unidad(numero)+" MIL",
        9: this.unidad(numero)+" MIL",
    }
    return variantes[numero]
}

function millon(numero){
    let variantes = {
        1: "UN MILLON",
        2: this.unidad(numero)+" MILLONES",
        3: this.unidad(numero)+" MILLONES",
        4: this.unidad(numero)+" MILLONES",
        5: this.unidad(numero)+" MILLONES",
        6: this.unidad(numero)+" MILLONES",
        7: this.unidad(numero)+" MILLONES",
        8: this.unidad(numero)+" MILLONES",
        9: this.unidad(numero)+" MILLONES",
    }
    return variantes[numero]
}

function getNumeroBase(numero, divisor){
    let division = numero / divisor;
    let entero = division.toString().split(".")[0]
    return entero;
}

function convertidor(numero){

    let numeroSep = numero.toString().split(".");
    let entero = numeroSep[0].split("");
    let decimal;
    if(numeroSep.length==1){
        decimal = ["0",]
    }else{
        decimal = numeroSep[1].split("");
    }

    let cadena="";

    if(entero.length>7){
        return undefined; // SOPORTA VALORES HASTA EL MILLON (1MILLON - 9MILLONES)
    }

    // NUMERO ENTEROS A LETRAS /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

    // 1 000 000
    if(entero.length==7){
        if(entero[0]!=0){
            cadena = cadena + this.millon(entero[0]) + ' '
        }
        entero.splice(0, 1);
    }
    // 100 000
    if(entero.length==6){
        if(entero[0]!=0){
            cadena = cadena + this.centena(entero[0]) + ' '
        }
        entero.splice(0, 1);
    }
    // 10 000
    if(entero.length==5){
        // 10 000 (SOLO 10K)
        if(entero[0]!=0 && entero[0]==1){
            cadena = cadena + this.decena10(entero[0]+entero[1]) + ' MIL ';
            entero.splice(1, 1);
            entero.splice(0, 1); 
        }
        // 10 000 (SOLO 20K)
        else if(entero[0]!=0 && entero[0]==2){
            cadena = cadena + this.decena20(entero[0]+entero[1]) + ' MIL ';
            entero.splice(1, 1);
            entero.splice(0, 1); 
        }
        // GENERAL
        else{//} if(entero[0]!=0){
            cadena = cadena + this.decena(entero[0]) + ' '
            entero.splice(0, 1); 
        }
    }
    // 1 000
    if(entero.length==4){
        if(entero[0]!=0){
            cadena = cadena + this.millar(entero[0]) + ' ';
        }
        entero.splice(0, 1); 
    }
    // 100
    if(entero.length==3){
        if(entero[0]!=0){
            cadena = cadena + this.centena(entero[0]) + ' ';
        }
        entero.splice(0, 1); 
    }
    // 10 (SOLO 10)
    if(entero.length==2 && entero[0]==1){
        cadena = cadena + this.decena10(entero[0]+entero[1]);
    }
    // 10 (SOLO 20)
    else if(entero.length==2 && entero[0]==2){
        cadena = cadena + this.decena20(entero[0]+entero[1]);
    }
    // 10
    else{

        if(entero.length==2){
            if(entero[0]!=0){
                cadena = cadena + this.decena(entero[0]); 
            }
            entero.splice(0, 1); 
            if(entero[0]!=0){
                cadena = cadena + " Y ";
            }

        }
        // MIL
        if(entero.length==1){
            if(entero[0]!=0){
                cadena = cadena + this.unidad(entero[0]);
            }
            
        }
    }

    // NUMERO DECIMALES A LETRAS /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
    if(decimal.length==1){
        cadena = `${cadena} CON ${decimal[0]}0/100`;
    }else{
        cadena = `${cadena} CON ${decimal[0]}${decimal[1]}/100`;

    }

    return cadena;

}
