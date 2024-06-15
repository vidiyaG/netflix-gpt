import { Link } from "react-router-dom";

const NoPage = () => (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
            alt="not-found"
            className="w-1/3 mb-8"
        />
        <p>
            Something wend wrong !!! &nbsp;
            <Link className="font-bold hover:underline" to={"home"}>
                Goto Home
            </Link>
        </p>
    </div>
);

export default NoPage;
