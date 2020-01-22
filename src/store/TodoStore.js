import {observable, action} from 'mobx';
import TodoModel from './TodoModel';

class TodoStore{
    @observable todos = []
    @observable todosLength = 0
    
    lastID = 0

    @action 
    addTodoItem(title){
        this.todos.push( new TodoModel( title, false , this.lastID++, this ) )
        this.countAllTodos()
    }

    @action 
    removeTodoItem(id){
        var x = this.todos.find(x => x.id === id)
        var x1 = this.todos.indexOf(x)
        this.todos.splice(x1,1)
        this.countAllTodos()
    }

    @action
    countAllTodos(){
        let c = this.todos.filter ( com => !com.completed)
        this.todosLength = c.length
    }



}

const store = new TodoStore()
export default store