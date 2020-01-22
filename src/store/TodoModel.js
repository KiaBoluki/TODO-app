import {observable , action} from 'mobx'

export default class TodoModel {
    @observable title
    @observable completed
    id 
    store

    constructor(title, completed , id, store) {
        
        this.completed = completed
        this.store = store
        this.title = title
        this.id = id
    }
    

    @action 
    toggle(){
        this.completed = !this.completed
    }
}
 