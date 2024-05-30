#! usr/bin/env code
import inquirer from "inquirer";
let todos : string[] = [];

let condition = true ;
while(condition ){



  let ans = await inquirer.prompt([
    {
      name : 'todo',
      type: 'list',
      message : 'Select one of the options ',
      choices : ['Add' , 'Update', 'View' , 'Delete' , 'Exit'],

    }
  ])
 if(ans.todo === "Add"){
  let addTodo = await inquirer.prompt([
      {
        name: 'todo',
        type : 'input',
        message : 'What would you add in your todo list?',
        validate: function(input){
          if(input.trim() == ''){
            console.log("Please enter a non empty item");
          }
          return true;
        }

      }
    ])
    if(addTodo.todo.trim() !== '' ){
    todos.push(addTodo.todo);
    todos.forEach(todo => console.log(todo));
    }

  }
 if(ans.todo === "Update"){
    let updateTodo = await inquirer.prompt([
    {
      name : "todo",
      type : "list",
      message : "Update items in the list :",
      choices : todos.map(item => item)
    }

  ])
   let addTodo =await inquirer.prompt([
    {
      name : "todo",
      type : "input",
      message : "What would you add in your todo list ?",
      validate: function(input){
        if(input.trim() == ''){
          console.log("Please enter a non empty item");
        }
        return true;
      }
    }
   ])

   if(addTodo.todo.trim() !== ''){
   let newTodo :string[] = todos.filter(val=>val !== updateTodo.todo);
   todos = [...newTodo,addTodo.todo];
   todos.forEach(todo => console.log(todo));
   }
  }
  if(ans.todo === "View"){
    todos.forEach(todo =>console.log(todo));

  }
 if(ans.todo === "Delete"){
  
    let deleteTodo = await inquirer.prompt([
    {
      name : "todo",
      type : "list",
      message : "Select items to delete :",
      choices : todos.map(item => item)
    }
   ])
    let newTodo : string[] = todos.filter(val=>val !== deleteTodo.todo);
    todos = [...newTodo];
    todos.forEach(todo=> console.log(todo));
  }
   
  
 if(ans.todo === "Exit"){
    console.log("Exiting program...");
    condition = false;
    
   }

  


 
}
