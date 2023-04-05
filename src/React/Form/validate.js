const regexNum = /^([0-9])*$/;
const regexUrl = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;

const validate = (inputs) => {
    
    let errors = {};
     
    if(!inputs.name){
        errors.name = 'La receta requiere un nombre'
    }
    if(inputs.name.length < 2){
        errors.name ='El nombre debe ser de mas de 2 caracteres'
    }
    if(inputs.name.length > 50){
        errors.name ='El nombre no puede superar los 50 caracteres'
    }
    if(!inputs.summary){
        errors.summary='Debes agregar una descripción de la receta'
    }
    if(inputs.summary.length > 1200){
        errors.name ='El nombre no puede superar los 1200 caracteres'
    }
    if(!regexNum.test(inputs.healthScore)){ 
        errors.healthScore = 'El nivel de comida saludable debe ser un número'
    }
    if(inputs.healthScore > 100 || inputs.healthScore < 1){
        errors.healthScore = 'El valor debe ser entre 1 y 100'
    }
    if(!inputs.healthScore){
        errors.healthScore = 'El nivel de comida saludable requiere un valor'
    }
    if(!inputs.image){
        errors.image = 'Introducir link de imágen'
    }
    if(!regexUrl.test(inputs.image)){
        errors.image = 'La imágen debe ser un link'
    }
    return errors
}

export default validate;

