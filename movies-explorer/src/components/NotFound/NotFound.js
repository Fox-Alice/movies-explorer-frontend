import './NotFound.css';

function NotFound() {
    return (
        <main className="not-found">
            <h1 className="not-found__number">404</h1>
            <p className="not-found__description">Страница не найдена</p>
            <button className="not-found__button" type="submit" >Назад</button>
        </main>
    );
}

export default NotFound;