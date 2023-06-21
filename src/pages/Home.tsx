import Navbar from "../components/Navbar";
import WorkImage from '../assets/work.svg';
import ArrowNav from "../components/ArrowNav";
import About from "./About";
import Work from "./Work";
import { useWindowScrollPositions } from "../hooks/useWindowScrollPositions";

const Home = () => {
  const scrollPosition = useWindowScrollPositions();

  const handleScroll = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({ top: window.innerHeight+50, behavior: 'smooth' });
  };

  return (
    <div className="w-11/12">
      <Navbar position={scrollPosition}/>
      <main className="mt-10">
        <div className="h-screen">
          <div className="flex space-x-6">
            <div className="flex flex-col flex-1 space-y-5 justify-center">
              <h1 className="font-semibold text-5xl">
                <span className="text-orange-500 leading-relaxed">
                  Full-Stack
                </span>{' '}
                Software
                <br /> Developer<span className=" ml-3 border-r-4"></span>
              </h1>
              <p className="text-gray-400 text-lg w-4/5">
                Striving to give my due to the world by creating innovative
                websites, mobile applications and the backend logic to go with
                it.
              </p>
            </div>
            <div className="flex h-full">
              <img src={WorkImage} />
            </div>
          </div>
          <ArrowNav text="About Me" onClick={handleScroll}/>
        </div>
        <About/>
        <Work/>
      </main>
    </div>
  );
}

export default Home