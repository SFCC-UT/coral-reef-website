import BubbleButton from "../components/BubbleButton";

function Home() {
  return (
<div className="fade-in bg-[#020206] ">

<div className="">
<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6" 
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-12 md:text-end">
      <time className="font-mono italic text-lg">2019</time>
      <div className="text-2xl font-black mt-1">Founding</div>
      <p className="text-lg mt-2">
        ...
      </p>
    </div>
    <hr />
  </li>

  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-12">
      <time className="font-mono italic text-lg">20XX</time>
      <div className="text-2xl font-black mt-1">Start</div>
      <p className="text-lg mt-2">
        ...
      </p>
    </div>
    <hr />
  </li>

  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-12 md:text-end">
      <time className="font-mono italic text-lg">2026</time>
      <div className="text-2xl font-black mt-1">Release</div>
      <p className="text-lg mt-2">
        ...
      </p>
    </div>
  </li>
</ul>

</div>

    <div className="relative">
      <img
        src="./coral.svg"
        alt="Coral Reef"
        className="relative w-full h-auto block scale-101"
      />

    {/*Bubble buttons*/}

    <BubbleButton
        top="20%"
        left="30%"
        title="Info Bubble"
        description="Informational text here."
      />



    </div>

    </div>
  );
}

export default Home;
