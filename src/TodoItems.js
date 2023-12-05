import React from "react";

// class TodoItems extends Component {
// 	constructor(props) {
// 		super(props);
// 		// this.createTasks = this.createTasks.bind(this);
// 	}
// 	createTasks = (item) => {
// 		return (
// 			<div className="listItem">
// 				<li key={item.key}>{item.text}</li>
// 				<button onClick={() => this.props.delete(item.key)}>Delete</button>
// 			</div>
// 		)
// 	}

// 	render() {
// 		var todoEntries = this.props.entries;
// 		var listItems = todoEntries.map(this.createTasks);
// 		console.log('20==', listItems);
// 		return (
// 			<ul className="theList">
// 				{listItems}
// 			</ul>
// 		);
// 	}
// };

// export default TodoItems;


// writing functional component 

// import React, { Component } from "react";

const  NewTodoItems = ({Itementries, deleteItem}) =>  {
	 const createTasks = (item) => {
		return (
			<div className="listItem" key={item.key}>
				<li>{item.text}</li>
				<button onClick={() => deleteItem(item.key)}>Delete</button>
			</div>
		)
	}
		var listItems = Itementries.map((item) => createTasks(item));
		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
};

export default NewTodoItems;