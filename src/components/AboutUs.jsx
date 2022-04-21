import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";


/*Этот функциональный компонент выводит информацию обо мне*/
const AboutUs = () => {
    return <div>
        <Header></Header>
        <h1>Обо мне</h1>
        <div className="aboutMe">
            <div className="aboutMe__text">
                <i>
                    <p>Здравствуйте,меня зовут Вадим!</p>
                    <p> По образованию и основной специализации программист, с общим стажем по основной специализации более 5 лет, из них более 2 лет во Frontend.</p>
                    <p>Работал как удаленно, так и в офисе г.Краснодар!</p>

                    <p>Мои основные инструменты: HTML, CSS, JS, Figma, Photoshop, Pixel Perfect, GreenSock(GSAP),GULP, WordPress, OpenCart, Bitrix,Git,Vue в Laravel</p>

                    <p>К своим сильным сторонам могу отнести верстку (интеграция верстки на различные CMS, анимации (JS, CSS, GSAP),оптимизация верстки,верстка писем,умение работать со сборщиком Gulp</p>

                    <p>Так же на среднем уровне знаю и использую современные фреймворки Vue,React,Bootstrap</p>

                    <p>Дополнительно заканчиваю обучение в Skillbox по направлению Frontend-разработчик, пишу дипломную</p>
                    <p><b>Примеры моих работ React, Vue, JS, Верстка</b></p>
                    <ol><b>React</b>
                        <li>Приложение для волонтерской организации "Приют Животных"
                            Авторизация
                            login: 'test_user', password: '123456'
                            GitHub https://github.com/luck456654/reactanimals
                            GithubPages https://luck456654.github.io/reactanimals/#/auth</li>
                        <li>Еще одно не большое приложение на React
                            GitHub https://github.com/luck456654/artisant-project1
                            GithubPages https://luck456654.github.io/artisant-project1/</li>

                    </ol>
                    <ol><b>Vue</b>
                        <li>1-Интернет-магазин на Vue(Дипломная работа SkillBox по Vue)
                            Ссылка на production версию
                            https://luck456654.github.io/vue-app/#/
                            Ссылка проект на GitHub
                            https://github.com/luck456654/works/blob/main/untitled.rar</li>
                        <li>2-Пример клиент-серверного взаимодействия API на Vue
                            Ссылка на production версию http://currency.luck456.beget.tech/
                            Ссылка проект на GitHub
                            https://github.com/luck456654/works/blob/main/currencyExchange.rar</li>
                    </ol>
                    <ol><b>JS</b>
                        <li>Пример клиент серверного взаимодействия API c cервером gorest.co.in
                            Ccылка на GithubPages https://luck456654.github.io/API/
                            Ссылка на проект на GitHub
                            https://github.com/luck456654/works/tree/main/Project</li>
                        <li>Игра в пары, написанная на JS.
                            Ccылка на GithubPages https://luck456654.github.io/Game/
                            Ссылка на проект на GitHub https://github.com/luck456654/works/tree/main/игра</li>
                        <li>Таблица умеет не только добавлять данные, но и фильтровать и сортировать с перерисовкой таблицы в зависимости от введенных данных
                            Ccылка на GithubPages https://luck456654.github.io/sort-filtr-table/
                            Ссылка на проект на GitHub https://github.com/luck456654/works/tree/main/4%20сортировки%20и%20фильтрации</li>
                    </ol>
                    <ol><b>Верстка</b>
                        <li>Сразу хочу показать начатую мной дипломную работу SkillBox по верстке.
                            Сильно прошу не судить, так как работа только начата и далека до завершения,тем не менее уже есть на что посмотреть.
                            Верстка адаптивна под 4 разрешения экрана
                            Так же прилагаю в папке проекта макеты для желающих сравнить с PixelPerfect
                            Это самая свежая моя работа по верстке!!!
                            ссылка на githubpages-https://luck456654.github.io/diplom2/
                            ccылка на репозиторий-https://github.com/luck456654/diplom2</li>
                        <li>Главная страница для cайта компании PrintMSK
                            Резиновая верстка,с отдельной проработкой на точках брейкпоинтов(320px,768px, 1024px, 1366px, 1920px).
                            Так же прошу обратить внимание модальным окнам при клике на кнопки в Descktop версии - "Отправить заявку", в мобильной версии кнопка бургер-меню и кнопка поиска
                            Ccылка на проект на GitHub https://github.com/luck456654/ABV
                            Ссылка на GithubPages https://luck456654.github.io/ABV/</li>
                        <li>Почтовая рассылка Blanchard
                            Адаптивная (при помощи медиазапросов),кроссбраузерная почтовая рассылка
                            ссылка на github pages-https://luck456654.github.io/Blanchard-1/
                            ccылка на папку проекта на github-https://github.com/luck456654/Blanchard-1</li>
                        <li> Сайт фотохудожника Сергея Журавлева
                            Кроссбраузерная верстка со сложными анимационными эффектами при помощи библиотеки GreenSock (GSAP)
                            Ccылка на GithubPages https://luck456654.github.io/Zhuravlev/
                            Ссылка на проект на GitHub
                            https://github.com/luck456654/Zhuravlev</li>
                    </ol>
                    <ul><b>Мои контакты:</b>
                        <li><b>E-mail:</b>luckjantsev@rambler.ru</li>
                        <li><b>Тел.:</b>+7(918)-48-10-697</li>
                        <li><b>Мой сайт визитка: </b><a href="http://luckjantsevv.ru">http://luckjantsevv.ru</a></li>
                        <li><b>Ccылка на мою страницу на hh.ru</b>
                        
                            <p><a href="https://krasnodar.hh.ru/resume/880e50f2ff08ca94730039ed1f6f5879795149">https://krasnodar.hh.ru/resume/880e50f2ff08ca94730039ed1f6f5879795149
                            </a></p>
                        </li>
                    </ul>
                </i>
            </div>
            <img src="./myFoto.jpg" className="myFoto"></img>

        </div >
    </div>


};

export default AboutUs;