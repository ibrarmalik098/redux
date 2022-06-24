import { Provider } from 'react-redux';
import store from './config/components/redux/store';
import Routerr from './config/components/Router/Routerr';
function App() {



  return (
    <>
      <Provider store={store}>
        <Routerr />
      </Provider>
    </>
  );
}

export default App;
