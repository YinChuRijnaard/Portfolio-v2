import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-16 flex h-screen flex-col items-center justify-center space-y-8 px-6 text-center font-serif text-4xl dark:text-white">
      {/* Find other way to dead-center div above (not using my-16) */}
      <p className="opacity-75">Hi, I'm</p>
      <p className="text-6xl">Yin Chu</p>
      <p className="opacity-75">
        Web developer from Athens. I create stuff for the internet.
      </p>
      <button className="flex items-center border-2 border-black bg-black px-6 py-2 text-white opacity-75 dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-2  lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white">
        <Link to="/about">About me</Link>
      </button>
    </div>
  );
};

export default Home;
