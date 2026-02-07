import { Helmet } from "react-helmet";
import MusicLayer from "../components/MusicLayer";

function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="p-4">
                <p className="text-xs text-[#333333] text-center">Last update on <i className="italic">Jan 31, 2026.</i></p>
                <main className="message px-8 mt-8 text-justify flex flex-col items-center gap-4 indent-8">
                    <p>Oyy? ano at napadpad ka dito? miss mo ako no?🤭 ikaw ha.</p>
                    <p>Hindi ko alam kung babalikan mo pa tong website na ‘to, pero kung nababasa mo ‘to ibig sabihin non binalikan mo nga HAHAHAHA.</p>
                    <p>Feel free to message me if kailangan mo ng kausap. Kung ayaw mo edi... bahala ka HAHAHA</p>
                </main>
                <MusicLayer className="mt-8" />
            </div>
        </>
    );
}

export default Home;