import './App.css';
import Header from './components/header';

import { ChatWindow } from './components/chat-window';
import { MessageInput } from './components/message-input';
function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Header/>
      <ChatWindow/>
      <MessageInput/>

    </div>
  );
}

export default App;
