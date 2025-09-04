import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  DollarSign,
  Calculator,
  Download,
  CreditCard,
  Smartphone,
  Calendar,
  CheckCircle,
  Info,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import TuitionCalculator from "../../components/features/TuitionCalculator";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface FeesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const FeesPage: React.FC<FeesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState("termly");
  const schoolConfig = getCurrentSchoolConfig();

  const feeStructure = {
    tuition: {
      "S1-S2": { day: 800000, boarding: 1200000 },
      "S3-S4": { day: 900000, boarding: 1300000 },
      "S5-S6": { day: 1000000, boarding: 1400000 },
    },
    additionalFees: {
      "Registration Fee": 50000,
      "Uniform Package": 150000,
      "Books & Materials": 200000,
      "Transport Service": 300000,
      "Meals Program": 400000,
      "Activities Fee": 100000,
      "Medical Insurance": 75000,
      "Technology Fee": 125000,
    },
  };

  const paymentMethods = [
    {
      id: "mobile-money",
      name: "Mobile Money",
      description: "MTN Mobile Money, Airtel Money",
      icon: <Smartphone className="h-6 w-6 text-yellow-500" />,
      fee: "1.5%",
      popular: true,
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      description: "Direct bank transfer",
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      fee: "Free",
      popular: false,
    },
    {
      id: "credit-card",
      name: "Credit/Debit Card",
      description: "Visa, Mastercard",
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      fee: "2.5%",
      popular: false,
    },
  ];

  const paymentPlans = [
    {
      id: "annual",
      name: "Annual Payment",
      description: "Pay full year upfront",
      discount: 5,
      installments: 1,
      popular: false,
    },
    {
      id: "termly",
      name: "Termly Payment",
      description: "Pay per term",
      discount: 0,
      installments: 3,
      popular: true,
    },
    {
      id: "monthly",
      name: "Monthly Payment",
      description: "Spread over 10 months",
      discount: 0,
      installments: 10,
      popular: false,
    },
  ];

  const scholarshipPrograms = [
    {
      name: "Academic Excellence",
      coverage: "100%",
      slots: 10,
      color: "text-blue-500",
    },
    {
      name: "Sports Excellence",
      coverage: "50%",
      slots: 15,
      color: "text-green-500",
    },
    {
      name: "Need-Based Aid",
      coverage: "75%",
      slots: 25,
      color: "text-orange-500",
    },
    {
      name: "Leadership Grant",
      coverage: "40%",
      slots: 20,
      color: "text-purple-500",
    },
  ];

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Fee Structure & Payment Plans | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Transparent fee structure and flexible payment plans at ${schoolConfig.name}. Tuition fees, additional costs, and scholarship opportunities.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
            alt="Fee Structure"
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-r from-black/90 to-black/70"
                : "bg-gradient-to-r from-white/90 to-white/70"
            }`}
          />
        </div>

        <div
          className="max-w-7xl mx-auto relative"
          style={{ marginTop: "6rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Transparent Pricing
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Fee Structure &{" "}
              <span className="text-primary-500">Payment Plans</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Quality education with transparent pricing and flexible payment
              options to make excellence accessible to all families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              Tuition Fees 2024
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Competitive fees for world-class education with no hidden costs
            </p>
          </motion.div>

          {/* Tuition Table */}
          <div
            className={`rounded-3xl overflow-hidden ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } border backdrop-blur-xl mb-12`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead
                  className={`${
                    theme === "dark" ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  <tr>
                    <th
                      className={`text-left p-6 font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Grade Level
                    </th>
                    <th
                      className={`text-center p-6 font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Day Student
                    </th>
                    <th
                      className={`text-center p-6 font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Boarding Student
                    </th>
                    <th
                      className={`text-center p-6 font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Savings (Annual)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(feeStructure.tuition).map(
                    ([grade, fees], index) => (
                      <tr
                        key={grade}
                        className={`border-t ${
                          theme === "dark"
                            ? "border-white/10"
                            : "border-black/10"
                        }`}
                      >
                        <td
                          className={`p-6 font-medium ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {grade}
                        </td>
                        <td className="p-6 text-center">
                          <div className="text-xl font-bold text-primary-500">
                            UGX {fees.day.toLocaleString()}
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            }`}
                          >
                            per term
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          <div className="text-xl font-bold text-primary-500">
                            UGX {fees.boarding.toLocaleString()}
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            }`}
                          >
                            per term
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          <div className="text-lg font-bold text-green-500">
                            UGX{" "}
                            {Math.round(fees.day * 3 * 0.05).toLocaleString()}
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/60"
                                : "text-black/60"
                            }`}
                          >
                            with annual payment
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Fees */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } border backdrop-blur-xl`}
            >
              <h3
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Additional Fees
              </h3>
              <div className="space-y-4">
                {Object.entries(feeStructure.additionalFees).map(
                  ([fee, amount]) => (
                    <div
                      key={fee}
                      className="flex items-center justify-between"
                    >
                      <span
                        className={`${
                          theme === "dark" ? "text-white/80" : "text-black/80"
                        }`}
                      >
                        {fee}
                      </span>
                      <span className="font-semibold text-primary-500">
                        UGX {amount.toLocaleString()}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div
                  className={`p-4 rounded-lg ${
                    theme === "dark"
                      ? "bg-blue-500/10 border-blue-500/20"
                      : "bg-blue-500/10 border-blue-500/20"
                  } border`}
                >
                  <div className="flex items-center mb-2">
                    <Info className="h-5 w-5 text-blue-500 mr-2" />
                    <span
                      className={`font-medium ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Note
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    }`}
                  >
                    Additional fees are optional and can be paid separately
                    based on services required.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Plans */}
            <div
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              } border backdrop-blur-xl`}
            >
              <h3
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Payment Plans
              </h3>
              <div className="space-y-4">
                {paymentPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      selectedPaymentPlan === plan.id
                        ? "bg-primary-500/20 border-primary-500/50"
                        : theme === "dark"
                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                        : "bg-black/5 border-black/10 hover:bg-black/10"
                    }`}
                    onClick={() => setSelectedPaymentPlan(plan.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            selectedPaymentPlan === plan.id
                              ? "border-primary-500 bg-primary-500"
                              : theme === "dark"
                              ? "border-white/30"
                              : "border-black/30"
                          }`}
                        >
                          {selectedPaymentPlan === plan.id && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                          )}
                        </div>
                        <div>
                          <div
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {plan.name}
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {plan.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {plan.discount > 0 && (
                          <div className="text-green-500 font-semibold text-sm">
                            {plan.discount}% Discount
                          </div>
                        )}
                        {plan.popular && (
                          <div className="text-primary-500 font-semibold text-xs">
                            Most Popular
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4
                  className={`font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Payment Methods
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`p-4 rounded-lg ${
                        theme === "dark" ? "bg-white/5" : "bg-black/5"
                      } flex items-center justify-between`}
                    >
                      <div className="flex items-center">
                        {method.icon}
                        <div className="ml-3">
                          <div
                            className={`font-medium ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {method.name}
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            {method.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-semibold ${
                            method.fee === "Free"
                              ? "text-green-500"
                              : "text-primary-500"
                          }`}
                        >
                          {method.fee}
                        </div>
                        {method.popular && (
                          <div className="text-xs text-primary-500">
                            Popular
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <TuitionCalculator schoolConfig={schoolConfig} theme={theme} />
        </div>
      </section>

      {/* Scholarship Overview */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              Financial Aid Opportunities
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              We offer various scholarship and bursary programs to support
              deserving students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarshipPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-black/5 border-black/10"
                } border backdrop-blur-xl`}
              >
                <Award className={`h-12 w-12 mx-auto mb-4 ${program.color}`} />
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-black"
                  } mb-2`}
                >
                  {program.name}
                </h3>
                <div className={`text-2xl font-bold mb-2 ${program.color}`}>
                  {program.coverage}
                </div>
                <div
                  className={`text-sm ${
                    theme === "dark" ? "text-white/70" : "text-black/70"
                  }`}
                >
                  {program.slots} scholarships available
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center mx-auto">
              Explore All Scholarships
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/20"
                : "bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-black/20"
            }`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-3xl opacity-20 rounded-[3rem]" />

            <div className="relative">
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mb-6`}
              >
                Questions About Fees?
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Our admissions team is here to help you understand our fee
                structure and explore financial aid options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center">
                  Contact Admissions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Fee Guide
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default FeesPage;
