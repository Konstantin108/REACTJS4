import './App.css';
import {useState} from "react";
import {Message} from "./components/Message";
import {Header} from "./components/Header";
import MessageList from "./components/MessageList"

function App() {

    const [messages] = useState(
        [
            {name: 'Сергей Петров', text: 'Привет, как дела?'},
            {name: 'Мирон Фёдоров', text: 'Кто убил Марка?'},
            {name: 'Пётр Александров', text: 'Что я здесь делаю?'},
        ]
    );

    const data = {
        date: new Date(),
        name: 'Konstantin'
    }

    return (
        <div className="App">
            <Header date={data.date} name={data.name}/>
            <h1>Домашнее задание №1</h1>
            {messages.map(({name, text}, index) =>
                <Message key={index} name={name} text={text}/>
            )}
            <h1>Домашнее задание №2</h1>
            <MessageList/>
        </div>
    );
}

export default App;
