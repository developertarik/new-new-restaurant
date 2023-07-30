import about from "./about.js";
import contact from "./contact.js";
import chicken from "./chicken.png";
import contactImg from "./contact.png";
import aboutImg from "./about.png";

function component() {
    const element = document.createElement("div");
    const topNav = document.createElement("div");
    const para = document.createElement("p");
  
     const main = document.createElement("a");
    const contactA = document.createElement("a");
    const aboutA = document.createElement("a");
  
  
    //box
    const boxContainer = document.createElement("div");
    const box1 = document.createElement("div");
    const box2 = document.createElement("div");
    const box3 = document.createElement("div");
  
    main.innerText = "Main";
    aboutA.innerText = "About";
  
    contactA.innerText = "Contact";
    para.innerText = "Main";
    para.style.textAlign = "center";
    
    const header = document.createElement("h1");
    header.innerText = "Chicken Kebab";
    //box
    boxContainer.style.display = "flex";
    boxContainer.style.flexDirection = "column";
    boxContainer.style.gap = "50px";
    boxContainer.style.background = "white";
    boxContainer.style.padding = "30px";
    boxContainer.style.textAlign = "center";
    boxContainer.style.fontStyle = "italic";
    //box1
    box1.style.width = "300px";
    box1.style.height = "200px";
    box1.style.background = "purple";
    box1.style.color = "white";
    box1.innerText ="Chicken Kebab";
    //box2
    box2.style.width = "300px";
    box2.style.height = "200px";
    box2.style.background = "purple";
    box2.style.color = "white";
    box2.innerText ="Delicious Food";
  
    //box3
    box3.style.width = "300px";
    box3.style.height = "200px";
    box3.style.background = "purple";
    box3.style.color = "white";
    box3.innerText ="Sweet";
  
    //Element Style
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.margin = "auto";
    element.style.backgroundColor = "orange";
    
    //Img
    const MyImg = new Image(500, 300);
    const aboutImg2 = new Image(500,300);
    const contactImg2 = new Image(500,300);
    MyImg.src = chicken;
    aboutImg2.src = aboutImg;
    contactImg2.src = contactImg;
    
    //button
   
    contactA.addEventListener("click",()=>contact)
    aboutA.addEventListener("click",()=>about)
    main.addEventListener("click", () => {
      MyImg.src = chicken;
   
      header.innerText = "Chicken Kebab";
      box1.innerText ="Chicken Kebab";
      box2.innerText ="Delicious Food";
      box3.innerText ="Sweet";
    });
    //top navs
    topNav.style.backgroundColor = "black";
    topNav.style.padding = "20px";
    topNav.style.color = "white";
    topNav.style.display = "flex";
    topNav.style.flexDirection = "row";
    topNav.style.gap = "50px";
    topNav.appendChild(main);
    topNav.appendChild(aboutA);
    topNav.appendChild(contactA);
  
    //box container
    //element append childs
    boxContainer.appendChild(box1);
    boxContainer.appendChild(box2);
    boxContainer.appendChild(box3);
  
    element.appendChild(topNav);
    element.appendChild(header);
    element.appendChild(MyImg);
    element.appendChild(para);
    element.appendChild(boxContainer);
  
    return element;
  }
  document.body.appendChild(component());
