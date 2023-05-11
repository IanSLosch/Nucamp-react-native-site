import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'; // prevents the application from loading until the redux store has rehydrated from the client side storage
import Loading from './components/LoadingComponent';


// whatever is passed to PersistGate's "loading=" prop will show when it isloading
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor} > 
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}