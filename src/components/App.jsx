import { Component } from 'inferno';
import { observer } from 'inferno-mobx';
import TodoList from './todos/list';
import TodoSummary from './todos/summary';
import TodoNew from './todos/new';
import styles from './App.scss';
import nyan from '../assets/nyan.gif';

import store from 'store';

@observer class App extends Component {

	render() {
		return (
			<div id="App">
				<h1>Todo List</h1>
				<TodoList/>
				<TodoNew maxSize={5}/>
				<TodoSummary/>
				<img src={nyan}/>
			</div>
		);
	}
};

export default App;
