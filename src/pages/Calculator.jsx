import { useState } from "react";

const calculatorData = {
  options: [
    {
      icon: "🤢",
      label: "Your Building Emissions",
      description: "Current emissions from your nasty building",
      data: {
        electricity: {
          //   title: "Electricity Consumption Per Level",
          totalConsumption: "770 kWh",
          consumptionByLevel: [
            { level: "Level 1", consumption: "50 kWh" },
            { level: "Level 2", consumption: "60 kWh" },
            { level: "Level 3", consumption: "50 kWh" },
          ],
        },
        carbonEmission: {
          //   title: "Carbon Emission Per Level",
          totalEmission: "0.79 tons",
          emissionByLevel: [
            { level: "Level 1", emission: "0.5 tonne" },
            { level: "Level 2", emission: "0.2 tonne" },
            { level: "Level 3", emission: "0.15 tonne" },
          ],
        },
      },
    },
    {
      icon: "🌱",
      label: "Your Greener Building",
      description: "The greener version of your building",
      data: {
        electricity: {
          totalConsumption: "743 kWh",
          consumptionByLevel: [
            { level: "Level 1", consumption: "23 kWh" },
            { level: "Level 2", consumption: "43 kWh" },
            { level: "Level 3", consumption: "12 kWh" },
          ],
        },
        carbonEmission: {
          totalEmission: "0.77 tons",
          emissionByLevel: [
            { level: "Level 1", emission: "0.23 tonne" },
            { level: "Level 2", emission: "0.10 tonne" },
            { level: "Level 3", emission: "0.02 tonne" },
          ],
        },
      },
    },
  ],
};

const description = {
  Suggestion: [
    "Please do this and do that bruh",
    "PLease bruh!",
    "PLease man Im Begging U",
  ],
};

const savingOptions = {
  Improvement: [
    "Reduce Lamp/Change to LED",
    "Reduce AC",
    "Reduce Computer/Router",
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function RenderData({ data }) {
  return (
    <div className="isolate mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
      {Object.keys(data).map((key, index) => (
        <div
          key={index}
          className="rounded-3xl p-6 bg-white border border-gray-200"
        >
          {/* <h3 className="text-lg font-semibold text-gray-900">{key}</h3> */}
          {key === "electricity" ? (
            <div className="flex flex-col jusitfy-center items-center">
              <p className="text-xl">Total Electricity Consumption</p>
              <p className="mt-2 text-lg leading-6 text-gray-600">
                {data[key].totalConsumption}
              </p>
              <ul className="mt-4 text-sm leading-6 text-gray-600 space-y-5">
                {data[key].consumptionByLevel.map((levelData) => (
                  <li key={levelData.level}>
                    <b>{levelData.level}</b> <br />
                    {levelData.consumption}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex flex-col jusitfy-center items-center">
              <p className="text-xl">Total Carbon Emission</p>
              <p className="mt-2 text-lg leading-6 text-gray-600">
                {data[key].totalEmission}
              </p>
              <ul className="mt-4 text-sm leading-6 text-gray-600 space-y-5">
                {data[key].emissionByLevel.map((levelData) => (
                  <li key={levelData.level}>
                    <b>{levelData.level}</b> <br />
                    {levelData.emission}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function WhatYouCanDo() {
  return (
    <div className="isolate mx-auto mt-8 grid grid-cols-1 gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-3xl p-6 bg-white border border-gray-200">
        <p className="text-xl">What You Can Do:</p>
        <ul className="flex flex-col items-center justify-center mt-4 text-sm leading-6 text-gray-600 space-y-5">
          {description.Suggestion.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WhatIWantToChange() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleButtonClick = (index) => {
    setSelectedOption(index);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <div className="isolate mx-auto mt-8 grid grid-cols-1 gap-8 items-center justify-center">
      <div className="flex flex-col rounded-3xl p-6 bg-white border border-gray-200 justify-center items-center">
        <p className="text-xl">What improvement would you make to the building?</p>
        <div className="mt-4 space-x-4 flex flex-row justify-center items-center">
          {savingOptions.Improvement.map((improvement, index) => (
            <button
              key={index}
              className={`rounded-lg py-2 px-4 ${
                selectedOption === index
                  ? "bg-indigo-500 text-white"
                  : "border-2 border-indigo bg-white"
              } hover:bg-indigo-700`}
              onClick={() => handleButtonClick(index)}
            >
              {improvement}
            </button>
          ))}
        </div>
        {selectedOption !== null && showConfirm && (
          <button
            className="w-[20%] rounded-lg py-2 px-4 mt-4 bg-white-500 border-2 border-white text-black hover:bg-black hover:text-white"
            onClick={handleConfirm}
          >
            Confirm 👌🏼
          </button>
        )}
      </div>
    </div>
  );
}

export default function Calculator() {
  const [selectedOption, setSelectedOption] = useState(
    calculatorData.options[0]
  );
  const [openPopUp, setOpenPopUp] = useState(false);

  const showWhatYouCanChange = selectedOption === calculatorData.options[0];
  const showWhatYouCanDo = selectedOption === calculatorData.options[1];

  return (
    <div className="bg-white items-center justify-center">
      <main>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Carbon Emission Calculator
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Reduce Your Carbon Footprint Bro!
          </p>

          {/* Calculator Options */}
          <div className="isolate flex justify-center items-center mx-auto mt-10 max-w-7xl">
            <div className="flex flex-wrap justify-center items-center gap-8 pr-10">
              {/* Render option */}
              {calculatorData.options.map((option, index) => (
                <div
                  key={index}
                  className={classNames(
                    selectedOption === option
                      ? "ring-2 ring-indigo-600"
                      : "ring-1 ring-gray-200",
                    "flex flex-col justify-center items-center rounded-3xl p-6 cursor-pointer transition-transform transform hover:scale-105"
                  )}
                  onClick={() => {
                    setSelectedOption(option);
                    setOpenPopUp(true);
                  }}
                >
                  <h2 className="mb-4 text-lg font-semibold leading-6 text-gray-900">
                    {option.icon}
                  </h2>
                  <h2 className="text-lg font-semibold leading-6 text-gray-900">
                    {option.label}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Render data */}
          {openPopUp && <RenderData data={selectedOption.data} />}
          {openPopUp && showWhatYouCanChange && <WhatIWantToChange />}
          {openPopUp && showWhatYouCanDo && <WhatYouCanDo />}
        </div>
      </main>
    </div>
  );
}
