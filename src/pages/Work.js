import "animate.css";

const Work = () => {
  return (
    <div className="mx-8 my-16 h-full space-y-8 px-6 font-sans dark:text-white md:mx-36 lg:mx-72 2xl:mx-96">
      <h1 className="animate__animated animate__fadeInDown font-serif text-7xl">
        Work
      </h1>
      <p className="font-serif">Here are some of the things I've built 🛠</p>
      <hr />

      <div className="space-y-2 border-[1px] border-black p-4 dark:border-white">
        <p className="font-bold">Portfolio v1</p>
        <p>My first personal portfolio website.</p>
        <p>
          <strong>Built with:&nbsp;</strong>React and Tailwind CSS
        </p>
        <div className="flex items-center justify-start text-center">
          <a
            className="mr-4 border-2 border-black bg-black px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white"
            href="https://ycrdev.netlify.app/"
            target="_blank"
          >
            Live demo
          </a>
          <a
            className="border-2 border-black bg-black px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white"
            href="https://github.com/YinChuRijnaard/Portfolio"
            target="_blank"
          >
            GitHub repository
          </a>
        </div>
      </div>

      <div className="space-y-2 border-[1px] border-black p-4 dark:border-white">
        <p className="font-bold">Tenzies Game</p>
        <p>
          Small dice game originally built as part of a{" "}
          <a
            // className="underline decoration-red-500 decoration-wavy decoration-2 lg:hover:text-red-500 lg:hover:decoration-black lg:dark:hover:decoration-white"
            className="underline decoration-blue-500 decoration-2 lg:hover:text-blue-500 lg:hover:decoration-black lg:dark:hover:decoration-white"
            href="https://scrimba.com/learn/learnreact"
            target="_blank"
          >
            Scrimba
          </a>{" "}
          course. Rebuilt it and added the ability to see how many turns it took
          to win.
        </p>
        <p>
          <strong>Built with:&nbsp;</strong>React, TypeScript and Tailwind CSS
        </p>
        <div className="flex items-center justify-start text-center">
          <a
            className="mr-4 border-2 border-black bg-black px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white"
            href="https://tenzies-ycr.netlify.app/"
            target="_blank"
          >
            Live demo
          </a>
          <a
            className="border-2 border-black bg-black px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white"
            href="https://github.com/YinChuRijnaard/Tenzies"
            target="_blank"
          >
            GitHub repository
          </a>
        </div>
      </div>

      <div className="space-y-2 border-[1px] border-black p-4 dark:border-white">
        <p className="font-bold">Palindrome Checker</p>
        <p>
          Simple app to check if a given word is a palindrome (e.g., 'tacocat'
          spelled backwards is also 'tacocat').
        </p>
        <p>
          <strong>Built with:&nbsp;</strong>HTML, CSS and JavaScript
        </p>
        <div className="flex items-center justify-start text-center">
          <a
            className="mr-4 border-2 border-black bg-black px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white"
            href="https://yinchurijnaard.github.io/Palindrome-Checker/"
            target="_blank"
          >
            Live demo
          </a>
          <a
            className="border-2 border-black bg-black px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black lg:hover:border-2 lg:hover:border-black lg:hover:bg-white lg:hover:text-black lg:dark:hover:border-white lg:dark:hover:bg-black lg:dark:hover:text-white"
            href="https://github.com/YinChuRijnaard/Palindrome-Checker"
            target="_blank"
          >
            GitHub repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
