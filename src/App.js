import logo from './logo.svg';
import './App.css';
import Home from './component/pages/HomePage/Home';
import QuestionDetail from './component/pages/QuestionDetail/QuestionDetail';
import UserProfile from './component/pages/UserProfile/UserProfile';
import AskQuestion from './component/pages/AskQuestion/askQuestion';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <AskQuestion/> */}
      {/* <QuestionDetail/> */}
      {/* <UserProfile/> */}
    </div>
  );
}

export default App;
