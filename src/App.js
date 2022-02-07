import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import ProfileState from './ContextData/ProfileState';

function App() {
  return (
    <div className="App">
      <ProfileState>
      <Header />
      <Body />
    </ProfileState>
    </div>
  );
}

export default App;
