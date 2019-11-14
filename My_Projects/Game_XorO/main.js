let arr = [];
let q = 0;
function albert(a){
    setTimeout(() => {
        alert(a);
    })
}
function point(clickedBtnID){
    let btn = document.getElementById(clickedBtnID);
    if(q%2 === 0){
        btn.innerHTML = "X";
        btn.style = "color: red";
        q++;
    }
    else {
        btn.innerHTML = "O";
        btn.style = "color: green";
        q++;
    }
    arr[+clickedBtnID[clickedBtnID.length-1]-1] = btn.innerHTML;
    console.log(arr);
    if(arr[0] === arr[1] && arr[0]=== arr[2] && arr[0] !== undefined){
        albert(`WIN Player ${arr[0]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(arr[0] === arr[3] && arr[0]=== arr[6] && arr[0] !== undefined){
        return albert(`WIN Player ${arr[0]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(arr[2] === arr[5] && arr[2]=== arr[8] && arr[2] !== undefined){
        albert(`WIN Player ${arr[2]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(arr[6] === arr[7] && arr[6]=== arr[8] && arr[6] !== undefined){
        albert(`WIN Player ${arr[6]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(arr[1] === arr[4] && arr[1]=== arr[7] && arr[1] !== undefined){
        albert(`WIN Player ${arr[1]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(arr[3] === arr[4] && arr[3]=== arr[5] && arr[3] !== undefined){
        albert(`WIN Player ${arr[3]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(arr[0] === arr[4] && arr[0]=== arr[8] && arr[0] !== undefined){
        albert(`WIN Player ${arr[0]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(arr[2] === arr[4] && arr[2]=== arr[6] && arr[2] !== undefined){
        albert(`WIN Player ${arr[2]}`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
    else if(q===9){
        albert(`Drow`);
        setTimeout(function(){window.location.reload(true)},1000);
    }
}