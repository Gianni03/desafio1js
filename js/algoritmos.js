let edad = parseInt(prompt('Bienvenido, por favor ingrese su edad'));

if (edad <= 13){
    console.error( 'Eres muy pequeño para ingresar')
} else if (edad > 13 && edad <= 18){
    console.log('Debes ingresar con supervisión de un adulto. Giño Giño')
} else if (edad > 18 && edad <= 99){
    console.log('Bienvenido, Ya puedes jugar al principe de persia on line')
} else {
    console.warn('Cudadito Wazowsky!!! eso no es correcto')
}


let horas = parseInt(prompt('Cuantas horas quieres jugar?'))

for (let i = horas ; i < 24; i++) {
    console.log('ok, ya jugaste demasiado')
    
}



