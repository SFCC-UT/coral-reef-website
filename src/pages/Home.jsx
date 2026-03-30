import BubbleButton from "../components/BubbleButton";

function Home() {
  return (
    <div className="fade-in bg-[#020206]">
      <div className="flex flex-col items-center text-center pt-4 sm:pt-6 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-24 italic">
          Don't Bleach UT
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-info-content mb-6 italic">
          What if Nemo were lost… forever?
        </p>

        <p className="text-base sm:text-lg md:text-xl text-info-content mb-6 max-w-6xl mx-auto">
          This may be the most diverse, healthy, livable planet we will ever
          see. It may also be the most vibrant UT community we will see. The
          many species of animals and ecosystems, the unique perspectives of the
          people we meet, and the freedoms to grow through rich and varied
          coursework are essential to making our experience worthwhile, yet
          there is a disconnect between the kind of beautiful, just world we
          want and the priority we place on protecting these things at risk.{" "}
          <i>But we can choose to do things differently.</i>
        </p>

        <p className="text-base sm:text-lg md:text-xl text-info-content mb-16 max-w-6xl mx-auto">
          Do you believe diversity- from ecosystems and fish to nations, course
          curriculum, and expression of ideas- is valuable? Join us in refusing
          to stay silent before the vibrant colors that make life worth living
          and education worth experiencing are bleached away.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeVuHmK_TXguX_nps8oZG_H39RUVkSA_Y91ofwEB3nJQ8qF-g/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-neutral mb-16"
        >
          Take Action
        </a>

        <p className="text-base sm:text-lg md:text-xl text-info-content mb-0 max-w-3xl mx-auto">
          Want to learn more? Read about coral, climate, and how you can get
          involved by clicking on the bubbles below.
        </p>
      </div>

      <div className="relative w-full mt-12 sm:mt-16 lg:mt-20">
        <img
          src="./coral.svg"
          alt="Coral Reef"
          className="relative w-full h-auto block scale-101"
        />

        {/* Bubble buttons */}
        <BubbleButton
          top="20%"
          left="30%"
          title="Diversity and Ecosystems"
            description={
    <div className="space-y-4">
      <p>
        Coral reef ecosystems are home to ⅓ of all marine fish species and can be found in coastlines across the globe in several different countries. Coral reefs provide habitats and support life for thousands of marine species. Coral reefs also protect shorelines and serve as wave barriers by reducing the velocity of waves. [1] At the current rate, 70-90% of coral could be destroyed before 2050 [2].
      </p>
      <div className="mt-6 p-2 flex flex-col items-center">
        <img src="bubble1.png" alt="Diversity and Ecosystems" className="w-full max-w-lg h-auto rounded" />
        <p className="text-sm text-center text-neutral-content mt-12">Status of Coral Reefs of the World: 2025 [3]</p>
      </div>
    </div>
  }
  />

        <BubbleButton
          top="35%"
          left="70%"
          title="What's Happening to Coral Reefs?"
          description={
    <div className="space-y-4">
      <ul className="list-disc list-inside pl-4 space-y-4 whitespace-pre-line">
        <li><strong>1983:</strong> First mass coral bleaching observed. <strong>[4]</strong></li>
        <li><strong>1988:</strong> First global bleaching event.</li>
        <li><strong>2010:</strong> Second global bleaching event <strong>[5]</strong>.</li>
        <li>
          <strong>2014-2017:</strong> Coral-bleaching event; heat stress impacted 51% of world’s coral reefs by 2017. First bleaching event that lasted two consecutive years. The northern part of the Great Barrier Reef lost 30% of shallow water corals in 2016. 75% of tropical reefs across the globe experienced bleaching-level heat stress during this time.
        </li>
        <li><strong>2023-2025:</strong> Fourth global bleaching event. 84% of the world’s coral was impacted <strong>[6]</strong>.</li>
      </ul>
      <div className="mt-6 p-2 flex flex-col items-center">
        <img src="bubble2.png" alt="Coral Bleaching Timeline" className="w-full max-w-xs h-auto rounded" />
        <p className="text-sm text-center text-neutral-content mt-6">Coral Bleaching Events Map [7]</p>
      </div>
    </div>
  }

        />

        <BubbleButton
          top="50%"
          left="25%"
          title="Why do Reefs Get Bleached?"
          description={
    <div className="space-y-4">
      <p>
        Marine heat waves, pollution, and overexposure to air or sunlight can stress coral and cause it to expel zooxanthellae, the algae that allow it to survive. While coral can recover with the right conditions and enough time, prolonged stress will cause it to die, permanently damaging our reefs. The leading cause of current coral bleaching is increased ocean temperatures due to climate change [8].
      </p>
      <div className="mt-6 p-2 flex flex-col items-center">
        <img src="bubble3.png" alt="Coral Bleaching Cause" className="w-full max-w-xs h-auto rounded" />
        <p className="text-sm text-center text-neutral-content mt-6">Coral Bleaching  [9]</p>
      </div>
    </div>
  }/>

        <BubbleButton
          top="65%"
          left="75%"
          title="The Effects of Climate Change"
          description="Coral reefs aren’t the only ecosystems affected by human activity- climate change also contributes to current extinction rates being 1000–10,000x higher than natural extinction rates. [10] Climate change is a threat to societal stability, causing extreme weather, more frequent natural disasters, depletion of our ability to produce food, expansion of deadly diseases, issues in health, national security, infrastructure, and more. Rising energy costs, insurance premiums, and other climate bills already cost households $400-$900 annually [11], and air pollution itself is associated with over 7 million premature deaths each year [12].
"
        />

        <BubbleButton
          top="80%"
          left="35%"
          title="Climate Change Status Updates"
          description="Despite the undeniable threat to our nation’s security and well-being, the US has repealed the Endangerment finding [13] which recognized climate change as a threat to public health and welfare, even as people are already harmed by its effects.

It is a privilege to be able to not think about climate change, or to be able to think about it while continuing with our business-as-usual days. Many people whose lives are already being upended do not have that choice- for example, the island nation of Tuvalu has already signed an agreement for mass evacuation to Australia due to rising sea levels [14].
"
        />
      </div>

      <div className="relative w-full mt-12 sm:mt-16 lg:mt-20">
        <img
          src="./uttower.svg"
          alt="Coral Reef"
          className="relative w-full h-auto block scale-101"
        />

        {/* Bubble buttons */}
        <BubbleButton
          top="20%"
          left="30%"
          title="What Can We Do at UT?"
          description="Climate change and coral bleaching are global issues, requiring international cooperation and collaboration to address these crises. At the same time, collective action and bottom-up approaches are necessary to drive this effort. This means that institutions such as UT can have a significant impact on how the climate crisis is addressed. Ultimately, we need to reduce warming by reducing the amount of greenhouse gases that we emit into the atmosphere. As students of UT Austin, we can demand that our university follow basic actions that make sense for any global catastrophe. UT’s Presidential Sustainability Steering Committee has not had a team published since 2024 [15]. UT can also help contribute to Austin's carbon neutral plan by making a commitment that aligns with the City of Austin’s goal of being carbon-neutral by 2040 [16]. 

Beyond UT Austin, we are also part of the UT System which leases 1.3 million acres of land to fossil fuel extraction, resulting in 20x the emissions of UT Austin alone. These emissions aren’t just from extraction itself- methane leaks waste resources and account for an estimated 10% of global warming [17], and 40% of these leaks come from the state of Texas [18]. 
"
        />

        <BubbleButton
          top="35%"
          left="70%"
          title="Students Fighting Climate Change"
            description={`It’s not a question of can we solve climate change — it’s a question of will we. We have the tools we need, but long-term growth and wellbeing are being sacrificed for short-term gains, and this isn’t right. The vast majority of us will see drastic effects of climate change in our lifetime, and the people who suffer the most are those who have contributed the least emissions. Students Fighting Climate Change believes that:

  1) Whether it be through spending a greater portion of income on food, not being able to afford home insurance, or losing people and livelihoods to extreme weather and heat, climate change is negatively impacting our lives.

  2) This impact is important enough that it is worth taking action on.

  3) Our institutions have the power and resources to make a difference.

  4) The main obstacle is a lack of support and willpower that can be changed by enough people banding together to improve not just our individual lives, but the institutions we are a part of. As stakeholders in our university, school system, state, and country, we comprise institutions that should represent what we value and protect our well-being. We can and will keep our future from being bleached of its possibilities.`}
  />

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
          <span className="absolute top-[74%] text-info-content font-bold text-2xl sm:text-3xl lg:text-4xl w-full text-center">
            What future are we heading towards?
          </span>
          <span className="absolute top-[77%] text-info-content font-bold text-2xl sm:text-3xl lg:text-4xl w-full text-center">
            What future do you want?
          </span>
          <span className="absolute top-[80%] text-info-content font-bold text-2xl sm:text-3xl lg:text-4xl w-full text-center">
            And what are you willing to do to fight for it?
          </span>
          <span className="absolute top-[90%] text-info-content font-bold text-2xl sm:text-3xl lg:text-4xl w-full text-center">
            Learn more about{" "}
            <a
              href="https://www.instagram.com/sfccut/"
              className="underline font-semibold hover:text-neutral-content pointer-events-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              SFCC.
            </a>
          </span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVuHmK_TXguX_nps8oZG_H39RUVkSA_Y91ofwEB3nJQ8qF-g/viewform?usp=header"
            className="absolute top-[92%] text-info-content hover:text-neutral-content font-semibold text-xl sm:text-2xl lg:text-3xl w-full text-center underline pointer-events-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get involved and take action.
          </a>
        </div>
      </div>

      <div className="mt-24">
        <div className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-info-content mb-8 text-left">
            References and Citations
          </h2>

          <ol className="list-decimal list-inside space-y-4 text-base sm:text-lg md:text-xl text-info-content wrap-break-word">
            <li>
              Wave barriers Fernando, H. J. S., S. P. Samarawickrama, S.
              Balasubramanian, S. S. L. Hettiarachchi, and S. Voropayev.
              "Effects of porous barriers such as coral reefs on coastal wave
              propagation." Journal of Hydro-environment Research 1, no. 3-4
              (2008): 187-194.
            </li>
            <li>
              https://www.nytimes.com/2025/09/17/climate/corals-climate-change.html
            </li>
            <li>https://gcrmn.net/2025-report/</li>
            <li>
              Timeline :: Scott, Michon, and Rebecca Lindsey. (2018) “
              Unprecedented 3 years of global coral bleaching, 2014–2017.” NOAA.
              https://www.climate.gov/news-features/
              understanding-climate/unprecedented-3-years-global-coral-bleaching-2014%E2%80%932017#:~:text=Though%20an%20El%20Ni%C3%B1o%20was,Excellence%20for%20Coral%20Reef%20Studies.
            </li>

            <li>
              https://www.google.com/url?q=https://coralreefwatch.noaa.gov/satellite/research/coral_bleaching_report.php%23:~:text%3DNOAA%2520Coral%2520Reef%2520Watch%2520Current,world%2520since%2520January%25201%252C%25202023&sa=D&source=docs&ust=1774818617803797&usg=AOvVaw3x4r4NXhfaUN6e54pOyUkQ
            </li>

            <li>
              https://www.google.com/url?q=https://coralreefwatch.noaa.gov/satellite/research/coral_bleaching_report.php%23:~:text%3DNOAA%2520Coral%2520Reef%2520Watch%2520Current,world%2520since%2520January%25201%252C%25202023&sa=D&source=docs&ust=1774818617804492&usg=AOvVaw0DdfddB8f0ztDqU9G6vJLW
            </li>

            <li>
              https://www.google.com/url?q=https://www.climate.gov/news-features/featured-images/how-does-2023-24-global-coral-bleaching-compare-past-events&sa=D&source=docs&ust=1774818617804961&usg=AOvVaw0o2Eq9myCClWQ2Ij3bWjlV
            </li>

            <li>
              https://www.google.com/url?q=https://oceanservice.noaa.gov/facts/coral_bleach.html&sa=D&source=docs&ust=1774818617805442&usg=AOvVaw3zxKZw7ZBZv6NveyQaU5bO
            </li>

            <li>
              https://www.google.com/url?q=https://www.marineconservation.org.au/coral-bleaching/&sa=D&source=docs&ust=1774818617805201&usg=AOvVaw1YWX_NuIQB5WJuAjPfmnuF
            </li>

            <li>
              google.com/url?q=https://onlinelibrary.wiley.com/doi/full/10.1111/brv.12974&sa=D&source=docs&ust=1774823696293587&usg=AOvVaw1rBSuh35shuHO_Wa-h_BHj
            </li>

            <li>
              https://www.google.com/url?q=https://earth911.com/home-garden/the-cost-of-climate-change-for-u-s-households-keep-rising/&sa=D&source=docs&ust=1774818617801179&usg=AOvVaw0fZctiQ1lZMtWlKcXtkXok
            </li>

            <li>
              https://www.google.com/url?q=https://www.nytimes.com/2026/02/12/climate/trump-epa-greenhouse-gases-climate-change.html&sa=D&source=docs&ust=1774818617809475&usg=AOvVaw3QmdA5Rzw-dALLXu44r2xP
            </li>

            <li>
              https://www.google.com/url?q=https://theweek.com/environment/tuvalu-climate-change-evacuate-rising-sea-levels&sa=D&source=docs&ust=1774818617805750&usg=AOvVaw0xdVuk-mH89j5oDG4vDwtC
            </li>

            <li>
              https://www.google.com/url?q=https://sustainability.utexas.edu/about/planning-policy/presidents-sustainability-steering-committee&sa=D&source=docs&ust=1774818617806531&usg=AOvVaw1CavQl6vli0oUSMjq-uppG
            </li>

            <li>
              https://www.google.com/url?q=https://thedailytexan.com/2025/02/04/memo-shows-austin-is-behind-on-sustainability-goals-to-reach-net-zero-emissions-by-2040/%23:~:text%3D3/24/2026-,Memo%2520shows%2520Austin%2520is%2520behind%2520on%2520sustainability%2520goals%2520to%2520reach,not%2520available%2520in%2520the%2520report&sa=D&source=docs&ust=1774818617807787&usg=AOvVaw15_tm6vaGMoRFsBHZjLwqA
            </li>

            <li>
              https://www.google.com/url?q=https://www.austintexas.gov/climate/austin-climate-equity-plan&sa=D&source=docs&ust=1774818617806836&usg=AOvVaw2lLdsDRSwJZgnJEqFwUTiD
            </li>

            <li>
              https://www.google.com/url?q=https://climate.mit.edu/ask-mit/how-much-does-natural-gas-contribute-climate-change-through-co2-emissions-when-fuel-burned&sa=D&source=docs&ust=1774818617808707&usg=AOvVaw3r9Of_eanDtqHIfahpt3Gz
            </li>

            <li>
              https://www.google.com/url?q=https://rmi.org/what-landman-gets-right-about-gas-leaks-and-methane/%23:~:text%3DAdequate%2520comprehensive%2520oversight%2520is%2520sorely,tackle%2520West%2520Texas%2520well%2520blowouts&sa=D&source=docs&ust=1774818617809228&usg=AOvVaw3xA7lj_40beWe1KEopQWf7
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
