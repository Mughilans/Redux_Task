import React from 'react'
import './Task.scss'
import {
    EditOutlined,
    CheckOutlined,
    BellOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { addTask, addNewTask, deleteTask } from './Actions/Actions';
import { connect } from 'react-redux';
import { useState } from 'react';


const Task = (props) => {
    const { enableTaskForm, showForm, allTaskList, addNewTaskData, deleteTaskData } = props
    const [values, setValues] = useState({
        description: '',
        date: '',
        time: '',
        assignname: ''
    })
    const [showdelete, setShowdelete] = useState(false)
    const [showedit, setShowedit] = useState(true)
    const [taskId, setTaskId] = useState()

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowedit(true)
        addNewTaskData({
            newData: values,
            existingData: allTaskList
        })
    }

    const handleEdit = (items) => {
        enableTaskForm(true)
        setShowdelete(true)
        setShowedit(false)
        setValues({
            description: items.description,
            date: items.date,
            time: items.time,
            assignname: items.assignname
        })
        setTaskId(items.id)
    }

    const handleCancel = () => {
        enableTaskForm(false)
        setShowedit(true)
    }

    const handleAdd = () => {
        setValues({
            description: '',
            date: '',
            time: '',
            assignname: ''
        })
        enableTaskForm(true)
        setShowedit(false)
    }

    const handleDelete = (taskId) => {
        deleteTaskData(taskId)
        enableTaskForm(false)
        setShowedit(true)
    }

    return (
        <div>
            <div className="task-container">
                <span>Tasks {allTaskList.length}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            {showForm === false ? "" :
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label className='label'>Task Description</label>
                        <input
                            className='input'
                            type='text'
                            name='description'
                            placeholder='Follow Up'
                            value={values.description}
                            onChange={handleChange}
                        />

                        <div className='date-time'>
                            <div className='date'>
                                <label className='label'>Date</label>
                                <input
                                    className='input'
                                    type='date'
                                    name='date'
                                    value={values.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='date'>
                                <label className='label'>Time</label>
                                <input
                                    className='input'
                                    type='time'
                                    name='time'
                                    placeholder='Enter the card name'
                                    value={values.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <label className='label'>Assign User</label>
                        <input
                            className='input'
                            type='text'
                            name='assignname'
                            placeholder='User'
                            value={values.assignname}
                            onChange={handleChange}
                        />
                        <div className='button-container'>
                            {showdelete === true ?
                                <DeleteOutlined className='delete'
                                    onClick={() => handleDelete(taskId)}
                                /> : ""}

                            <button className='button1' onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className='button2' type='submit' >
                                Save
                            </button>
                        </div>
                    </div>
                </form>}

            {showedit === true ? allTaskList.map(items => (<div className="task-container">
                <span>{items.description}</span>
                <span>{items.date}</span>
                <EditOutlined onClick={() => handleEdit(items)} />
                <CheckOutlined />
                <BellOutlined />
            </div>)) : ""}

        </div>
    )
}

const mapStateToProps = state => ({
    showForm: state.taskAdd.showTaskForm,
    allTaskList: state.taskAdd.taskList
});

const mapDispatchToProps = dispatch => ({
    enableTaskForm: args => dispatch(addTask(args)),
    addNewTaskData: args => dispatch(addNewTask(args)),
    deleteTaskData: args => dispatch(deleteTask(args))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Task)