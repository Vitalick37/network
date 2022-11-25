import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Route, Routes } from "react-router-dom";


function App(props) {
  return (
      <div className="app-wrapper container">
        <Header />

        <Navbar 
          // dataFriends={props.stateData.sidebar}
        />

        <div className="app-wrapper-content">

          <Routes>
            
            <Route path="/dialogs" element={<DialogsContainer 
            // stateDialogs={props.stateData.messagesPage} 
            // dispatch={props.dispatch}
            // store={props.store}
            />} />

            <Route path="/profile" element={<Profile 
              // statePosts={props.stateData.profilePage}
              // dispatch={props.dispatch} 
              // store={props.store}
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
