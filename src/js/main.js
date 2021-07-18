const mychoiseContainer = document.querySelector('#mychoise-container');
const editBtn = document.querySelectorAll('.items-container-row div:nth-child(3) span');
const returnBtn = document.querySelectorAll('.items-container-row div:nth-child(1) button');
const deleteBtn = document.querySelectorAll('.delete-btn');
const editView = document.querySelectorAll('.edit-view');

let removedItem = '';

function mainF(){

}


function runEditView(id, delBtnId){
  hideUndoBtn();
  hideDeleteBtns();
  let editV = document.querySelector('#'+id);
  let deleteBtns = document.querySelectorAll('.'+delBtnId);
  let title = document.querySelector('#' +id + ' span');
  

  if(editV.classList.contains('height')){
    editV.classList.remove('height');
    deleteBtns.forEach(el => el.classList.remove('show-x'));
    title.classList.add('d-none');
    hideUndoBtn();
  }else{
    hideEditViews('.edit-view');
    //document.querySelectorAll('.edit-view span').forEach(el => el.classList.contains('d-none')? '': el.classList.add('d-none'))
    hideTitle();
    editV.classList.add('height');
    showDeleteBtn(deleteBtns)
    title.classList.remove('d-none');
  }

}

function deleteBtnFunction(v, f){

  document.querySelector('.'+f).classList.remove('d-none');
  removedItem = v.parentElement.parentElement;
  $('#'+v.getAttribute('id')).parent().parent().removeClass('move-down')
  $('#'+v.getAttribute('id')).parent().parent().addClass('move-top')
  setTimeout(function(){
    v.parentElement.parentElement.remove(); 
  }, 300)


}


function undoBtnFunction(v, id){

  // console.log(document.querySelector('#'+id+ ' .items-row'))
  // console.log(removedItem)
  $(removedItem).appendTo('#'+id+ ' .items-row').show('slow'); 
  $(removedItem).removeClass('move-top');
  $(removedItem).addClass('move-down');
  
  setTimeout(function(){
    document.querySelectorAll('.items-row .col').forEach(el => el.classList.remove('move-down'))
  },300)

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

function hideEditViews(view){
  document.querySelectorAll(view).forEach(el => {
      el.classList.remove('height');
  })
}

function hideTitle(){
  document.querySelectorAll('.edit-view span').forEach(el => 
    el.classList.contains('d-none')? '': el.classList.add('d-none'))
}

function hideDeleteBtns(){
  document.querySelectorAll('.delete-btn').forEach(el => {
    el.classList.remove('show-x')
  })
}


   
mainF()


//------------------------------------------------------------------------

