//function para que exiba os valores no visor
function botao(num){
  let visor = document.calcForm.visor.value;
  document.calcForm.visor.value = visor + num;
}

//function para realizar o calculo (=)
function calcule(){
  let visor = document.calcForm.visor.value;
  resultado = eval(visor);
  document.calcForm.visor.value = resultado
}

//function para apagar um em um
function apagar(){
  let visor = document.calcForm.visor.value;
  document.calcForm.visor.value = visor.substring(0, visor.length-1)
}

//function para apagar tudo
function limpar(){
  let visor = document.calcForm.visor.value;
  document.calcForm.visor.value = visor.substring(0, visor.length-999)
}




/*  */