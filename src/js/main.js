const mychoiseContainer = document.querySelector('#mychoise-container');
const editBtn = document.querySelectorAll('.items-container-row div:nth-child(3) span');
const returnBtn = document.querySelectorAll('.items-container-row div:nth-child(1) button');
const deleteBtn = document.querySelectorAll('.delete-btn');
const editView = document.querySelectorAll('.edit-view');

let removedItem = '';

function mainF(){

}

function runEditView(id, delBtnId){
  let editV = document.querySelector('#'+id);
  let deleteBtns = document.querySelectorAll('.'+delBtnId);
  let title = document.querySelector('#' +id + ' span');
  

  if(editV.classList.contains('height')){
    editV.classList.remove('height');
    deleteBtns.forEach(el => el.classList.remove('show-x'));
    title.classList.add('d-none');
    hideUndoBtn();
  }else{
    hideEdirViews('.edit-view');
    editV.classList.add('height');
    showDeleteBtn(deleteBtns)
    title.classList.remove('d-none');
  }

}

function deleteBtnFunction(v, f){
    document.querySelector('.'+f).classList.remove('d-none');
    removedItem = v.parentElement.parentElement;
    v.parentElement.parentElement.classList.add('move-left')
    console.log(v.getAttribute('id'));
 //$('#'+v.getAttribute('id')).parent().parent().hide('slow', function(){ $('#'+v.getAttribute('id')).parent().parent().hide(); });


 //$('#'+v.getAttribute('id')).parent().parent().slideUp("normal", function() { $(this).remove(); } )
  // v.parentElement.parentElement.remove();  
  // setInterval(() => {
  //   $('#'+v.getAttribute('id')).parent().parent().slideUp("normal", function() { $(this).remove(); } )
  // }, 300);
  




             
}

function undoBtnFunction(v, id){
  // document.querySelector('#'+id+ ' .items-row').appendChild(removedItem);
    $(removedItem).appendTo('#'+id+ ' .items-row').show('slow');
 //$('#'+id+ ' .items-row').appendTo('#'+removedItem.getAttribute('id')).show('slow');
    removedItem = '';
    v.classList.add('d-none');
}
  
function hideUndoBtn(){
    removedItem = '';
    document.querySelectorAll('.undo').forEach(er => {
        er.classList.add('d-none');
    })
}

function showDeleteBtn(btn){
    btn.forEach(el => el.classList.add('show-x'));
}

function hideEdirViews(view){
  document.querySelectorAll(view).forEach(el => {
      el.classList.remove('height');
  })
}


   
mainF()