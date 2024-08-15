const carbook = document.querySelector('.carbook')
const hideText = document.querySelector('.hide-text')


const Carsdata = [
    {
        name:'Audi',
        image:"0ecfa62b-image-1118.png",
        title:'4 seated car for you',
        price:'$229',
    },

    {
        name:'BMW',
        image:"0ecfa62b-image-1118.png",
        title:'4 seated car for you',
        price:'$229',
    },

    {
        name:'Mercedes',
        image:"377adaa0-image-118.png",
        title:'4 seated car for you',
        price:'$229',
    },

    {
        name:'Hyundai',
        image:"636fe4e0-image-18.png",
        title:'4 seated car for you',
        price:'$229',
    },
    {
        name:'Kia',
        image:"636fe4e0-image-18.png",
        title:'4 seated car for you',
        price:'$229',

    },
    {
        name:'Nissan',
        image:"636fe4e0-image-18.png",
        title:'4 seated car for you',
        price:'$229',
    }
    
]

    Carsdata.forEach((data)=>{
        const newdiv = document.createElement("div")
        newdiv.classList.add="Card"
        carbook.appendChild(newdiv);
        newdiv.innerHTML = `
<div class="car-card">
    <img src="${data.image}" alt="Car Image" class="car-image">
    <div class="car-info">
        <div class="rating">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <h3 class="car-name">${data.name}</h3>
        <p class="car-description">${data.title}</p>
        <span class="price">${data.price}<span id="day">/Day</span>
    </div>
     <button class="book-button">Book now</button>
</div      
        `

    })



    // Frequency card js//
    
const infobox = document.querySelector('.info-box');

function showanswer1(){
 
    const question1 = document.getElementById("question1");
    const answer1 = document.getElementById("answer1")
    const downarrow1 = document.getElementById("down-arrow1");
    const rightarrow1 = document.getElementById("right-arrow1");

   rightarrow1.addEventListener('click',()=>{
     answer1.style.display = 'block';
     rightarrow1.style.display = 'none';
     downarrow1.style.display = 'block';
     question1.style.borderBottom = 'none';
     infobox.style.height = '131px';
   });


   downarrow1.addEventListener('click',()=>{
    answer1.style.display = 'none';
    rightarrow1.style.display = 'block';
    downarrow1.style.display = 'none';
    infobox.style.height = '80px';  
   })

};




function showanswer2(){
    const infobox2 = document.getElementById("info-box2");
    const question2 = document.getElementById("question2");
    const answer2 = document.getElementById("answer2")
    const downarrow2 = document.getElementById("down-arrow2");
    const rightarrow2 = document.getElementById("right-arrow2");

   rightarrow2.addEventListener('click',()=>{
     answer2.style.display = 'block';
     rightarrow2.style.display = 'none';
     downarrow2.style.display = 'block';
     question2.style.borderBottom = 'none';
     infobox2.style.height = '131px';
   });


   downarrow2.addEventListener('click',()=>{
    answer2.style.display = 'none';
    rightarrow2.style.display = 'block';
    downarrow2.style.display = 'none';
    infobox2.style.height = '80px';  
   })

};


function showanswer3(){
    const infobox3 = document.getElementById("info-box3");
    const question3 = document.getElementById("question3");
    const answer3 = document.getElementById("answer3")
    const downarrow3 = document.getElementById("down-arrow3");
    const rightarrow3 = document.getElementById("right-arrow3");

   rightarrow3.addEventListener('click',()=>{
     answer3.style.display = 'block';
     rightarrow3.style.display = 'none';
     downarrow3.style.display = 'block';
     question3.style.borderBottom = 'none';
     infobox3.style.height = '131px';
   });


   downarrow3.addEventListener('click',()=>{
    answer3.style.display = 'none';
    rightarrow3.style.display = 'block';
    downarrow3.style.display = 'none';
    infobox3.style.height = '80px';  
   })

};

function showanswer4(){
    const infobox4 = document.getElementById("info-box4");
    const question4 = document.getElementById("question4");
    const answer4 = document.getElementById("answer4")
    const downarrow4 = document.getElementById("down-arrow4");
    const rightarrow4 = document.getElementById("right-arrow4");

   rightarrow4.addEventListener('click',()=>{
     answer4.style.display = 'block';
     rightarrow4.style.display = 'none';
     downarrow4.style.display = 'block';
     question4.style.borderBottom = 'none';
     infobox4.style.height = '131px';
   });


   downarrow4.addEventListener('click',()=>{
    answer4.style.display = 'none';
    rightarrow4.style.display = 'block';
    downarrow4.style.display = 'none';
    infobox4.style.height = '80px';  
   })

};





const menuList = document.querySelector('.links');
menuList.style.maxHeight = '0px';


function showmenu(){
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '300px';
        menuList.style.transition = 'all 0.5s';
        
    }
    else{
        menuList.style.maxHeight = '0px';
        menuList.style.transition = 'all 0.5s';
    }
};


const submitbtn = document.getElementById("submit-btn");
const hiddentext = document.querySelector('.hide-text');


submitbtn.addEventListener('click',()=>{
    hiddentext.style.display = 'block';
})




