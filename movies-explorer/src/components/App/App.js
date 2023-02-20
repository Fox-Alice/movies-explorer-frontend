import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';

import './App.css';

function App() {
  return (
    <div className="page">
    <Header
    //  loggedIn={loggedIn}
    //   onLogout={cbLogout}
    //   email={email}
       />
       <Main/>
  <Switch>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<SavedMovies />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      </Switch>
    </div>
  );
}

export default App;
