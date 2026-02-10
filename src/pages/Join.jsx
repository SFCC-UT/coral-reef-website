export default function Join() {
  return (
    <div className="hero min-h-screen bg-linear-to-b from-blue-400 to-blue-900 fade-in">
      <div className="hero-content text-center">
        <div className="max-w-md space-y-8">
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-6">
            Get Involved
          </h1>

          <p className="text-lg lg:text-xl mb-8 leading-relaxed ">
            Anyone is welcome at our meetings and events. If you're interested
            in getting involved in SFCC or want to learn more, follow us on{" "}
            <a
              className="link text-yellow-300 hover:text-yellow-400 underline"
              href="https://www.instagram.com/sfccut"
            >
              Instagram
            </a>
            , join our GroupMe chat, and fill out our interest form below!
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfnK9mTuwRvm4jSLmqRsCArEX42nJWip1tXXWfSbCtouL3TLw/viewform"
              className="btn btn-success btn-lg rounded-full px-8 py-4 text-xl"
            >
              Interest Form
            </a>

            <a
              href="https://groupme.com/join_group/103774978/b7bVBmBt"
              className="btn btn-secondary btn-lg rounded-full px-8 py-4 text-xl"
            >
              Join our GroupMe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
