export function Todos({todos}) {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div key={todo._id}>
                        <h1>{todo.title}</h1>
                        <h3>{todo.description}</h3>
                        <button>{todo.completed? "Done" : "Mark as Done"}</button>
                    </div>
                )
            })}
        </div>
    )
}