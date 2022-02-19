import classes from './TodoItem.module.css';

export const TodoItem: React.FC<{
	text: string;
	id: string;
	onRemoveTodo: () => void;
}> = (props) => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
};
