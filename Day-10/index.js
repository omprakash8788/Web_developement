

// document.querySelector('form').addEventListener('submit',myTodo)

// function myTodo(e){
//     e.preventDefault();

//     let taskName=document.querySelector('#task').value;
//     let taskPriority=document.querySelector('#priority').value;

//     // console.log(taskName, taskPriority);
//     displayTable(taskName, taskPriority)
// }


// function displayTable(taskName, taskPriority){
//     let row = document.createElement('tr')

//     let td1=document.createElement('td')
//     td1.innerText=taskName;

//     let td2=document.createElement('td')
//     td1.innerText=taskPriority;


//     let td3=document.createElement('td')
//     td1.innerText='Add a fav';


//     row.append(td1, td2, td3)

//     document.querySelector('tbody').append(row)

// }




document.querySelector('form').addEventListener('submit',myTodo)

function myTodo(e){
 e.preventDefault();
 
let taskName=document.querySelector("#task").value;
let taskPriority=document.querySelector("#priority").value;

// console.log(taskName, taskPriority);
displayTable(taskName, taskPriority)
}

function displayTable(taskName, taskPriority){
  let row = document.createElement('tr')
  let td1=document.createElement('td')
  td1.innerText=taskName

  let td2=document.createElement('td')
  td2.innerText=taskPriority

   let td3=document.createElement("td")
 td3.innerText="Add as fav"


 row.append(td1, td2, td3)

 document.querySelector('tbody').append(row)



}



