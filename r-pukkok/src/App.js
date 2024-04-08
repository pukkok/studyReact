// import logo from './logo.svg';
import './App.css';
import Animal from './component/Animal';
import Person from './component/Person';
import Todo from './component/Todo';

// user => props : 컴포넌트 외부에서 컴포넌트 안으로 주입해주는 값
function App() {
  return (
    <div className='App'>
      <Person name="pukkok" age="32"></Person>
      <Todo user="pukkok" name="cleaning" done={false} description="cleaning my room on weekends"></Todo>
      {/* <Animal></Animal> */}
    </div>
  );
}

export default App;
