import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import './App.css';
import moviesApi from '../../utils/MoviesApi';
import { useEffect, useState, useCallback } from 'react';
import * as auth from '../../utils/Auth';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';

function App() {

  const [moviesCards, setMovies] = useState([]);
  // const [isSaved, setIsSaved] = useState(false);
  const [savedMovies, setSavedMovies] =useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState(null);
  const [currentUser, setCurrentUser] = useState({});



  // useEffect(() => {
  //   loggedIn &&
  //     api.getSavedMovies()
  //       .then((res) => {
  //         setSavedMovies(res);
  //       })
  //       .catch((err) => {
  //         console.log('Error', err);
  //       })
  // }, [loggedIn])

  
  //   isSaved ? setSavedMovies(savedMovies.filter(item => item !== movie)) :
  //   setSavedMovies(savedMovies.concat(movie));        
  // }, [isSaved]);

  const tokenCheck = useCallback(async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem('jwt');
      if (!token) {
        throw new Error('no token')
      }
      const user = await auth.checkToken(token);
      if (!user) {
        throw new Error('invalid user')
      }
      if (user) {
        setLoggedIn(true);
        // console.log(user);
        setUserData(user);
        // setEmail(user.email);
      }
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }, [loggedIn]);

  const handleSaveMovie = useCallback(async (data) => {
    try {
      const savedMovies = await api.getSavedMovies()
      // const isSaved = savedMovies?.some(movie => movie?.movieId === data?.id);
      const isSaved = savedMovies?.some((movie) => movie?.movieId === data.id);
      if (!isSaved) {
    const movie = await api.handleSave({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co${data.image.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN})
      if (savedMovies.includes(movie)) {
        throw new Error('dr');
      } else {
        setSavedMovies(savedMovies.concat(movie));
        // setIsSaved(true);
        // localStorage.setItem('saved-movies', JSON.stringify(movie))
        console.log(data.id);
        console.log(savedMovies);
      }
      return movie;
    } else {
      const movie = savedMovies.find(item => item?.movieId === data?.id)
      // console.log(movie);
      // console.log(data?.id);

      await api.handleSaveDelete(movie?._id);
      if(!movie) {
        throw new Error('Невалидный id фильма');
      } else {
        // const savedMovies = moviesApi.getMovies();
        // setIsSaved(false);
        // setCurrentCard(movieDelete);
        setSavedMovies(savedMovies.filter(item => item._id !== movie?._id));
        console.log(movie._id);
    }}
      } catch(err) {
        setMessage(err.message);
      }
  }, []);

  // const handleSaveMovieDelete = useCallback(async (data) => {
  //   try {
  //     const movie = savedMovies.find(item => item?.movieId === data?.id)
  //     // console.log(movie);
  //     // console.log(data?.id);

  //     await api.handleSaveDelete(movie?._id);
  //     if(!movie) {
  //       throw new Error('Невалидный id фильма');
  //     } else {
  //       // console.log(movieDelete._id);
  //       // setCurrentCard(movieDelete);
  //       setSavedMovies((state) => state.filter((c) => c._id !== data._id));
  //       console.log(savedMovies);
  //       // setIsSaved(false);
  //       // localStorage.removeItem('saved-movies', movieDelete)
  //     } 
  //   } catch (err) {
  //     setMessage(err.message);    
  //   }
  // }, [savedMovies]);
  const handleDeleteMovie = useCallback(async (data) => {
    try {
      await api.handleSaveDelete(data?._id);
      setSavedMovies(savedMovies.filter(item => item._id !== data?._id));
    } catch(err) {
      setMessage(err.message);
    } finally {

    }
  }, [])

  const cbLogin = useCallback(async (name, email, password) => {
    try {
      setLoading(true);
      const data = await auth.authorize(name, email, password);
      // console.log(data);
      if (!data) {
        throw new Error('Неверное имя или пароль пользователя');
      }
      if (data.token) {
       localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        setUserData(userData);
        console.log(currentUser);
      }
      return data;
    } catch (err) {
      setMessage(err.message);
      // setIsTooltipPopupOpen(true);

    } finally {
      setLoading(false);
    }
  }, []);

  const cbRegister = useCallback(async (name, email, password) => {
    try {
      setLoading(true);
      const data = await auth.register(name, email, password);
      if (!data) {
        throw new Error('Пользователь не зарегистрирован');
      }
      if (data) {
        setCurrentUser(currentUser);
        cbLogin(name, email, password);
        // console.log(cbLogin(name, email, password));
      }
      return data;
    } catch (res) {
      setMessage(res.error);
      // setIsTooltipPopupOpen(true);

    } finally {
      setLoading(false);
    }
  }, [cbLogin]);

  const cbLogout = (() => {
    setLoggedIn(false);
    localStorage.clear();
    setUserData(null);
  });

  function handleUpdateUser(data) {
    api.editProfile(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log('Error', err);
      })
  }

  useEffect(() => {
    tokenCheck()
  }, [tokenCheck]);

  useEffect(() => {
    loggedIn &&
    moviesApi.getMovies()
        .then((res) => {
          return setMovies(res);
        })
        .catch((err) => {
          console.log('Error', err);
        })
  }, [loggedIn]);

  useEffect(() => {
    loggedIn &&
      api.getUser(currentUser)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log('Error', err);
        })
  }, [loggedIn])

  useEffect(() => {
    loggedIn &&
    api.getSavedMovies()
    .then((res) => {
      return setSavedMovies(res)
    })
    .catch((err) => {
      console.log('Error', err);
    })
}, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>

    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute path="/movies"
        component={Movies}
        loggedIn={loggedIn}
        moviesCards={moviesCards}
        onCardSave={handleSaveMovie}
        // onCardDeleteSave={handleSaveMovieDelete}
        savedMovies={savedMovies}
        // isSaved={isSaved}
        >
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies"
        component={SavedMovies}
        loggedIn={loggedIn}
        savedMovies={savedMovies}
        onCardDeleteClick={handleDeleteMovie}
        >
        </ProtectedRoute>
        <ProtectedRoute path="/profile"
        component={Profile}
        loggedIn={loggedIn}
        onUpdateUser={handleUpdateUser}
        onLogout={cbLogout}>
        </ProtectedRoute>
        <Route path="/signin">
          <Login
            loggedIn={loggedIn}
            onLogin={cbLogin} />
            </Route>
        <Route path="/signup">
          <Register
            loggedIn={loggedIn}
            onRegister={cbRegister}
            errorMessage={message} /></Route>
        <Route exact path="/*" >
          <NotFound />
        </Route>

      </Switch>
    </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
