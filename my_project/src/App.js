import './App.css';
import {Header} from "./components/Header";
import MessageList from "./components/MessageList"
import {green} from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import List from './components/List';

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});

function App() {

    const data = {
        date: new Date(),
        name: 'Konstantin'
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header date={data.date} name={data.name}/>
                <MessageList/>
                <div className={'listContainer'}>
                    <List/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
