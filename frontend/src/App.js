import './App.css';
import { Routes, Route } from "react-router-dom";
import TradingViewWidgetSingle from './components/tradingView/tradingView';
import TradingViewChart from './components/tradingViewChart/tradingViewChart';
import Comments from './components/comments/comments';
import TradingTicker from './components/tradingTicker/tradingTicker';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <TradingTicker />
      <h1>Cryptosis</h1>
      <TradingViewWidgetSingle />
      <TradingViewChart />
      <Comments />
    
    <div>
      </div>
        <Routes>
         {/* <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} /> */}
        </Routes>
    </div>
  );
}

export default App;
