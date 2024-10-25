import { useParams } from "react-router"

export default function Game() {
    const params = useParams();

    return (
        <h2>
            You have chosen the {params.difficulty} game
        </h2>
    )

}