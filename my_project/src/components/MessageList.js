import '../App.css';
import React from "react";

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                author: '',
                text: '',
            },
            messagesHW2: []
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
            this.setState({messagesHW2: this.fixedArr});
            event.preventDefault();
        } else {
            alert('Оба поля должны быть заполнены перед отправкой!');
            event.preventDefault();
        }
    }

    render() {
        return (
            <form className={'block2'} onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input className={'block2__input'}
                           type="text"
                           author={this.state.author}
                           onChange={this.handleChange}
                           placeholder="введите имя"
                    />
                    Текст:
                    <input className={'block2__input'}
                           type="text"
                           text={this.state.text}
                           onChange={this.handleChangeText}
                           placeholder="введите текст"
                    />
                </label>
                <input className={'block2__input_btn'}
                       type="submit"
                       value="Отправить"
                />
                <input className={'block2__input_btn'}
                       type="reset"
                       value="Очистить"
                />
                <div className={'block2__messageList'}>
                    {this.state.messagesHW2.map((message, index) => {
                        return (
                            <div className={'block2__message'} key={index}>
                                <div className={'block2__text'}>
                                    <h4>{message.text}</h4>
                                    <p className={'block2__name'}>сообщение от {message.author}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </form>
        );
    }
}

export default MessageList;