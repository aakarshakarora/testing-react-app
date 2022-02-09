function toDo({todo}) {

    const {id, title, status} = todo
    const h1 = <h1>{title}</h1>
    const text = status ? <strike>{h1}</strike> : h1
    return <div data-testid={`todo-${id}`}>
        {text}
    </div>

}

export default toDo;