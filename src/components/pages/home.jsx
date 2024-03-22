import guardian from "../../images/guardian.png";
import spiderman from "../../images/spiderman.png";
import Mask from "../../images/Mask.png";
import Play from "../../images/Play.png";
import Card from "../pages/card";

function HomeFunc() {
  return (
    <main className="">
      <div className="flex">
        <div className="py-5 my-24 mx-8">
          <h1 className="text-white font-bold text-3xl">FIND MOVIES</h1>
          <span className="bg-gradient-to-r from-blue-600 to-[#C40D60] inline-block text-transparent bg-clip-text font-bold text-5xl">
            TV SHOWS AND MORE
          </span>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur.
            <br />
            Accusantium, autem, consequuntur, corporis, delectus, doloremque,
            <br />
            facere, fugiat, harum, iusto, libero, magni, maxime, nobis, nobis,
          </p>
          <button
            type="button"
            className="flex text-white border-2 border-white my-5 items-center">
              <img
                src={Play}
                alt="Play"
                className="w-10 h-10 mr-2"
              />
              <span className="text-sm">Watch Tutorial</span>
  
          Watch Tutorial
          </button>
        </div>
        <div className="w-[500px] relative">
          <div className="absolute w-[300px] top-0 right-0">
            <img src={spiderman} alt="spiderman" className="w-full h-auto" />
          </div>
          <div className="absolute w-[300px] top-[50px] right-[70px]">
            <img src={guardian} alt="guardian" className="w-full h-auto" />
          </div>
        </div>
      </div>
      {/* {This is line that containing more movies } */}
      <span className="flex mx-5">
        <div class="">
          <img src={Mask} alt="Mask" className="w-full h-auto" />
        </div>
        <div class="">
          <p className="text-white">Trending</p>
        </div>
        <div class="border-t border-gray-300 my-4 w-[65rem] mx-2"></div>
        <div class="">
          <p className="text-white">See More</p>
        </div>
      </span>
      <section className="flex items-center justify-start my-5 mx-5">
        <div className="">
          <Card />
        </div>
      </section>
    </main>
  );
}

export default HomeFunc;
