//getting all requires elemnts

const inputBox=document.querySelector(".inputField input");
const addBtn=document.querySelector(".inputField button");
const todoList=document.querySelector(".todoList");
const deleteAllBtn=document.querySelector(".footer button");

inputBox.onkeyup=()=>{
    let userData=inputBox.value;//getting user entered value
    if(userData.trim()!=0){//if user values are not only spaces
     addBtn.classList.add("active");//actives the add button
    }
    else{
        addBtn.classList.remove("active");//unactives the add button
    }
   
}
showTasks();


//if user click on the add button
addBtn.onclick=()=>{
    let userData=inputBox.value;//getting user entered value
    let getLocalStorage=localStorage.getItem("New Todo");//getting localstorage
    if(getLocalStorage==null){//if localStorage is null
          listArr=[];//creating blank array
    }
    else{
        listArr=JSON.parse(getLocalStorage);//transforming json string into js object
    }
    listArr.push(userData);//pushing or adding user data
    localStorage.setItem("New Todo",JSON.stringify(listArr));//transfroming js object into json string
    showTasks();//calling  showtasks function
    addBtn.classList.remove("active");//unactives the add button
}

//function to add task list inside ul

function showTasks()
{
    let getLocalStorage=localStorage.getItem("New Todo");//getting localstorage
    if(getLocalStorage==null){//if localStorage is null
        listArr=[];//creating blank array
  }
  else{
      listArr=JSON.parse(getLocalStorage);//transforming json string into js object
  }
  const pendingNumb=document.querySelector(".pendingNumb");
  pendingNumb.textContent=listArr.length;//passing the length value
  if(listArr.length>0)
  {
    deleteAllBtn.classList.add("active");
  }
  else{
    deleteAllBtn.classList.remove("active");

  }
  let newLiTag='';
  listArr.forEach((element,index)=>{
    newLiTag  += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span> </li>`;

  });
  todoList.innerHTML=newLiTag;
  inputBox.value="";//once task added leave the input field blank



}

//delete task function

function deleteTask(index)
{
    let getLocalStorage=localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    //after remove the li again update the localstorage
    localStorage.setItem("New Todo",JSON.stringify(listArr));//transfroming js object into json string
    showTasks();//calling  showtasks function
}

//delete all tasks  fucntion

deleteAllBtn.onclick=()=>{
    listArr=[];//empty an array
    localStorage.setItem("New Todo",JSON.stringify(listArr));//transfroming js object into json string
    showTasks();//calling  showtasks function
    
}