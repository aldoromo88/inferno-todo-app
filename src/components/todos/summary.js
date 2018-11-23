import { Component } from 'inferno';
import { observer } from "inferno-mobx";
import store from 'store';
import _ from 'lodash';

@observer class TodoSummary extends Component {
	render() {

		const total = store.todos.length;
		const summary = _.countBy(store.todos, 'completed');

		return (
			<div class='todo-summary'>
				<span><b> {total} </b> todos</span>
				<span><b> {summary.true || 0} </b> completed</span>
				<span><b> {summary.false || 0} </b> pending</span>
			</div>
		);
	}
};

export default TodoSummary;
