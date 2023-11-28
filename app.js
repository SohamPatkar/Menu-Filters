const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Meat Steak",
    category: "Dinner",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//intialisation
const sectioncenter = document.querySelector(".section-center");

//displaying items on loading the window
window.addEventListener("DOMContentLoaded", function(){
  GetItems(menu);
  getButtons();
});

function getButtons(){
  let categories = menu.reduce(function(values, currentarray){
    if(!values.includes(currentarray.category)){
      values.push(currentarray.category);
    }
    return values;
  }, ["all"]);
  
  const btn = document.querySelector(".btn-container");

  let category = categories.map(function(categorybtn){
    return `<button class="filter-btn" data-id="${categorybtn}">${categorybtn}</button>`;
  })
  category = category.join("");
  btn.innerHTML = category;

  //calling the filter buttons
  getButtonFunctionality();
}

//filter button functionality
function getButtonFunctionality(){
  const btnfilters = document.querySelectorAll(".filter-btn");
  
  //buttons for filter
  btnfilters.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      //dataset usage
      let categoryType = e.currentTarget.dataset.id;
      if(categoryType == "all"){
        GetItems(menu);
        return;
      }
      let menuCategory = menu.filter(function(item){
        if(categoryType == item.category){
          return item;
        }
      });
      GetItems(menuCategory);
    });
  });
}

//displaying all the items
function GetItems(menuitem){
  let displayMenu = menuitem.map(function(item){
    return `<article class="menu-item">
              <img src="${item.img}" alt="menuitem" srcset="" class="photo">
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectioncenter.innerHTML = displayMenu;
}