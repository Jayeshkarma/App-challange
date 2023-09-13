// import "react-native-gesture-handler";
import Route from './src/routes';
import {StatusBar} from 'react-native';
const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF"
      />

      <Route />
    </>
  );
};

export default App;
