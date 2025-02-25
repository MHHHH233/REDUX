import './App.css';
import ListVoitures from './Exercices/ListVoitures';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import voitureReducer from './Exercices/VoitureListe';

const store = configureStore({
  reducer: {
    voitures: voitureReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <h1>Car Management App</h1>
      <ListVoitures />
    </Provider>
  );
}

export default App;