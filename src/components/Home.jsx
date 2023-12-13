import { useContext } from "react";
import UserContext from "../context/userContext.jsx";
import data from "../models/services/DataServices.jsx";
import Post from "./Post.jsx";

export default function Home() {
    const user = useContext(UserContext);

    return (
        <>
            <header>
                <h1>Forum instantané</h1>
            </header>
            <main>
                <h2>👋 Bienvenue, {user.pseudo}</h2>
                {data.map((e) => (
                    <Post post={e} />
                ))}
            </main>
        </>
    );
}
