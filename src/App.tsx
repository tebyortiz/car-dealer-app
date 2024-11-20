import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import ResultPage from "./components/ResultPage";
import SuspenseSpinner from "./components/SuspenseSpinner";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/result/:makeId/:year"
            element={
              <SuspenseSpinner>
                <ResultPage />
              </SuspenseSpinner>
            }
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
