import "./App.css";
import React, { Suspense }  from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { getAuthUserData } from "./redux/authReducer";
import { initializeApp } from "./redux/appReduser";
import Preloader from "./components/common/Preloader/Preloader";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component {

  componentDidMount() {

    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
        <div className="app-wrapper container">
          <HeaderContainer />
  
          <Navbar />
  
          <div className="app-wrapper-content">
  
            <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/dialogs" element={<DialogsContainer />} />
  
  
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/users" element={<UsersContainer />} />
  
              <Route path="/login" element={<Login />} />
  
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/setting" element={<Setting />} />
  
            </Routes>
            </Suspense>
  
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appInit.initialized,
})

export default connect (mapStateToProps, {initializeApp})(App);
