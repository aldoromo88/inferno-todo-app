import { observable, decorate } from 'mobx';
import _ from 'lodash';

class Store {
	@observable todos = [];

	id = 1;
	addTodo (title) {
		this.todos.push({
			id: this.id++,
			title,
			completed: false
		});
	}

	toggleComplete(id){
		const todo = _.find(this.todos,{id});
		if(!todo){
			return;
		}
		todo.completed = !todo.completed;
	}



	cleanCompleted(){
		_.remove(this.todos,{completed:true});
	}

}

const store = new Store();

store.addTodo('Sample 1');
store.addTodo('Sample 2');
store.addTodo('Sample 3');

export default store;
