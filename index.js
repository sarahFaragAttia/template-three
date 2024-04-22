let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let email = document.querySelector('.email');
let span = document.querySelector('.contactus');
let inp = document.querySelector('.inp');
let icon = document.querySelector('.exclamation');
let msg = document.createElement("div");

    

function validation() {
   
    let inputValue = email.value;
    if (pattern.test(inputValue) == true) {
      
    } else {
        inp.append(msg);
icon.style.cssText="display:block;";       
 inp.style.cssText= ' border: 3px solid  hsl(0, 94%, 66%); background-color:  hsl(0, 94%, 66%); border-radius:3px;';
        msg.innerHTML = "Whoops, make sure it's an email";
        msg.classList.add("msg");
        msg.style.cssText = 'display: block;text-align: left; padding-left: 10px; width: 100%; padding-top:5px; padding-bottom:10px;';

        } 

};

span.addEventListener('click', validation); // remove the parentheses here
span.addEventListener('mouseover', function(){span.style.cssText=" background-color: white;color:hsl(0, 94%, 66%); border: 2px solid hsl(0, 94%, 66%); cursor : pointer;"}); // remove the parentheses here

span.addEventListener('mouseleave',function(){
    let message = document.querySelector('.msg');
    icon.style.cssText='display:none;';
    inp.style.cssText='';
    span.style.cssText='';
    console.log(message);
    message.remove();});
   

    let featTwo = document.querySelector('#speedy');
    let featThree = document.querySelector('#easy');
    let featOne = document.querySelector('#simple');
    let tabOne = document.querySelector('#tab-one');
    let tabTwo = document.querySelector('#tab-two');
    let tab = document.querySelector('#tab');
    let simple = document.querySelector('.sim');
    let speedy = document.querySelector('.speed');
    let easy= document.querySelector('.eas');
    


    function tabone(){tab.style.cssText='display:none;';
    tabOne.style.cssText='display:block;';
    tabTwo.style.cssText='display:none;'
    speedy.style.cssText=' border-bottom : 5px solid hsl(0, 94%, 66%); color: hsl(229, 31%, 21%);';
featTwo.style.cssText='color: hsl(229, 31%, 21%);';
simple.style.cssText='border-bottom:1px solid hsl(229, 8%, 60%);';
featOne.style.cssText='color: hsl(229, 8%, 60%);';
easy.style.cssText='border-bottom:1px solid hsl(229, 8%, 60%);';
featThree.style.cssText='color: hsl(229, 8%, 60%);';
   };
    
    featTwo.addEventListener('mouseover', tabone);

    function tabtwo(){
        tab.style.cssText='display:none;';
        tabOne.style.cssText='display:none;';

    tabTwo.style.cssText='display:block;';
    easy.style.cssText=' border-bottom : 5px solid hsl(0, 94%, 66%); color: hsl(229, 31%, 21%);';
featThree.style.cssText='color: hsl(229, 31%, 21%);';
simple.style.cssText='border-bottom:1px solid hsl(229, 8%, 60%);';

speedy.style.cssText= 'border-bottom:1px solid hsl(229, 8%, 60%);';
featTwo.style.cssText='color: hsl(229, 8%, 60%);';
   };
    
    featThree.addEventListener('mouseover', tabtwo);

    function tabBasic(){
        tabTwo.style.cssText='display:none;';
        tab.style.cssText='display:block;';
        tabOne.style.cssText='display:none;';
    simple.style.cssText=' border-bottom : 5px solid hsl(0, 94%, 66%); color: hsl(229, 31%, 21%);';
featOne.style.cssText='color: hsl(229, 31%, 21%);';
speedy.style.cssText='border-bottom:1px solid hsl(229, 8%, 60%);';
featTwo.style.cssText='color: hsl(229, 8%, 60%);';
featThree.style.cssText='color: hsl(229, 8%, 60%);';
easy.style.cssText='border-bottom:1px solid hsl(229, 8%, 60%);';
    };
    
    featOne.addEventListener('mouseover', tabBasic);





let iconHam = document.querySelector('#hamburger');
let nav=document.querySelector('#nav');
let body= document.querySelector('.body');
let navList=document.querySelector('#nav-list');
let feature=document.querySelector('#feature');
let featureLink=document.querySelector('.feature');
let price=document.querySelector('#price');
let priceLink=document.querySelector('.price');
let contact=document.querySelector('#contact');
let contactLink=document.querySelector('.contact');
let btn=document.querySelector('#log');
let btnLink=document.querySelector('.log');
let close=document.querySelector('.close');
let logo=document.querySelector('.logo');
let divList=document.querySelector('.list');
let btnOne=document.querySelector('.btn-one');
let divMob=document.querySelector('.mob-nav');
let mobNav=document.querySelector('#mob-nav');
let bookMark=document.querySelector('.bookmark');

 function list(){
  
    nav.style.cssText="   padding-right:35px;position: absolute; z-index: 2; opacity:.9; position:fixed;height:100%;width:100vw; color: white; background-color:  hsl(229, 31%, 21%);display:block; padding-bottom:30px; "
    navList.style.cssText="display:block; marging-top:10px;"
close.style.cssText="display:block;  "
// divList.style.csstext=" display:block;"
logo.style.cssText="display:flex; flex-direction:row; justify-content:space-between;"
// body.style.cssText=" align-items:center;position:absolute; z-index:-1;"
feature.style.cssText=" width:95%;margin:auto; border-bottom:1px solid white;border-top:1px solid white; padding-bottom:20px;padding-top:20px;"
featureLink.style.cssText="color:white; text-align:center;display:flex;justify-content:center"
price.style.cssText=" width:95%;margin:auto; border-bottom:1px solid white;border-top:1px solid white; padding-bottom:20px;padding-top:20px;"
priceLink.style.cssText="color:white; text-align:center;display:flex;justify-content:center"
contact.style.cssText=" width:95%;margin:auto; border-bottom:1px solid white;border-top:1px solid white; padding-bottom:20px;padding-top:20px;"
contactLink.style.cssText="color:white; text-align:center;display:flex;justify-content:center"

btnOne.style.cssText=" width:95%;margin:auto; padding-bottom:20px;margin-top:30px;padding-top:20px;background-color:transparent;border:2px solid white;display:flex; align-items:center;justify-content:center; "
btnLink.style.cssText="color:white;width:100%; text-align:center;display:flex;justify-content:center, "
divMob.style.cssText="display:block;"
mobNav.style.cssText="width:25%;margin:auto;justify-content: space-evenly;display: flex;flex-direction: row;justify-content: space-between;list-style:none;margin-top:150px;"
bookMark.style.cssText=" filter:grayscale(100%) invert(100%);"

 };

iconHam.addEventListener('mouseover',list)

