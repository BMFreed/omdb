function Footer (props) {
    return (
        <footer className="footer">
            <span className="footer__text">Did you like this website?</span>
            <span className="footer__text footer__contact" onClick={() => props.setModal(true)}>
                Contact me!
            </span>
        </footer>
    );
}

export default Footer