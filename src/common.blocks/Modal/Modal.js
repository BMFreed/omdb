import { useRef, useEffect } from "react";
function Modal(props) {
    const modalRef = useRef(null);
    useEffect(() => {
        let handler = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                props.setModal(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [props]);

    useEffect(() => {
        const keyHandler = ({ key }) => {
            if (key === "Escape") {
                props.setModal(false);
            }
        };
        window.addEventListener("keydown", keyHandler);
        return () => {
            window.removeEventListener("keydown", keyHandler);
        };
    }, [props]);

    const handleClose = (event) => {
        event.preventDefault();
        props.setModal(false);
    };

    return (
        <section className="modal">
            <div className="modal__content" ref={modalRef}>
                <p className="modal__title">
                    Did you like this website? <br /> You can contact me at:
                </p>
                <ul className="modal__sm">
                    <li>
                        <a href="https://vk.com/id164679156" target="_blank" rel="noreferrer">
                            <img src={process.env.PUBLIC_URL + "/img/Modal/vk.png"} alt="VK" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/BMFreed" target="_blank" rel="noreferrer">
                            <img
                                src={process.env.PUBLIC_URL + "/img/Modal/telegram.png"}
                                alt="Telegram"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:badmofo14@gmail.com" target="_blank" rel="noreferrer">
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
                            rel="noreferrer"
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
                    <img src={process.env.PUBLIC_URL + "/img/movies/close.png"} alt="" />
                </a>
            </div>
            <div className="modal__background"></div>
        </section>
    );
}

export default Modal;
