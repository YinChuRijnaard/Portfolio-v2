import { Link } from "react-router-dom";
import "animate.css";

const Error = () => {
  return (
    <div className="-my-6 mx-8 flex h-screen items-center px-6 text-center font-serif text-4xl dark:text-white md:mx-36 lg:mx-72 lg:justify-around">
      {/* Find other way to dead-center div above */}
      <div className="space-y-8">
        <p className="animate__animated animate__rubberBand text-9xl">404</p>
        <p className="text-6xl">Uh oh...</p>
        <p>The page you are looking for does not exist 😥</p>
        <button className="mx-auto flex items-center justify-center border-2 border-black bg-black px-6 py-2 text-white duration-300 dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white">
          <Link to="/">Go back home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
