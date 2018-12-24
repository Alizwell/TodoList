import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from  './TodoList2';
import { Provider } from  'react-redux';
import store from './store2';

const app = (
	<Provider store={store}>
		<TodoList />
	</Provider>
);

ReactDOM.render( app, document.getElementById('root'));

