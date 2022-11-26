import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const TodoList = () => {
    const {todos, loading, page, limit, error} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useAction();
    const pages: Array<number> = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    if (error) {
        return (
            <h1>Error: {error}</h1>
        )
    }

    return (
        <div>
            {todos.map(todo =>
                <div
                    key={todo.id}
                >
                    {todo.id} - {todo.title}
                </div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(num =>
                    <div
                        onClick={() => setTodoPage(num)}
                        style={{border: num === page ? '2px solid green' : '1px solid lightgray', padding: '10px'}}
                        key={num}
                    >
                        {num}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;