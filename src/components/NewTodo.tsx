import { useRef, useContext } from 'react';

import classes from './NewTodo.module.css';
import { TodosContext } from './../store/todo-context';

export const NewTodo: React.FC = () => {
	const todoCtx = useContext(TodosContext);

	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			//throw an error
			return;
		}

		todoCtx.addTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">Todo text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};
