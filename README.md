## Дипломный проект студента факультета Веб-разработки (фронтенд)
Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.
Пользователь вводит в строку поиска ключевые слова и нажимает кнопку «Искать». После этого сайт должен выполнить два действия:
отправить запрос к нашему сервису с данными о фильмах, получить данные и сохранить;
согласно введённому в поисковую строку тексту запроса найти все подходящие фильмы и отобразить карточки с ними;
когда пользователь сохраняет фильм, он должен отображаться в специальном разделе сайта.

# Сайт состоит из нескольких страниц:
* Главная. Содержит информацию о выполненном проекте.
* Страница с фильмами. На ней есть форма поиска фильмов и блок с результатами поиска.
* Страница с сохранёнными фильмами. Показывает фильмы, сохранённые пользователем.
* Страница регистрации. Позволяет пользователю зарегистрировать аккаунт.
* Страница авторизации. На ней пользователь может войти в систему.
* Страница редактирования профиля. Пользователь может изменить данные своего аккаунта.

# Что было сделано:
* верстка по макету Figma (ссылка на макет https://cloud.mail.ru/public/xVjf/mjnKnZuJc)
HTML:
Разметка портирована в JSX.
Разметка семантическая.
Все классы названы по БЭМ.
Навигация: ни одна ссылка не ведёт «в никуда».
CSS:
Для стилизации каждого блока выбраны правильные инструменты, которые подходят для задачи.
Вёрстка на Flex layout и/или Grid layout.
Адаптивность под указанные в макете разрешения и отсутствие поломок в промежуточных значениях.
Шрифты подключены через @font-face.
Сделана микроанимация кнопок, ссылок и инпутов.
Использован normalize.сss.
В разных частях проекта есть переиспользуемые блоки.
Все изображения оптимизированы — в том числе и .svg.
* реализована функциональность:
  Общее:
Все ссылки и кнопки в проекте работают.
Правильно работают оба состояния шапки: если пользователь не залогинился, в шапке должны быть
кнопки «Войти» и «Регистрация»; если пользователь залогинился, кнопки исчезают — и появляются
кнопки «Фильмы», «Сохранённые фильмы» и «Аккаунт», в том числе и на главной странице.
При поиске текст запроса, найденные фильмы и состояние переключателя короткометражек
сохраняются в хранилище. Если пользователь повторно переходит на страницу фильмов, то при
монтировании компонента данные достаются из локального хранилища. Страница отображается в
соответствии с загруженными из хранилища данными.
Все формы валидируются и на стороне клиента. Пользователь не может отправить запрос с
невалидными данными.
Страницы «Регистрация» и «Авторизация»:
На странице «Регистрация» клик по кнопке «Зарегистрироваться» отправляет запрос на роут /signup ,
если данные введены корректно. Если запрос прошёл успешно, то автоматически производится вход и
редирект на страницу /movies .
На странице «Авторизация» клик по кнопке «Войти» отправляет запрос на роут /signin , если данные
введены корректно. Если запрос прошёл успешно, происходит редирект на страницу /movies .
Все формы валидируются и на стороне клиента.
Страница редактирование профиля:
На странице редактирования профиля клик по кнопке «Сохранить» отправляет запрос на роут
/users/me , если данные введены корректно.
Пользователю отображается уведомление об успешном запросе к серверу при сохранении профиля.
Если на странице редактирования профиля введённая информация соответствует текущим данным
пользователя, кнопка «Сохранить» заблокирована и нельзя отправить запрос сохранения.
Поиск фильмов:
Прелоадер крутится во время выполнения запроса фильмов.
Работа с фильтром настроена:
Поиск фильмов регистронезависимый.
Если запрос выполняется впервые, то работа с фильтром происходит после получения данных.
Если карточки уже были отображены на странице в блоке результатов, клик по чекбоксу
«Короткометражки» приводит к повторной фильтрации результата.
После успешного сабмита формы поиска появляется блок с результатами.
Реакт. Чек-лист для студентов 2
Если ничего не найдено, выводится текст: «Ничего не найдено».
На странице всех фильмов в блоке результата отображается такое же количество карточек, как в макете.
Нажатие на кнопку «Ещё» отображает следующий ряд с тем же числом карточек. При отображении всех
карточек кнопка "Ещё" скрывается.
Карточки:
Карточка состоит из изображения, названия фильма и его длительности. Длительность фильма
рассчитывается корректно и соответствует формату в макете. Клик по карточке ведёт на трейлер
фильма.
Кнопка лайка имеет правильное состояние, в зависимости от того, добавлен ли фильм в сохранённые
или нет.
При клике на иконку «Лайк» в блоке карточки выполняется запрос к /movies нашего API для установки
или снятия лайка, в зависимости от текущего состояния.
На странице «Сохранённые фильмы»:
Отображается форма поиска. Она позволяет искать фильмы по уже полученным данным о
сохранённых фильмах.
Блок карточки содержит кнопку удаления, а не лайка.
При нажатии на кнопку удаления выполняется запрос на удаление фильма. После успешного запроса
карточка удаляется со страницы.
Отсутствуют серьёзные баги, которые возникают при работе с сервисом, например:
Удалённые или добавленные карточки фильмов появляются только после перезагрузки страницы.
Если осталось отобразить меньше карточек фильмов, чем в полном ряду, то нажатие кнопки «Ещё»
вызывает появление ошибок в консоли.
При удалении сохранённых карточек на соответствующей странице «Сохранённые фильмы» их попрежнему можно найти через поиск. Поиск начинает корректно работать только после перезагрузки
страницы.
Регистрация и авторизация:
Роуты /saved-movies , /movies , /profile защищены HOC-компонентом ProtectedRoute . Роуты / , /signin ,
/signup не защищены.
При попытке перейти на любой защищённый роут происходит редирект на / .
Если пользователь был авторизован и закрыл вкладку, он может вернуться сразу на любую страницу
приложения по URL-адресу, кроме страниц авторизации и регистрации.
После успешного вызова обработчика onSignOut происходит редирект на / .
Корректно используется хук useHistory .
При попытке перейти на несуществующую страницу происходит редирект на страницу «404». Кнопка
«Назад» работает корректно.
Корректно используются компоненты <Switch /> , <Route /> и <Redirect /> .
Работа с JWT выполнена корректно:
JWT-токен хранится в localStorage или в cookie ;
Jwt проверяется запросом к серверу, а не только в локальном хранилище.
При выходе из аккаунта jwt удаляется.
Хуки:
Хуки не используются внутри условных блоков или циклов.
Хуки вызываются в основной функции компонента.
При использовании классовых компонентов эффекты описаны внутри методов жизненного цикла
компонента.
Контекст:
В корневом компоненте App создана стейт-переменная, которая хранит данные пользователя. Она
используется в качестве значения для провайдера контекста.
В компонент App внедрён контекст через CurrentUserContext.Provider .
Компоненты, в которых используются данные профиля, подписаны на контекст.
Асинхронные запросы к API:
Запросы к API вынесены в отдельные файлы: MainApi.js и MoviesApi.js .
Первый обработчик then возвращает res.json . res проверяется на корректность. 
Цепочка обработки промисов завершается блоком catch .
Не выполняются лишние запросы к бэкенду, например: запрос всех фильмов с сервиса beatfilm-movies
производится только при первом поиске; все сохранённые фильмы не запрашиваются с сервера при
каждом лайке или дизлайке; данные пользователя запрашиваются один раз при запуске приложения.
Именование:
имена переменных, функций и параметров написаны в camelCase;
имена переменных — существительные;
имена переменных, функций и компонентов соответствуют содержимому;
имена коллекций NodeList — существительные во множественном числе;
имя функции начинается с глагола и отражает то, что она делает;
для именования запрещены: транслит и неуместные сокращения.

