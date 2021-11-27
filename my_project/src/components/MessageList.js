import '../App.css';
import React from "react";
import {Card, TextField} from "@mui/material";

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                author: '',
                text: '',
            },
            messages: []
        };
        this.arr = [];
        this.fixedArr = [];

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({author: event.target.value});
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        let user = {
            author: '',
            text: '',
        }
        if (this.state.author && this.state.text) {
            user.author = this.state.author;
            user.text = this.state.text;
            this.arr.push(user);
            this.fixedArr = this.arr.reverse();
            this.setState({messages: this.fixedArr});
            event.preventDefault();
        } else {
            alert('Оба поля должны быть заполнены перед отправкой!');
            event.preventDefault();
        }
    }

    render() {
        return (
            <form className={'block'} onSubmit={this.handleSubmit}>
                <div className={'block__main'}>
                    <span className={'block__span'}>Имя: </span>
                    <TextField className={'block__input'}
                               type="text"
                               author={this.state.author}
                               onChange={this.handleChange}
                               placeholder="введите имя"
                               variant="filled"
                               size="small"
                               autoFocus
                    />
                    <span className={'block__span'}>Текст: </span>
                    <TextField className={'block__input'}
                               type="text"
                               text={this.state.text}
                               onChange={this.handleChangeText}
                               placeholder="введите текст"
                               variant="filled"
                               size="small"
                    />
                    <input className={'block__input_btn'}
                           type="submit"
                           value="Отправить"
                    />
                    <input className={'block__input_btn'}
                           type="reset"
                           value="Очистить"
                    />
                </div>
                <div className={'block__messageList'}>
                    {this.state.messages.map((message, index) => {
                        return (
                            <Card className={'block__message'} key={index} variant="outlined">
                                <div className={'block__text'}>
                                    <h4>{message.text}</h4>
                                    <p className={'block__name'}>сообщение от {message.author}</p>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </form>
        );
    }
}

export default MessageList;