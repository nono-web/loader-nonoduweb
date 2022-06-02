import Loader from './components/Loader';
import Home from './components/Home';
import { useState, useEffect } from 'react';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
