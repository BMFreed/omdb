import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Modal() {
    const [modal, setModal] = useState(false);
    let location = useLocation();

    useEffect(() => {
        if (location.hash === "#modal") {
            setModal(true);
        } else {
            setModal(false);
        }
    }, [location]);

    const handleClose = (event) => {
        event.preventDefault();
        setModal(false);
        location.hash = "";
        window.location.hash = "/";
    };

    if (!modal) return null;

    return (
        <section className="modal">
            <div className="modal__content">
                <p className="modal__title margin-reset">
                    Did you like this website? <br /> You can contact me at:
                </p>
                <ul className="modal__sm u-list">
                    <li>
                        <a href="https://vk.com/id164679156" target="_blank">
                            <img src={process.env.PUBLIC_URL + "/img/Modal/vk.png"} alt="VK" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/BMFreed" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/img/Modal/telegram.png"}
                                alt="Telegram"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:badmofo14@gmail.com" target="_blank">
                            <img
                                src={process.env.PUBLIC_URL + "/img/Modal/email.png"}
                                alt="Email"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/bogdan-binitskiy-140bb5212/"
                            target="_blank"
                        >
                            <img
                                style={{ height: "28px", width: "auto" }}
                                src={process.env.PUBLIC_URL + "/img/Modal/linkedin.png"}
                                alt="Linkedin"
                            />
                        </a>
                    </li>
                </ul>
                <a href="/" className="modal__close-button" onClick={handleClose}>
                    <img src={process.env.PUBLIC_URL + "/img/ui/close.png"} alt="" />
                </a>
            </div>
            <div className="modal__background"></div>
        </section>
    );
}

export default Modal;
