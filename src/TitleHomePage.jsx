import { Link } from "react-router-dom";

export default function TitleHomePage() {

    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    // const year = ;

    const timeComponent = (<h2>
        Today's Date Is: {month} - {day} - {new Date().getFullYear()}
    </h2>)

    return (<div>
        <h1>
            Whack-a-mole
        </h1>
        {timeComponent}
        <Link to="/game">Play Whackamole</Link>
    </div>)
}