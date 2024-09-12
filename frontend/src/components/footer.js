import React from 'react';

const Footer = () => {
  return (
<footer class="bg-e3f2ff text-white text-center dark:bg-green-700 dark:text-gray-200">

  <div class="mx-6 pt-8 pb-4 text-center">


  <div class="mb-6">
  <h5 class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">Explore Our World</h5>

  <p class="mb-4">
    Embark on an adventure of a lifetime and uncover hidden
    wonders. Your journey begins now!
  </p>
</div>


  <div class="grid grid-cols-1 md:grid-cols-3 mb-4">

  <div class="mb-6">
    <h5 class="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
      Adventures
    </h5>

    <ul class="mb-0 list-none">
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Lost Worlds
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Unknown Journeys
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Hidden Treasures
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Enchanted Realms
        </a>
      </li>
    </ul>
  </div>


  <div class="mb-6">
    <h5 class="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
      Challenges
    </h5>

    <ul class="mb-0 list-none">
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Conquer Mountains
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Oceanic Odyssey
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Space Quest
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Desert Expeditions
        </a>
      </li>
    </ul>
  </div>


  <div class="mb-6">
    <h5 class="mb-2.5 font-bold text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
      Get Started
    </h5>

    <ul class="mb-0 list-none">
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Join Us
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Calendar
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Contact
        </a>
      </li>
      <li>
        <a href="#!" class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-200">
          Blog
        </a>
      </li>
    </ul>
  </div>
</div>


  <div class="relative mb-7">
  <form action="">
    <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-6">
 
      <div class="md:ml-auto">
        <p class="font-bold">Sign up for our newsletter</p>
      </div>

  
      <div>
        <label for="inputSignUp" class="sr-only">
          Small input
        </label>
        <input
          type="email"
          id="inputSignUp"
          placeholder="Your address"
          class="w-full block rounded-lg border dark:border-none dark:bg-neutral-700 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
        />
      </div>

  
      <div class="md:mr-auto">
        <button
          type="submit"
          class="inline-block rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          Subscribe
        </button>
      </div>
    </div>
  </form>
</div>

  <div class="mb-7 flex justify-center gap-x-5">

  <div class="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
    <img
      src="https://mdbootstrap.com/img/new/standard/city/091.webp"
      class="w-full"
      alt="Louvre"
    />
    <a href="#!">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>

  <div class="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
    <img
      src="https://mdbootstrap.com/img/new/standard/city/084.webp"
      class="w-full"
      alt="Louvre"
    />
    <a href="#!">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>


  <div class="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
    <img
      src="https://mdbootstrap.com/img/new/standard/city/086.webp"
      class="w-full"
      alt="Louvre"
    />
    <a href="#!">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>


  <div class="hidden sm:flex relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
    <img
      src="https://mdbootstrap.com/img/new/standard/city/074.webp"
      class="w-full"
      alt="Louvre"
    />
    <a href="#!">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>


  <div class="hidden md:flex relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg">
    <img
      src="https://mdbootstrap.com/img/new/standard/city/095.webp"
      class="w-full"
      alt="Louvre"
    />
    <a href="#!">
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
</div>


  </div>

  <div class="bg-#000000 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">

      <span>© 2024 Copyright: </span>

    
      <a class="mx-3" href="#">
        <img
          src="https://www.goindigo.in/content/dam/skyplus6e/in/en/assets/global/images/icons/favicon.png"
          class="h-5"
          alt="TE Logo"
          loading="lazy"
        />
      </a>

      <a
        class="font-semibold text-neutral-600 dark:text-neutral-400"
        href="https://www.goindigo.in/content/dam/skyplus6e/in/en/assets/global/images/icons/favicon.png"
      >
       IndiGo Hackathon 2024
      </a>

  </div>


</footer>
  );
};

export default Footer;
