import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Work from './pages/Work';

const FullpageWrapper = () => {
  return (
    <div className="w-11/12">
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
  return (
    <div className="flex justify-center">
      <FullpageWrapper />
    </div>
  );
}

export default App;
