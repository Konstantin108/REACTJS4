import '../App.css';

export const Message = ({name, text}) => {
    return (
        <div className={'block'}>
            <div className={'block__name'}>сообщение от {name}</div>
            <div className={'block__text'}>{text}</div>
        </div>
    );
};
