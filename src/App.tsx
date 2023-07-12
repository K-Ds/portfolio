import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Work from './pages/Work';
import Maintenance from './pages/Maintenance';

const maintanceMode = false;

const FullpageWrapper = () => {
  return (
    <div className="lg:w-10/12 2xl:w-3/4">
      <Navbar position={'About'} />
      <main>
        <Home onClick={() => {}} />
        <About />
        <Work />
      </main>
    </div>
  );
};

function App() {
  return !maintanceMode ? (
    <div className="flex justify-center">
      <FullpageWrapper />
    </div>
  ) : (
    <Maintenance />
  );
}

export default App;
