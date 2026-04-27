import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AppLoader from './components/AppLoader';
import HomePage from './pages/HomePage';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let minimumElapsed = false;
    let pageReady = document.readyState === 'complete';

    const maybeFinish = () => {
      if (minimumElapsed && pageReady) {
        setShowLoader(false);
      }
    };

    const minimumTimer = window.setTimeout(() => {
      minimumElapsed = true;
      maybeFinish();
    }, 1450);

    const handleLoad = () => {
      pageReady = true;
      maybeFinish();
    };

    if (!pageReady) {
      window.addEventListener('load', handleLoad);
    } else {
      handleLoad();
    }

    return () => {
      window.clearTimeout(minimumTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{showLoader && <AppLoader />}</AnimatePresence>
      <motion.div
        initial={false}
        animate={{ opacity: showLoader ? 0 : 1, scale: showLoader ? 0.995 : 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <HomePage />
      </motion.div>
    </>
  );
}

export default App;
