function ToDo(){
  this.todo = [];
}

ToDo.prototype.addTodo= function(item){
  this.todo.push(item)
}
ToDo.prototype.getItems= function(){
  return this.todo
}

it('should delete an item', ()=>{
    let todo = new ToDo();
    let item = {
      id: 1,
      title: "get milk 1",
      complete: false
     }
     let item2 = {
      id: 2,
      title: "get milk 2",
      complete: false
     }
     todo.addTodo(item)
     todo.addTodo(item2)
    todo.delete(2)
    expect(todo.getItems()[todo.getItems().length-1].id).toBe(1);
  })