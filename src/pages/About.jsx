export default function About() {
  const members = [
    {
      name: "Allison Podanoffsky",
      title: "Directer of Outreach",
      img: "/AllisonPodanoffsky.avif",
    },
    {
      name: "Madeleine Lee",
      title: "Director of Research",
      img: "/MadeleineLee.avif",
    },
    {
      name: "Kenny Calvo",
      title: "Junior Director of Recruitment",
      img: "/Kenny.avif",
    },
    {
      name: "Ant Orta",
      title: "Junior Director of External Relations",
      img: "/Ant_Orta.avif",
    },
    {
      name: "Braedon Hallmark",
      title: "Officer of Campaigns",
      img: "/Braedon.avif",
    },
    {
      name: "Danny DuCharme",
      title: "Officer of Campaigns",
      img: "/DannyDuCharme.avif",
    },
    {
      name: "Olga Tumanova",
      title: "Officer-At-Large",
      img: "/Olga_Tumanova.avif",
    },
  ];

  return (
    <div className="fade-in">
      <div className="bg-linear-to-b from-blue-400 to-blue-900 min-h-screen flex items-center -mt-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="hero-content flex-col lg:flex-row items-center gap-16">
            <img
              src="\about_us.avif"
              className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              alt="About us"
            />
            <div className="text-center lg:text-left max-w-xl">
              <h1 className="text-6xl lg:text-7xl font-extrabold mb-6">
                About
              </h1>
              <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                <span className="font-bold">
                  What starts here changes OUR world.
                </span>{" "}
                SFCC was founded in 2019 by students who wanted to hold the UT
                accountable for its large role in the climate crisis. We are the
                only climate activism organization on campus and plan
                demonstrations, meet with administration, and host meetings to
                educate others on how to take action.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-5xl font-extrabold text-white text-center mb-12">
            Who We Are
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-800 shadow-lg rounded-2xl flex flex-col items-center text-center p-6 hover:scale-105 transform transition-transform duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-full w-32 h-32 object-cover shadow-md mb-4"
                />
                <h2 className="text-xl font-bold text-white">{member.name}</h2>
                <p className="text-gray-400 text-base">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
