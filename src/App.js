import logo from './logo.svg';
import './App.css';
import Todo from "./component/todo";

function App() {

    const lst = [
        {
            id: 1,
            title: 'study',
            status: true
        },
        {
            id: 2,
            title: 'play',
            status: false
        }
    ]
    return (
        <div className="App">

            {lst.map((element) => {
                return (<Todo todo={element}/>)
            })}
        </div>
    );
}

export default App;
