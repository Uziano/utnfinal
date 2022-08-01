function init() {
    var imgs = document.querySelectorAll('#grabzone img');
    
    drop1 = document.getElementById('zone1');  
    drop2 = document.getElementById('zone2'); 
    drop3 = document.getElementById('zone3'); 

    for (var i=0; i < imgs.length; i++) {
        imgs[i].addEventListener('dragstart', arrastrado, false);
        imgs[i].addEventListener('dragend', finalizado, false);
    }

    //1
    drop1.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    
    drop1.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    
    drop1.addEventListener('drop', soltado, false);

    //2
    drop2.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
   
    drop2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    
    drop2.addEventListener('drop', soltado2, false);

    //3
    drop3.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    
    drop3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    
    drop3.addEventListener('drop', soltado3, false);

}

function arrastrado(e){
    element = e.target;
    e.dataTransfer.setData('Text', element.getAttribute('id'));
}
function finalizado(e){
    element = e.target;
    element.style.visibility='hidden';
} 

function soltado(e){
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if (id!="imagen4"){
        var src = document.getElementById(id).src;
    drop1.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    } else {
    drop1.innerHTML='la imagen no es admitida';
    }
}

function soltado2(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    drop2.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    drop2.innerHTML='la imagen no es admitida';
    }
}
function soltado3(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    drop3.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    drop3.innerHTML='la imagen no es admitida';
    }
}

function reset() {
    window.location.reload();
}

let resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', () => {
    reset()
})

init()

