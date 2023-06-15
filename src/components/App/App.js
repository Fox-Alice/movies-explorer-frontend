import { Route, Switch } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useResize } from '../../utils/useResize';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader'
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import api from '../../utils/MainApi';
import * as auth from '../../utils/Auth';
import './App.css';
import {
  NUM_SM,
  NUM_MD,
  NUM_LG,
  NUM_XL,
  MORE_SM,
  MORE_MD,
  MORE_LG,
  MORE_XL
} from '../../utils/constants';

function App() {

  const [moviesCards, setMovies] = useState(JSON.parse(localStorage.getItem('beatfilms')) || []);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [itemsToShow, setIemsToShow] = useState(5);
  const [isUserUpdate, setIsUserUpdate] = useState(false);
  const { isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  const [searchResults, setSearchResults] = useState([]);

  const closePopup = () => {
    setIsTooltipPopupOpen(false);
  }

  const showMore = () => {
    if (isScreenSm) {
      setIemsToShow(itemsToShow + MORE_SM);
    }
    if (isScreenMd) {
      setIemsToShow(itemsToShow + MORE_MD);
    }
    if (isScreenLg) {
      setIemsToShow(itemsToShow + MORE_LG);
    }

    if (isScreenXl) {
      setIemsToShow(itemsToShow + MORE_XL);
    }
  }

  useEffect(() => {
    if (isScreenSm) {
      setIemsToShow(NUM_SM);
    }

    if (isScreenMd) {
      setIemsToShow(NUM_MD);
    }

    if (isScreenLg) {
      setIemsToShow(NUM_LG);
    }

    if (isScreenXl) {
      setIemsToShow(NUM_XL);
    }
  }, [isScreenSm, isScreenMd, isScreenLg, isScreenXl])

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
        setUserData(user);
      }
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }, [loggedIn]);

  const handleSaveMovie = useCallback(async (data) => {
    try {
      // const savedMovies = await api.getSavedMovies()
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
          nameEN: data.nameEN
        })

        if (savedMovies.includes(movie)) {
          throw new Error('dr');
        } else {
          setSavedMovies(savedMovies.concat(movie));
          // console.log(data.id);
          // console.log(savedMovies);
        }
        return movie;
      } else {
        const movie = savedMovies.find(item => item?.movieId === data?.id)

        await api.handleSaveDelete(movie?._id);
        if (!movie) {
          throw new Error('Невалидный id фильма');
        } else {
          setSavedMovies(savedMovies.filter(item => item._id !== movie?._id));
          console.log(savedMovies);
        }
      }
    } catch (err) {
      setMessage(err.message);
    }
  }, [savedMovies]);

  const handleDeleteMovie = useCallback(async (data) => {
    try {
      await api.handleSaveDelete(data?._id);
      console.log(data);
      setSavedMovies(savedMovies.filter(item => item?._id !== data?._id));
      setSearchResults(searchResults.filter(item => item?._id !== data?._id));
      console.log(savedMovies);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, [savedMovies])

  const cbLogin = useCallback(async (email, password) => {
    try {
      setLoading(true);
      const data = await auth.authorize(email, password);
      if (!data) {
        throw new Error('Неверное имя или пароль пользователя');
      }
      if (data.token) {
        setMessage('');
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        setUserData(userData);
        console.log(currentUser);
      }
      return data;
    } catch (res) {
      setMessage(res?.validation?.body?.message || res.error);
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
        setMessage('')
        console.log(data);
        setCurrentUser(name, email);
        cbLogin(name, email);
      }
      return data;
    } catch (res) {
      setMessage(res?.validation?.body?.message || res.error);
    } finally {
      setLoading(false);
    }
  }, []);

  const cbLogout = (() => {
    setLoggedIn(false);
    localStorage.clear();
    setUserData(null);
  });

  function handleUpdateUser(data) {
    api.editProfile(data)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setIsUserUpdate(true);
          setIsTooltipPopupOpen(true);
          setMessage(null)
        }
      })
      .catch((err) => {
        setMessage(err);
        console.log('Error', err);
      })
    // }
  }

  useEffect(() => {
    tokenCheck()
  }, [tokenCheck]);

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('beatfilms')));
  }, []);

  useEffect(() => {
    !moviesCards &&
      moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('beatfilms', JSON.stringify(res));
          setMovies(res);
        })
        .catch((err) => {
          console.log('Error', err);
        })
  }, [moviesCards]);

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
          setSavedMovies(res);
          setSearchResults(res);
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
            <Main
              loggedIn={loggedIn} />
          </Route>
          {loading ? (<Preloader />) : (
            <ProtectedRoute path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              moviesCards={moviesCards}
              onCardSave={handleSaveMovie}
              savedMovies={savedMovies}
              itemsToShow={itemsToShow}
              showMore={showMore}
            >
            </ProtectedRoute>
          )}
          <ProtectedRoute path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            moviesCards={moviesCards}
            savedMovies={savedMovies}
            onCardDeleteClick={handleDeleteMovie}
            itemsToShow={itemsToShow}
            showMore={showMore}
            setSavedMovies={setSavedMovies}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          >
          </ProtectedRoute>
          <ProtectedRoute path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            onLogout={cbLogout}
            errorMessage={message}
            onTooltip={() => setIsTooltipPopupOpen(true)}>
          </ProtectedRoute>
          <Route path="/signin">
            <Login
              loggedIn={loggedIn}
              onLogin={cbLogin}
              errorMessage={message} />
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
        <InfoTooltip
          active={isTooltipPopupOpen}
          onClose={closePopup}
          isUserUpdate={isUserUpdate}
          message={isUserUpdate ? "Данные успешно обновлены!" : message} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
