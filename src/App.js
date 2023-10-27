import './App.css';
import store from './store'
import { Provider } from 'react-redux'

import AddTask from './components/form_input_task';
import Task_list from './components/task_list';

function App() {
  return (
    <>
    <Provider store={store}>
      <AddTask/>
      <Task_list/>
    </Provider>
    </>
  );
}

export default App;
