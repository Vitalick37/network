import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Route, Routes } from "react-router-dom";


function App(props) {
  return (
      <div className="app-wrapper container">
        <Header />

        <Navbar dataFriends={props.stateData.messagesPage}/>

        <div className="app-wrapper-content">

          <Routes>
            
            <Route path="/dialogs" element={<Dialogs 
            stateDialogs={props.stateData.messagesPage} 
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
            />} />

            <Route path="/profile" element={<Profile 
              statePosts={props.stateData.profilePage}
              addPost={props.addPost} 
              updateNewPostText={props.updateNewPostText} 
              />} />

            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>

        </div>
      </div>
  );
}

export default App;
