let list = document.getElementById("list");
let idGenerator1 = 0;
let idGenerator2 = 0;
function add(){
    let input = document.getElementById("text");
    if(input.value !== ""){
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.className = "col-md-11";
        idGenerator1++;
        col1.id = idGenerator1;
        col1.onclick = end;
        let col2 = document.createElement("td");
        col2.className = "col-md-1";
        idGenerator2--;
        col2.id = idGenerator2;
        col2.onclick = remove;
        let node = document.createTextNode(input.value[0].toUpperCase() + input.value.slice(1,input.value.length));
        let x = document.createTextNode("✖");
        col1.appendChild(node);
        col2.appendChild(x);
        row.appendChild(col1);
        row.appendChild(col2);
        list.parentNode.appendChild(row);
        input.value = "";
    }
        
}
function end(){
    if(document.getElementById(this.id).style.textDecoration !== "line-through"){
        document.getElementById(this.id).style = "text-decoration: line-through; background-color: #707070; color:white";
    }
    else document.getElementById(this.id).style = "text-decoration: none; background-color: #dedede; color:dedede";
    
}
function remove(){
    mistake = document.getElementById(this.id);
    mistake.parentElement.remove(mistake.parentElement);
}
