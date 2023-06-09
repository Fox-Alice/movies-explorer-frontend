import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {

    let history = useHistory();

    return (
        <section className="not-found">
            <h1 className="not-found__number">404</h1>
            <p className="not-found__description">Страница не найдена</p>
            <button onClick={history.goBack} className="not-found__button">Назад</button>
        </section>
    );
}

export default NotFound;