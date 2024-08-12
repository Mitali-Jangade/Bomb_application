// How to add timers in javascript : 
// There are 2 types of timers in javascript 
// 1] setTimeout  2]setInterval

// 1} for giving alerts and notification for only one time
// let timeoutId = setTimeout( ()=>{

//     console.log("time is running");   //this will execute once after 4 sec
    

// },4000)

// clearTimeout(timeoutId);     // it will clear the time  means no execution


// 2] setInterval : execute after every interval which we will provide

// let id = setInterval(()=>{

//     console.log("Hello Mitali!!!!");

// },1000)

//  clearTimeout(id);

// ==================================================================================================================

let inputTxtEl = document.getElementById("inputTxt");
let bombImgEl = document.getElementById("bombImg");
let bombTimerEl = document.getElementById("bombTimer");

let counter = 10;   // counter initize from 10

let intervlID = setInterval(()=>{

    counter = counter-1;       // counter means timer will decrease
    bombTimerEl.textContent = counter;

    if(counter === 0)
        {
            clearInterval(intervlID); 
            bombImgEl.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_50PkYqWz6sW5eSN0HLissVsZGU4lfFEA6g&s";
        }

},1000)

function changeImg(event)
{
    if(event.target.value === "defuse" && event.key ==="Enter" && counter>0)
    {
        clearInterval(intervlID);    // sab condition tru hone ke bad hum timer ko rok denge
        bombImgEl.src ="https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4=";
    }
    else if(event.target.value !== "defuse" && event.key ==="Enter")
    {
        clearInterval(intervlID); 
        bombImgEl.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_50PkYqWz6sW5eSN0HLissVsZGU4lfFEA6g&s";
       
    }
    
    

    
}



inputTxtEl.addEventListener("keyup",changeImg); //to read the input value
