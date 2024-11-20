import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

interface VehicleMake {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

const LandingPage = () => {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await axios.get(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );
        setMakes(response.data.Results);
      } catch (error) {}
    };

    fetchMakes();
  }, []);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl text-white font-fredoka text-center md:mt-48 mt-24">
          Welcome to the Vehicle Filter!
        </h2>
      </div>
      <div>
        <h2 className="flex w-5/6 md:text-2xl text-xl text-white font-Roboto justify-center items-center m-auto md:mt-12 mt-12 md:mb-36 mb-12">
          You can find some models, selecting the Make and the year of
          production.
        </h2>
      </div>

      <div
        className="flex md:flex-row flex-col md:w-3/6 w-5/6 md:p-4 p-2 justify-center m-auto rounded-3xl md:space-x-8"
        style={{
          background:
            "linear-gradient(to top, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
        }}
      >
        <div
          className="md:w-2/5 justify-center p-4 m-2 rounded-3xl bg-opacity-40"
          style={{
            background:
              "linear-gradient(to top, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
          }}
        >
          <h1 className="md:text-2xl text-xl text-white font-fredoka mb-6 text-center">
            Select a Vehicle Make
          </h1>
          <div className="mb-4">
            <Select
              fullWidth
              label="Select a Make"
              placeholder="Select a Make"
              value={selectedMake}
              onChange={handleMakeChange}
            >
              {makes.map((make) => (
                <SelectItem
                  key={make.MakeId}
                  value={make.MakeId.toString()}
                  textValue={make.MakeName}
                >
                  {make.MakeName}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div
          className="md:w-2/5 justify-center p-4 m-2 rounded-3xl bg-opacity-40"
          style={{
            background:
              "linear-gradient(to top, rgba(75, 0, 130, 0.2), rgba(128, 0, 128, 0.2), rgba(255, 192, 203, 0.2))",
          }}
        >
          <h1 className="md:text-2xl text-xl text-white font-fredoka mb-6 text-center">
            Select the Year of Production
          </h1>
          <div className="mb-4">
            <Select
              fullWidth
              label="Select a Year"
              placeholder="Select a Year"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {years.map((year) => (
                <SelectItem
                  key={year}
                  value={year.toString()}
                  textValue={year.toString()}
                >
                  {year}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div>
        <div className="flex md:justify-center md:items-center m-auto md:mt-4 mt-4">
          <Button
            isDisabled={!selectedMake || !selectedYear}
            className="m-auto justify-center w-3/6 bg-secondary bg-opacity-60"
          >
            <Link
              to={`/result/${selectedMake}/${selectedYear}`}
              className="text-2xl text-white font-fredoka w-full h-full flex items-center justify-center"
            >
              Next
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
