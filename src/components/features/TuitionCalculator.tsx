import React, { useState, useEffect } from "react";
import { Calculator, DollarSign, Users, Home, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { SchoolConfig } from "../../config/schoolConfig";
import { getCurrentTheme } from "../../config/themeConfig";

interface TuitionCalculatorProps {
  schoolConfig: SchoolConfig;
  theme: string;
}

const TuitionCalculator: React.FC<TuitionCalculatorProps> = ({
  schoolConfig,
  theme,
}) => {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [boardingType, setBoardingType] = useState<"day" | "boarding">("day");
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  const themeConfig = getCurrentTheme(schoolConfig.themeId);

  useEffect(() => {
    calculateTotal();
  }, [selectedGrade, boardingType, additionalServices]);

  const calculateTotal = () => {
    if (!selectedGrade) {
      setTotalCost(0);
      return;
    }

    let baseFee = 0;

    // Find the grade category
    for (const [gradeRange, fees] of Object.entries(
      schoolConfig.tuition.grades
    )) {
      if (
        gradeRange.includes(selectedGrade) ||
        selectedGrade.includes(gradeRange.split("-")[0])
      ) {
        baseFee = boardingType === "boarding" ? fees.boarding : fees.day;
        break;
      }
    }

    // Add additional services
    const additionalCost = additionalServices.reduce((sum, service) => {
      return sum + (schoolConfig.tuition.additionalFees[service] || 0);
    }, 0);

    setTotalCost(baseFee + additionalCost);
  };

  const handleServiceToggle = (service: string) => {
    setAdditionalServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-8 rounded-3xl ${
        theme === "dark"
          ? "bg-white/5 border-white/10"
          : "bg-black/5 border-black/10"
      } backdrop-blur-xl border`}
    >
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-primary-500 mr-3" />
        <h3
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Tuition Calculator
        </h3>
      </div>

      <div className="space-y-6">
        {/* Grade Selection */}
        <div>
          <label
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-white/70" : "text-black/70"
            } mb-3`}
          >
            Select Grade Level
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {schoolConfig.grades.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  selectedGrade === grade
                    ? "bg-primary-500 text-white border-primary-500"
                    : theme === "dark"
                    ? "bg-white/5 text-white border-white/20 hover:bg-white/10"
                    : "bg-black/5 text-black border-black/20 hover:bg-black/10"
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>

        {/* Boarding Type */}
        <div>
          <label
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-white/70" : "text-black/70"
            } mb-3`}
          >
            Boarding Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setBoardingType("day")}
              className={`p-4 rounded-lg border transition-all duration-300 flex items-center ${
                boardingType === "day"
                  ? "bg-primary-500 text-white border-primary-500"
                  : theme === "dark"
                  ? "bg-white/5 text-white border-white/20 hover:bg-white/10"
                  : "bg-black/5 text-black border-black/20 hover:bg-black/10"
              }`}
            >
              <Users className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Day Student</div>
                <div className="text-sm opacity-70">Goes home daily</div>
              </div>
            </button>

            <button
              onClick={() => setBoardingType("boarding")}
              className={`p-4 rounded-lg border transition-all duration-300 flex items-center ${
                boardingType === "boarding"
                  ? "bg-primary-500 text-white border-primary-500"
                  : theme === "dark"
                  ? "bg-white/5 text-white border-white/20 hover:bg-white/10"
                  : "bg-black/5 text-black border-black/20 hover:bg-black/10"
              }`}
            >
              <Home className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Boarding</div>
                <div className="text-sm opacity-70">Lives on campus</div>
              </div>
            </button>
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <label
            className={`block text-sm font-medium ${
              theme === "dark" ? "text-white/70" : "text-black/70"
            } mb-3`}
          >
            Additional Services (Optional)
          </label>
          <div className="space-y-3">
            {Object.entries(schoolConfig.tuition.additionalFees).map(
              ([service, cost]) => (
                <label
                  key={service}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={additionalServices.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span
                    className={`ml-3 flex-1 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {service}
                  </span>
                  <span
                    className={`text-sm ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    UGX {cost.toLocaleString()}
                  </span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Total Cost Display */}
        <div
          className={`p-6 rounded-2xl ${
            theme === "dark"
              ? "bg-primary-500/10 border-primary-500/20"
              : "bg-primary-500/10 border-primary-500/20"
          } border`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DollarSign className="h-6 w-6 text-primary-500 mr-3" />
              <div>
                <div
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Total Annual Cost
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  {selectedGrade
                    ? `${selectedGrade} - ${boardingType}`
                    : "Select grade and type"}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary-500">
                UGX {totalCost.toLocaleString()}
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                }`}
              >
                ≈ ${(totalCost / 3700).toFixed(0)} USD
              </div>
            </div>
          </div>
        </div>

        {/* Payment Plans */}
        {totalCost > 0 && (
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Payment Plan Options
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border`}
              >
                <div className="font-medium text-primary-500 mb-2">
                  Annual Payment
                </div>
                <div
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  UGX {totalCost.toLocaleString()}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  5% discount applied
                </div>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border`}
              >
                <div className="font-medium text-primary-500 mb-2">
                  Termly Payment
                </div>
                <div
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  UGX {Math.round(totalCost / 3).toLocaleString()}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Per term (3 terms)
                </div>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border`}
              >
                <div className="font-medium text-primary-500 mb-2">
                  Monthly Payment
                </div>
                <div
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  UGX {Math.round(totalCost / 10).toLocaleString()}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  Per month (10 months)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="pt-4">
          <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
            <BookOpen className="h-5 w-5 mr-2" />
            Apply for Admission
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TuitionCalculator;
