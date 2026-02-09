import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>You Lied</title>
            </Helmet>

            <div className="flex flex-col min-h-dvh">
                <div className="py-4">
                    <p className="text-xs text-center text-[#333333]">Last update on <span className="italic">Feb 9, 2026</span>.</p>
                </div>
                <div className="px-8 flex flex-col gap-y-8 grow justify-center items-center text-center text-[hsl(0,0%,20%)]">
                    <h1 className="font-bold text-xl">Akala ko honest ka</h1>
                    <div className="flex flex-col gap-y-4">
                        <p>Dapat sinabi mo na lang <span className="italic">"sorry <span className="font-medium">Mark Well</span>, hindi pala ako sigurado sa nararamdaman ko sa'yo, may iba akong gusto"</span>.</p>
                        <p>Hindi yung sasabihin mo na hindi ka pa ready sa relationship ulit, sabay makikita ko may iba ka palang gusto. Quepal ka, jk😆.</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;