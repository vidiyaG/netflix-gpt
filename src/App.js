import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="main-container p-4">
            <section>
                <h1 className="text-[#E50014] text-3xl text-left font-bold">
                    MOVIES
                </h1>
            </section>
            <div className="opacity-80 m-auto mt-[15vh] p-4 text-white  bg-[#4c4c4d] w-[356px]  flex flex-col justify-between rounded-2xl border border-zinc-900	">
                <h1 className="text-center text-3xl">Login</h1>
                <div className="flex flex-col my-4">
                    <label htmlFor="username" className="mb-1">
                        USERNAME
                    </label>
                    <input
                        className="h-[40px] bg-[#333333]"
                        type="text"
                        id="username"
                    />
                </div>
                <div className="flex flex-col  my-4">
                    <label htmlFor="password" className="mb-1">
                        PASSWORD
                    </label>
                    <input
                        className="h-[40px] bg-[#333333]"
                        type="text"
                        id="password"
                    />
                </div>
                <button className="bg-[#E50014] h-[40px] my-4">Login</button>
            </div>
        </div>
    );
}

export default App;
