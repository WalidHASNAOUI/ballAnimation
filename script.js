// -- ge html element of soccer
let ball = document.querySelector("#ball");

//  -- add new listener to window -- 
window.addEventListener("mousemove", (event)=>{
    // --  get the browser window size --
    let winWdth = window.innerWidth;
    let winHth  = window.innerHeight;

    // -- get the position of mouse -- 
    let cx = event.clientX;
    let cy = event.clientY;

    // -- move the soccer --
    ball.style.left = (winWdth - cx - 25) + "px"; 
    ball.style.top = ((winHth - cy) - 25) + "px";
});

// -- add new listener to soocer div -- 
ball.addEventListener("mouseenter" , (event)=>{
    event.target.style.backgroundColor = "rgb(87, 227, 79)";
});

ball.addEventListener("mouseleave", (event)=>{
    event.target.style.backgroundColor = "";
});

ball.addEventListener("click" , (event)=>{
    // event.target.style.visibility = "hidden";
    event.target.style.visibility = "hidden";
});


