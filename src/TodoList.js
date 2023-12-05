import React, { useRef, useState } from "react";
import NewTodoItems from "./TodoItems";

// class TodoList extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { items: [] };
// 		// this.addItem = this.addItem.bind(this);
// 		this.deleteItem = this.deleteItem.bind(this);
// 	}
// 	addItem = (e) => {
// 		if (this._inputElement.value !== "") {
// 			var newItem = {
// 				text: this._inputElement.value,
// 				key: Date.now()
// 			};

// 			this.setState((prevState) =>({ items: prevState.items.concat(newItem) }));
// 			this._inputElement.value = "";
// 		}
// 		e.preventDefault();
// 	}
// 	deleteItem(key) {
// 		var filteredItems = this.state.items.filter((item) => item.key !== key);

// 		this.setState({
// 			items: filteredItems
// 		});
// 	}
// 	render() {
// 		return (
// 			<div className="todoListMain">
// 				<div className="header">
// 					<form onSubmit={this.addItem}>
// 						<input ref={(a) => this._inputElement = a} placeholder="enter task">
// 						</input>
// 						<button type="submit">add</button>
// 					</form>
// 					<TodoItems entries={this.state.items} delete={this.deleteItem} />
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default TodoList; 

// writing functiona component 
const NewTodolist = () => {
	const [items, setItems] = useState([]);
	const divRef = useRef();
	const addItem = (e) => {
		if (divRef.current.value !== "") {
			var newItem = {
				text: divRef.current.value,
				key: Date.now()
			};
			setItems((prev) => [...prev, newItem])
			divRef.current.value = "";
		}
		e.preventDefault();
	}

	function deleteItem(key) {
		var filteredItems = items.filter((item) => item.key !== key);
		setItems(filteredItems);
	}
	return (
		<div className="todoListMain">
			<div className="header">
				<form onSubmit={(e) => addItem(e)}>
					<input ref={divRef} placeholder="enter task">
					</input>
					<button type="submit">Add</button>
				</form>
				<NewTodoItems Itementries={items} deleteItem={deleteItem} />
			</div>
		</div>
	);
}

export default NewTodolist;
