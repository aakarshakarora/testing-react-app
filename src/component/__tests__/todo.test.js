import {render, screen, cleanup} from "@testing-library/react";
import Todo from "../todo";


test('Should Render todo component', () => {
    const todo = {
        id: 1,
        title: 'study',
        status: true
    };
    render(<Todo todo={todo}/>)
    const toDoElement = screen.getByTestId('todo-1');
    expect(toDoElement).toBeInTheDocument();

})
test('Should Have Text "Testing', () => {
    const todo = {
        id: 2,
        title: 'play',
        status: true
    };
    render(<Todo todo={todo}/>)
    const toDoElement = screen.getByTestId('todo-2');
    expect(toDoElement).toBeInTheDocument();
    expect(toDoElement).toHaveTextContent("play");
})
