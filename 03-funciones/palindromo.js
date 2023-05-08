const palindromo = (palabra) =>{
    //ana
    //oso 
    palabra = palabra.replace('','');
    palabra = palabra.toLowerCase();

    let invertida = palabra.split('').reverse().join('')
    if( palabra == invertida){
        return true;
    }else{
        return false;
    }
}

let palabra = prompt('Ingrese una palabra!!!');

let pa = palindromo(palabra);

if(pa){
    document.write('Es palindromo');
}else{
    document.write('No es palindromo')
}