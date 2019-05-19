function insertar(num){
    document.form.textview.value = document.form.textview.value+num
}

function igual(){
    var exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(exp)
    }
}

function limpiar(){
    document.form.textview.value = ""
}

function borrar(){
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1)
}