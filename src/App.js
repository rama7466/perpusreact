import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Gengre from './components/Gengre';
import "./style/LandingPage.css"
function App() {
  return (
    <div>
      <div className='myBG'>
        <Navigation />
        <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
      <div className='gengre'>
        <Gengre />
      </div>
   </div>
  );
}

export default App;
