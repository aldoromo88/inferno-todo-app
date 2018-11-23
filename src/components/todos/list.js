import { Component } from 'inferno';
import { observer } from "inferno-mobx";
import { linkEvent } from 'inferno';
import store from 'store';


@observer class TodoList extends Component {
	toggleComplete(id){
		store.toggleComplete(id);
	}

	render() {
		return (
			<div>
				<ul>
				{store.todos.map(todo=>(
					<li>
					<input id={`todo-${todo.id}`} type='checkbox' checked={todo.completed} onChange={linkEvent(todo.id, this.toggleComplete)}/> <label for={`todo-${todo.id}`}>{todo.title}</label>
					</li>
				))}
				</ul>

				if(_.some(store.todos,'completed'))
					<button onClick={store.cleanCompleted}> Clear completed!</button>


			</div>

		);
	}
};

export default TodoList;
