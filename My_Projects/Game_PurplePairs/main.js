let obj = {};
let openObj = {};
let arr = [];
let seconds = 0;
let minutes = 0;
let hours = 0;
let t;
let timer = document.getElementById("timer");
function winToolbar(){
    setTimeout(function(){alert("Congratulations:You WIN")})
}

function add(){
    seconds++;
    if(seconds === 60){
        minutes++;
        seconds = 0;
        if(minutes === 60){
            hours++;
            minutes = 0;
        }
    }
    timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
                        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" 
                        + (seconds > 9 ? seconds : "0" + seconds);
    time();
}


function time(){
   t = setTimeout(add,1000);
}
for(i=0;i<16;i++){
    let num = Math.floor(Math.random()*Math.floor(8));
    let count = 0;
    for(let key in obj){
        if(obj[key] === num){
            count++;
        }
    }
    if(count === 0 || count ===1){
        obj[i] = num;
    }
    else {
        i--;
    }
}

console.log(obj);
let q = 0;
let num = -1;
let start = 0;
function paint(elementId){
    start++;
    if(start === 1){
        timer.textContent = "00:00:00";
        time();
    }
    let btn = document.getElementById(elementId);
    btn.innerHTML = obj[+elementId-1];
    btn.style = "background: darkgray;";
    let bool = true;
    for(let key in openObj){
        if(key === '+' + elementId){
            console.log('+' + elementId);
            bool = false;
        }
    }
    if(bool){
        openObj['+' + elementId] = obj[+elementId-1];
        q++;
    }
    
    
    if(q === 3){
        for(let key in openObj){
            num++;
            arr[num] = openObj[key];
        }
        if(arr[0] !== arr[1]){
            let count = 0;
            for(let key in openObj){
                document.getElementById(key.substr(1)).innerHTML = "";
                document.getElementById(key.substr(1)).style = "background-image: radial-gradient(#f7f7f7,#dedddc )";
                delete openObj[key];
                count++;
                if(count === 2){
                    break;
                }
            }
        }
        else {
            let count = 0;
            for(let key in openObj){
                delete openObj[key];
                count++;
                if(count === 2){
                    break;
                }
            }
        }
        num = -1;
        q = 1;
    }
    let checkWin;
    for(checkWin=1; checkWin<=16; checkWin++){
        console.log(document.getElementById(checkWin).innerHTML);
        if(document.getElementById(checkWin).innerHTML === ""){
            break;
        }
    }
    if(checkWin === 17){
        clearTimeout(t);
        winToolbar();
        setTimeout(function(){window.location.reload(true)},3000);
    }
    console.log(openObj);
}