import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-8 -my-6 flex h-screen flex-col items-center justify-center space-y-8 px-6 text-center font-serif text-4xl dark:text-white md:mx-36 lg:mx-72">
      {/* Find other way to dead-center div above */}
      <p className="opacity-75">Hi, I'm</p>
      <p className="text-7xl">Yin Chu</p>
      <p className="opacity-75">
        Web developer from Athens. I create stuff for the internet.
      </p>
      <button className="flex items-center border-2 border-black bg-black px-6 py-2 text-white opacity-75 dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white">
        <Link to="/about">About me</Link>
      </button>
    </div>
  );
};

export default Home;
