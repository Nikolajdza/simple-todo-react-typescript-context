import React, { useContext } from 'react';

import { TodoItem } from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todo-context';

export const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					id={item.id}
					onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};
