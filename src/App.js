import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Route, Routes } from "react-router-dom";


function App(props) {
  return (
      <div className="app-wrapper container">
        <HeaderContainer />

        <Navbar 
        />

        <div className="app-wrapper-content">

          <Routes>
            
            <Route path="/dialogs" element={<DialogsContainer 
            />} />

            {/* <Route path="/profile/:userId" element={<ProfileContainer 
              />} />
            <Route path="/profile/" element={<ProfileContainer 
              />} /> */}
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
              </Route>
            <Route path="/users" element={<UsersContainer 

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
