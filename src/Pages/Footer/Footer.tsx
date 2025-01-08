import "./Footer.css";

function Footer() {
  return <>
    <footer>
    <div className="footer__wrapper">
        <div className="footer-info">
            <span>Информация</span>
            <span>Участие в выставках</span>
            <span>Участие в фотопроектах (ТФП)</span>
        </div>
        <div className="footer-instagram">
            <span>Instagram</span>
            <span><a href="https://www.instagram.com/tiana.by/">@tiana.by</a></span>
        </div>
        <div className="footer-order">
            <span>Запишитесь</span>
            <span>Работа ведется только по предварительной записи, чтобы уделить каждой невесте столько времени, сколько потребуется, не отвлекаясь от творческого процесса.</span>
            <span>Позвоните, либо задайте вопросы в Viber или соцсети, и мы вместе подберем наиболее удобное время для Вас из свободного у меня.</span>
        </div>
        <div className="footer-contacts">
            <span>Как связаться</span>
            <span id="phone">Телефон / Viber / Telegram:</span>
            <span><a href="tel:+375447984661">+375 44 798 46 61</a></span>
            <span id="email">Email:</span>
            <span><a href="mailto:mail@tiana.by">mail@tiana.by</a></span>
            <span id="location">Местоположение:</span>
            <span>
                Беларусь,
            </span>
            <span>
                г.Минск,
            </span>
            <span>
                ст.м. Спортивная
            </span>
        </div>
    </div>
    <span id="copyright">Copyright © Tiana wedding 2008 — 2025</span>
    </footer>
  </>;
}

export default Footer;