import './ListTodo.css'
import { TodoListProp } from "../typeTodo"


interface Props {
    todoList: TodoListProp[];
    onDelete: (param: TodoListProp) => void
}

export const ListTodo = ({ todoList, onDelete, onEditTodo}: any) => {
    return (
        <div className="ant-list-items">
            <div className="ant-list-item">
                <div className="ant-list-item-meta">
                    {todoList.map((item: any, index: number) => {
                        return (
                            <div className="ant-list-item-meta-content" key={index}>
                                <div className="text-content">
                                    <h4 className="ant-list-item-meta-title">
                                        {item.name}
                                    </h4>
                                    <div className="ant-list-item-meta-description">
                                        {item.content}
                                    </div>
                                </div>
                                <ul className="ant-list-item-action">
                                    <li>
                                        <button onClick={() => onEditTodo(item)} style={{backgroundColor:'#4CAF50', border:'0 solid', borderRadius:'5px'}} className="btn-edit">Edit</button>
                                    </li>
                                    <li>
                                        <button style={{backgroundColor:'#f44336', border:'0 solid', borderRadius:'5px'}} className="btn-remove" onClick={() => onDelete(item.id)}>Remove</button>
                                    </li>
                                </ul>
                            </div>

                        );
                    })}

                </div>
            </div>
        </div>
    );
};