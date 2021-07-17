const mychoiseContainer = document.querySelector('#mychoise-container');
const editBtn = document.querySelectorAll('.items-container-row div:nth-child(3) span');
const returnBtn = document.querySelectorAll('.items-container-row div:nth-child(1) button');
const deleteBtn = document.querySelectorAll('.delete-btn');
const editView = document.querySelectorAll('.edit-view');


function mainFunction(){
  // getItems();
   //showEditView();
}

let data = [
    {   
        id: 1, 
        erstellt_am: '10/2/2020', 
        Offen_biss: '23:00',
        src: '/src/imgs/main_food.jpg',
        items: [
            {
                id: 1,
                choices:[
                {id: 1, name: 'Pizza', src: '/src/imgs/food.jpg'},
                {id: 2, name: 'Hamburger', src: '/src/imgs/eggs.jpg'},
                {id: 3, name: 'Cheese', src: '/src/imgs/pizza.jpg'} 
                ]
            },
            {
                id: 2,
                choices:[
                {id: 4, name: 'Pizza', src: '/src/imgs/food.jpg'},
                {id: 5, name: 'Hamburger', src: '/src/imgs/eggs.jpg'},
                {id: 6, name: 'Cheese', src: '/src/imgs/pizza.jpg'} 
                ]
            },
            
        ],
    },
    {   
        id: 2, 
        date: '9/4/2021', 
        time: '23:00',
        src: '/src/imgs/main_food.jpg',
        items: [
            {
                id: 3,
                choices:[
                {id: 7, name: 'Pizza', src: '/src/imgs/pizza.jpg'},
                {id: 8, name: 'Hamburger', src: '/src/imgs/eggs.jpg'},
                {id: 9, name: 'Cheese', src: '/src/imgs/ood.jpg'} 
                ]
            },
            {
                id: 4,
                choices:[
                {id: 10, name: 'Pizza', src: '/src/imgs/food.jpg'},
                {id: 11, name: 'Hamburger', src: '/src/imgs/eggs.jpg'},
                {id: 12, name: 'Cheese', src: '/src/imgs/pizza.jpg'} 
                ]
            }, 
        ],
    },
];

function getItems(){
    data.forEach(element => {
        mychoiseContainer.innerHTML += `

        <div class="mychoise-element" style="background-image: url(${element.src})" type="button" data-bs-toggle="collapse" data-bs-target="#collapseid${element.id}" aria-expanded="false" aria-controls="collapseEx${element.id}">
            <div class="layer">
                <div class="row h-100 inner-container">
                    <div class="menu row">
                       <span >....</span>
                    </div>                
                    <div class="row time-date align-items-end">
                        <div class="col">Offen biss: ${element.Offen_biss}</div>
                        <div class="col">erstellt am $element${element.erstellt_am}</div>
                    </div> 
                </div>   
            </div>  
        </div>

        <div class="collapse mb-4 mychoice-item-content" id="collapseid${element.id}">
            <div class="card card-body">
                <div class="up-arrow-container">
                    <button class="up-arrow-btn" data-bs-toggle="collapse" data-bs-target="#collapse1id">
                        <img src="src/ics/upload.png" alt="">
                    </button>
                </div>
            </div>
        </div>
        `;
        element.items.forEach(el => {
            document.querySelector( '#collapseid'+element.id+ ' .card').innerHTML +=
                `<div class="items-container">
                <div class="row items-container-row">
                    <div class="col-2"><button><img src="src/ics/return.png" alt=""></button></div>
                    <div class="col-8"><span>Erstell am ${element.erstellt_am}</span> </div>
                    <div class="col-2">
                        <span class="bold" id="items-collapse1id-itemsid">....</span>
                    </div>
                </div>
                <div class="items">
                        <div class="row items-row px-5">
                            <div class="col px-1">
                                <div class="">
                                    <button class="delete-btn"><img src="/src/ics/cancel.png" alt=""></button>
                                    <img src="${el.src}" alt="${el.name}">
                                </div>
                            </div>       
                         </div>  
                 </div>  
                <div id="edit-view-collapseid-itemid" class="edit-view"></div>
             </div>`
             el.choices.forEach(ell => {
              document.querySelector('#collapseid'+element.id+ ' .card .items-row').innerHTML +=
              `
              <div class="col px-1">
                    <div class="">
                        <button class="delete-btn"><img src="/src/ics/cancel.png" alt=""></button>
                        <img src="${ell.src}" alt="${ell.name}">
                    </div>
                </div> 
              `
             })
        });


    });
}

//getItems();

function showEditView(){
    editBtn.forEach(el => {
        editView.forEach(ell => {
          ell.classList.remove('height');
        })
        editView.forEach(ed => {
            ed.addEventListener('click', function(){
                console.log('ss')
                ed.classList.add('height')
            });
        })
    })
}


returnBtn.forEach(el => {
    el.addEventListener('click', function(){
        console.log('rrr')
    });
})

deleteBtn.forEach(el => {
    el.addEventListener('click', function(){
        console.log('rrr')
    });
})


mainFunction();