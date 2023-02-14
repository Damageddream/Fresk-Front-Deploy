
import "../../sass/components/projekt.css";
import { Link } from "react-router-dom";
const Projekt = (props) => {

    // check if link from projekt is inner or outter and change to <a> or <Link>
    let content
    if (props.inside === false) {
        content = <a href={props.link} className="cardi" style={{ backgroundImage: `url(${props.photo})` }}>
            <div className="inneri">
                <h2 className="titlei">{props.title}</h2>
                <time className="subtitlei">{props.date}</time>
            </div>
        </a>
    }
    else if (props.inside === true) {
        content = <Link to={props.link} state={props.id} className="cardi" style={{ backgroundImage: `url(${props.photo})` }}>
            <div className="inneri">
                <h2 className="titlei">{props.title}</h2>
                <time className="subtitlei">{props.date}</time>
            </div>
        </Link>
    }
    else {
        content = <a  className="cardi" style={{ backgroundImage: `url(${props.photo})` }}>
            <div className="inneri">
                <h2 className="titlei">{props.title}</h2>
                <time className="subtitlei">{props.date}</time>
            </div>
        </a>
    }


    return (
        <>
            {content}
        </>

    )
}

export default Projekt