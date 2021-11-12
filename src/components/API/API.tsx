import { Client } from './Client';
import { TodoListProp } from '../typeTodo'
const API = {
    getAll() {
        const url = `/todos`;
        return Client.get(url);
    },
    
    add(todo : TodoListProp) {
        const url = `/todos`;
        return Client.post(url, todo);
    },
    delete(id: number){
        const url = `/todos/${id}`;
        return Client.delete(url);
    }

}
export default API