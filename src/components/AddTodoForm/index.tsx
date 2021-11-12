import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoListProp } from "../typeTodo"

interface Props {
    onCancel: (param: boolean) => void;
    todoList: TodoListProp[];
    onAdd: (param: TodoListProp) => void
}



export const AddTodoForm: React.FC<Props> = ({todoList, onAdd, onCancel }) => {

    const [inputName, setInputName] = useState("");
    const [inputContent, setInputContent] = useState("");


    const onHandleSubmit = (e: any) => {
        e.preventDefault();
        onAdd({ id: uuidv4(), name: inputName, content: inputContent });
        onCancel(true);
        setInputName("");
        setInputContent("");

    };
    const onHandleName = (e: any) => {
        setInputName(e.target.value);
    };
    const onHandleContent = (e: any) => {
        setInputContent(e.target.value);
    };
    


    return <div>
        <div className="field-input-group">
            <input placeholder="Name" type="text" className="ant-input" onChange={onHandleName}
                value={inputName} />
        </div>
        <div className="field-input-group">
            <input placeholder="Description" type="text" className="ant-input" onChange={onHandleContent}
                value={inputContent} />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary" onClick={onHandleSubmit}>
                Save
            </button>
            <button onClick={()=> onCancel(true)} className="ant-btn" style={{ marginLeft: 10 }} >
                Cancel
            </button>
        </div>
    </div>
};
export default AddTodoForm
