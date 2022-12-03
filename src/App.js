import logo from './logo.svg';
import './App.css';
import Home from './component/pages/HomePage/Home';
import QuestionDetail from './component/pages/QuestionDetail/QuestionDetail';
import UserProfile from './component/pages/UserProfile/UserProfile';
import AskQuestion from './component/pages/AskQuestion/askQuestion';
import BasicPopover from './component/pages/Notification';
import WorldCoin from './component/pages/WorldCoinLogin';
import UploadFormNFT from './component/pages/UploadFormNFT';
import { Routes, Route } from 'react-router-dom';
import NftReadership from './component/pages/NFTClub/NftReadership';
import PushChat from './component/pages/pushchat/PushChat';
// import NftReadershipDetail from './component/pages/NFTClub/NftReadershipDetail';
function App() {
  return (
    <div className="App">
      {/* <AskQuestion/> */}
      {/* <QuestionDetail/> */}
      {/* <UserProfile/> */}
      <Routes>

<Route path="/nft-upload" element={<UploadFormNFT />} />
<Route exact path="/" element={<Home />} />

<Route path="/readership-nft" element={<NftReadership />} />
<Route path="/pushchat" element={<PushChat />} />

{/* <Route path="/readership-nft-detail/:address" element={<NftReadershipDetail />} /> */}

</Routes>
    </div>
  );
}

export default App;
