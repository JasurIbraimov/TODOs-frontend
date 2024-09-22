import "./Todo.css"

const Todo = () => {
    return (
        <div className="todo">
			<div className="todo__content">
				<h2>Learn React Native</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repudiandae dolorum facilis laborum...
				</p>
			</div>
			<div className="todo__actions">
				<button className="main-btn todo__btn">Done</button>
				<button className="main-btn todo__btn">Delete</button>
				<button className="main-btn todo__btn">Edit</button>
			</div>
        </div>
    );
};

export default Todo;
