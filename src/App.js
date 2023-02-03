import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./components/Home";
import PageA from "./components/PageA";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={ <RouteContainer><Home /></RouteContainer>} />
          <Route exact path="/pageA" element={ <RouteContainer><PageA /></RouteContainer>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  enter: {
    opacity: 1,
    y: "0%",
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
};

const RouteContainer = ({ children }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    {children}
  </motion.div>
);

export default App;
