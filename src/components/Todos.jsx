import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todoAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {todos.length === 0 && <p>No todos found</p>}
            {todos && (
                <section>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? 'Completed' : 'Not completed'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </div>
    );
};

export default Todos;
