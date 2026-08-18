<!DOCTYPE html>
<html>
<head>
    <title>Dynamic DOM Example</title>
    <style>
        body{
            font-family: Arial;
            background:#f4f4f4;
            text-align:center;
            margin-top:30px;
        }

        h1{
            color:darkblue;
        }

        #container{
            width:400px;
            margin:auto;
            background:white;
            padding:20px;
            border-radius:10px;
            box-shadow:0 0 10px gray;
        }

        input{
            width:220px;
            padding:8px;
        }

        button{
            padding:8px 12px;
            margin:5px;
            cursor:pointer;
        }

        li{
            text-align:left;
            margin:10px;
            font-size:18px;
        }
    </style>
</head>

<body>

<div id="container">

<h1>Student List</h1>

<input type="text" id="name" placeholder="Enter Student Name">

<br><br>

<button id="addBtn">Add Student</button>

<button id="removeBtn">Remove Last</button>

<ul id="list"></ul>

</div>

<script>

let addButton=document.getElementById("addBtn");
let removeButton=document.getElementById("removeBtn");
let list=document.getElementById("list");


// Add Student

addButton.addEventListener("click",function(){

    let input=document.getElementById("name");

    if(input.value==""){
        alert("Enter Name");
        return;
    }

    let li=document.createElement("li");

    li.textContent=input.value;

    li.style.color="blue";

    list.appendChild(li);

    input.value="";

});


// Remove Last Student

removeButton.addEventListener("click",function(){

    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
    else{
        alert("No students available");
    }

});

</script>

</body>
</html>