import "./PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="PageNotFound">
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link className="more-link" to="" style={{borderRadius:'0px'}} >Back to home</Link>
            </div>
        </div>
    )
}
