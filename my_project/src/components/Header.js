import '../App.css';

const formatData = (date) => {
    return date.toLocaleString();
};

function UserHello({name}) {
    return (
        <div>Здравствуйте, {name}</div>
    );
}

export const Header = ({date, name}) => {
    return (
        <div className={'header'}>
            <div>{formatData(date)}</div>
            <UserHello name={name}/>
        </div>
    );
};
