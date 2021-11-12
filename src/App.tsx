import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { ListTodo } from './components/ListTodo'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoListProp } from "./components/typeTodo"
import API from "./components/API/API"
import 'antd/dist/antd.css'
import './App.css';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [todoList, setTodoList] = useState<TodoListProp[]>([
    ]);


    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    useEffect(() => {
        const getTodo = async () => {
            try {
                const { data: list } = await API.getAll();
                setTodoList(list)
            } catch (error) {
                console.log(error)
            }
        }
        getTodo();
    }, [])
    const handleDeleteTodo = async (id: number) => {
        try {
            await API.delete(id);
            const newProducts = todoList.filter(todo => todo.id !== id);
            setTodoList(newProducts);
        } catch (error) {
            console.log(error);
        }
    }
    const handleAddTodo = async (todo: TodoListProp) => {
        try {
            const { data } = await API.add(todo);
            setTodoList([...todoList, data]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="App">
            <h2>List todo</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New Todo
                </button>
            </div>
            <ListTodo todoList={todoList} onDelete={handleDeleteTodo} />
            <Modal title="Add Todo" visible={isModalVisible} footer={null} onCancel={handleCancel} >
                <AddTodoForm todoList={todoList} onAdd={handleAddTodo} onCancel={handleCancel} />
            </Modal>
        </div>
    );
}

export default App;
