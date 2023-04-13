import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/reduxApp/store';
import Router from './src/router/Router';

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
