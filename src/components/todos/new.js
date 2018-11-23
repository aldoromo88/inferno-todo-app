import { Component } from 'inferno';
import { observer } from "inferno-mobx";
import store from 'store';


@observer class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {title: ''};
	}

	wtfThis(event) {
		console.log(`WTF is 'this' here?`,this);
		// this.setState({title: event.target.value});
	}

	handleChange(event) {
		this.setState({title: event.target.value});
	}

	addTodo(event){
		event.preventDefault();
		console.log(`WTF is 'this' here?`,this);

		const title = this.state.title.trim();
		if( !title){
			return;
		}

		store.addTodo(title);
		this.setState({title: ''});
	}

	render() {
		if (store.todos.length >= this.props.maxSize){
			return (<span>To many todos, complete and clean any!</span>)
		}
		return (
			<form onSubmit={this.addTodo.bind(this)}>
				<label>
					TODO: <input type='text' value={this.state.title} onInput={this.handleChange.bind(this)} />
				</label>
				<input type='submit' value='Add' />
			</form>

		);
	}

	// <label>
	// 	No Value, using arrow function: <input type='text' onInput={(event)=>this.handleChange(event)} />
	// </label>
	// <label>
	// 	Value, using arrow function: <input type='text' value={this.state.title} onInput={(event)=>this.wtfThis(event)} />
	// </label>
	//
	// <label>
	// 	No value, using function: <input type='text' onInput={this.wtfThis} />
	// </label>
	// <label>
	// 	Value, using function: <input type='text' value={this.state.title} onInput={this.wtfThis} />
	// </label>
	// <label>
	// 	Value, using function with bind: <input type='text' value={this.state.title} onInput={this.wtfThis.bind(this)} />
	// </label>
};

export default TodoList;
