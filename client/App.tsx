import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/reduxApp/store';
import Router from './src/router/Router';
import { LogBox } from 'react-native';

export default function App() {
    LogBox.ignoreAllLogs();
        return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
