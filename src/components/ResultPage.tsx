import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import SuspenseSpinner from "./SuspenseSpinner";
import { motion } from "framer-motion";

interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

const ResultPage = () => {
  const navigate = useNavigate();
  const { makeId, year } = useParams<{ makeId: string; year: string }>();
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );
        setModels(response.data.Results);
      } catch (error) {
        setError("Error fetching vehicle models.");
        console.error("Error fetching vehicle models:", error);
      }
    };

    if (makeId && year) {
      fetchModels();
    }
  }, [makeId, year]);

  return (
    <SuspenseSpinner>
      <div className="p-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl text-white font-fredoka text-center md:mt-24 mt-12 md:mb-12 mb-8"
        >
          Vehicle Models of {year}
        </motion.h1>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-red-500 text-xl font-fredoka text-center"
          >
            {error}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center"
        >
          {models.length > 0 ? (
            models.map((model) => (
              <div
                key={model.Model_ID}
                className="p-4 m-2 border border-white/30 rounded-3xl shadow-md w-60 items-center space-y-2 backdrop-blur-sm bg-white/5"
              >
                <h3 className="text-xl font-fredoka text-white text-center">
                  {model.Make_Name}
                </h3>
                <h3 className="text-xl font-fredoka text-white text-center">
                  Model: {model.Model_Name}
                </h3>
                <h3 className="text-md font-fredoka text-white text-center">
                  id: {model.Model_ID}
                </h3>
              </div>
            ))
          ) : (
            <p className="text-center text-xl font-fredoka text-white">
              No models found for this make and year.
            </p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex md:justify-center items-center m-auto md:mt-4 mt-4"
        >
          <Button
            onClick={() => navigate("/")}
            className="m-auto justify-center w-3/6 md:w-1/6 text-2xl text-white font-fredoka bg-secondary bg-opacity-60 md:mt-8"
          >
            Back
          </Button>
        </motion.div>
      </div>
    </SuspenseSpinner>
  );
};

export default ResultPage;
