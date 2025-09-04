import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  CreditCard,
  Calendar,
  DollarSign,
  Calculator,
  CheckCircle,
  Smartphone,
  TrendingUp,
  Users,
  Clock,
  Shield,
  ArrowRight,
  Download,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface PaymentPlan {
  id: string;
  name: string;
  description: string;
  installments: number;
  frequency: string;
  discount: number;
  processingFee: number;
  benefits: string[];
  requirements: string[];
  popular: boolean;
}

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  processingFee: number;
  availability: string;
  features: string[];
}

interface PaymentPlansPageProps {
  theme: string;
  toggleTheme: () => void;
}

const PaymentPlansPage: React.FC<PaymentPlansPageProps> = ({
  theme,
  toggleTheme,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<PaymentPlan | null>(null);
  const [calculatorData, setCalculatorData] = useState({
    grade: "",
    boardingType: "day",
    paymentPlan: "termly",
  });
  const schoolConfig = getCurrentSchoolConfig();

  const paymentPlans: PaymentPlan[] = [
    {
      id: "annual",
      name: "Annual Payment Plan",
      description:
        "Pay the full academic year fees upfront and enjoy significant savings",
      installments: 1,
      frequency: "Once per year",
      discount: 5,
      processingFee: 0,
      benefits: [
        "5% discount on total fees",
        "No processing fees",
        "Priority enrollment",
        "Free payment protection insurance",
        "Guaranteed fee freeze for the year",
      ],
      requirements: [
        "Full payment by July 31st",
        "Valid payment method",
        "Signed payment agreement",
      ],
      popular: false,
    },
    {
      id: "termly",
      name: "Termly Payment Plan",
      description:
        "Spread payments across three terms for better cash flow management",
      installments: 3,
      frequency: "Once per term",
      discount: 0,
      processingFee: 1,
      benefits: [
        "Manageable payment amounts",
        "Flexible payment dates",
        "No large upfront payment",
        "Payment reminders included",
        "Easy budget planning",
      ],
      requirements: [
        "Payment due at start of each term",
        "Valid contact information",
        "Payment method on file",
      ],
      popular: true,
    },
    {
      id: "monthly",
      name: "Monthly Payment Plan",
      description: "Spread payments over 10 months for maximum affordability",
      installments: 10,
      frequency: "Monthly",
      discount: 0,
      processingFee: 2,
      benefits: [
        "Smallest monthly payments",
        "Automatic payment setup",
        "Payment flexibility",
        "Budget-friendly option",
        "Payment tracking dashboard",
      ],
      requirements: [
        "Automatic payment setup required",
        "Valid bank account or mobile money",
        "Payment authorization form",
      ],
      popular: false,
    },
    {
      id: "biannual",
      name: "Bi-Annual Payment Plan",
      description: "Pay twice per year with moderate savings and flexibility",
      installments: 2,
      frequency: "Twice per year",
      discount: 2,
      processingFee: 0.5,
      benefits: [
        "2% discount on total fees",
        "Reduced payment frequency",
        "Lower processing fees",
        "Flexible payment dates",
        "Payment plan protection",
      ],
      requirements: [
        "First payment by August 15th",
        "Second payment by January 15th",
        "Payment guarantee required",
      ],
      popular: false,
    },
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: "mobile-money",
      name: "Mobile Money",
      description:
        "MTN Mobile Money, Airtel Money, and other mobile payment services",
      icon: <Smartphone className="h-6 w-6 text-yellow-500" />,
      processingFee: 1.5,
      availability: "24/7",
      features: [
        "Instant payment confirmation",
        "SMS notifications",
        "Payment history tracking",
        "Automatic receipts",
      ],
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      description: "Direct bank transfer from your account to school account",
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      processingFee: 0,
      availability: "Business hours",
      features: [
        "No processing fees",
        "Secure transactions",
        "Bulk payment options",
        "Corporate payment support",
      ],
    },
    {
      id: "credit-card",
      name: "Credit/Debit Cards",
      description: "Visa, Mastercard, and local bank cards accepted",
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      processingFee: 2.5,
      availability: "24/7",
      features: [
        "International cards accepted",
        "Secure payment gateway",
        "Installment options",
        "Fraud protection",
      ],
    },
  ];

  const calculatePayment = () => {
    if (!calculatorData.grade) return { amount: 0, total: 0, savings: 0 };

    // Get base fee from school config
    let baseFee = 0;
    for (const [gradeRange, fees] of Object.entries(
      schoolConfig.tuition.grades
    )) {
      if (
        gradeRange.includes(calculatorData.grade) ||
        calculatorData.grade.includes(gradeRange.split("-")[0])
      ) {
        baseFee =
          calculatorData.boardingType === "boarding" ? fees.boarding : fees.day;
        break;
      }
    }

    const annualFee = baseFee * 3; // 3 terms per year
    const selectedPlan = paymentPlans.find(
      (plan) => plan.id === calculatorData.paymentPlan
    );

    if (!selectedPlan) return { amount: 0, total: 0, savings: 0 };

    const discount = annualFee * (selectedPlan.discount / 100);
    const processingFee = annualFee * (selectedPlan.processingFee / 100);
    const total = annualFee - discount + processingFee;
    const installmentAmount = total / selectedPlan.installments;

    return {
      amount: installmentAmount,
      total: total,
      savings: discount,
      installments: selectedPlan.installments,
    };
  };

  const paymentCalculation = calculatePayment();

  return (
    <div
      className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}
    >
      <Helmet>
        <title>Payment Plans | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Flexible payment plans at ${schoolConfig.name}. Annual, termly, monthly, and bi-annual payment options with various benefits and discounts.`}
        />
        <meta
          name="keywords"
          content={`${schoolConfig.name} payment plans, school fees payment, flexible payment, installment plans, ${schoolConfig.address.city} school payments`}
        />
        <meta
          property="og:title"
          content={`Payment Plans | ${schoolConfig.name}`}
        />
        <meta
          property="og:description"
          content={`Discover flexible payment options at ${schoolConfig.name}. Choose from various payment plans designed to suit different family budgets.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tredumo.com/admissions/payment-plans"
        />
        <link
          rel="canonical"
          href="https://tredumo.com/admissions/payment-plans"
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
            alt="Payment Plans"
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
              Flexible Financing
            </span>
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 mb-6 leading-tight`}
            >
              Payment <span className="text-primary-500">Plans</span>
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-white/80" : "text-black/80"
              } max-w-3xl mx-auto leading-relaxed`}
            >
              Choose from our flexible payment options designed to make quality
              education accessible to all families. Find a plan that works for
              your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Plans Grid */}
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
              Choose Your Payment Plan
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Flexible options designed to accommodate different family
              financial situations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  plan.popular
                    ? theme === "dark"
                      ? "bg-gradient-to-b from-primary-500/20 to-secondary-500/20 border-primary-500/30 ring-2 ring-primary-500/50"
                      : "bg-gradient-to-b from-primary-500/20 to-secondary-500/20 border-primary-500/30 ring-2 ring-primary-500/50"
                    : theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border relative`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-full ${
                        theme === "dark"
                          ? "bg-primary-500/20"
                          : "bg-primary-500/20"
                      } flex items-center justify-center mx-auto mb-4`}
                    >
                      <Calendar className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } mb-2`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-white/70" : "text-black/70"
                      } leading-relaxed`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-1">
                        {plan.installments}
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {plan.frequency}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {plan.discount > 0 && (
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            Discount
                          </span>
                          <span className="font-semibold text-green-500">
                            {plan.discount}%
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-white/70" : "text-black/70"
                          }`}
                        >
                          Processing Fee
                        </span>
                        <span
                          className={`font-semibold ${
                            plan.processingFee === 0
                              ? "text-green-500"
                              : "text-orange-500"
                          }`}
                        >
                          {plan.processingFee === 0
                            ? "Free"
                            : `${plan.processingFee}%`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {plan.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/80"
                                : "text-black/80"
                            }`}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                      {plan.benefits.length > 3 && (
                        <li
                          className={`text-sm ${
                            theme === "dark" ? "text-white/60" : "text-black/60"
                          } ml-6`}
                        >
                          +{plan.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  <button
                    className={`w-full px-4 py-3 rounded-lg transition-colors font-medium ${
                      plan.popular
                        ? "bg-primary-500 hover:bg-primary-600 text-white"
                        : theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-black/10 hover:bg-black/20 text-black"
                    }`}
                  >
                    {plan.popular ? "Choose This Plan" : "Select Plan"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Calculator */}
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
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mb-4`}
            >
              Payment Calculator
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto`}
            >
              Calculate your payment amounts based on different plans and see
              potential savings
            </p>
          </motion.div>

          <div
            className={`max-w-4xl mx-auto p-8 rounded-3xl ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } border backdrop-blur-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Calculator className="h-8 w-8 text-primary-500 mr-3" />
                  <h3
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Calculate Your Payments
                  </h3>
                </div>

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
                        onClick={() =>
                          setCalculatorData((prev) => ({ ...prev, grade }))
                        }
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          calculatorData.grade === grade
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

                <div>
                  <label
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-3`}
                  >
                    Boarding Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        id: "day",
                        name: "Day Student",
                        desc: "Goes home daily",
                      },
                      {
                        id: "boarding",
                        name: "Boarding",
                        desc: "Lives on campus",
                      },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() =>
                          setCalculatorData((prev) => ({
                            ...prev,
                            boardingType: type.id as "day" | "boarding",
                          }))
                        }
                        className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                          calculatorData.boardingType === type.id
                            ? "bg-primary-500 text-white border-primary-500"
                            : theme === "dark"
                            ? "bg-white/5 text-white border-white/20 hover:bg-white/10"
                            : "bg-black/5 text-black border-black/20 hover:bg-black/10"
                        }`}
                      >
                        <div className="font-medium">{type.name}</div>
                        <div
                          className={`text-sm ${
                            calculatorData.boardingType === type.id
                              ? "text-white/80"
                              : theme === "dark"
                              ? "text-white/60"
                              : "text-black/60"
                          }`}
                        >
                          {type.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } mb-3`}
                  >
                    Payment Plan
                  </label>
                  <div className="space-y-2">
                    {paymentPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() =>
                          setCalculatorData((prev) => ({
                            ...prev,
                            paymentPlan: plan.id,
                          }))
                        }
                        className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                          calculatorData.paymentPlan === plan.id
                            ? "bg-primary-500 text-white border-primary-500"
                            : theme === "dark"
                            ? "bg-white/5 text-white border-white/20 hover:bg-white/10"
                            : "bg-black/5 text-black border-black/20 hover:bg-black/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{plan.name}</div>
                            <div
                              className={`text-sm ${
                                calculatorData.paymentPlan === plan.id
                                  ? "text-white/80"
                                  : theme === "dark"
                                  ? "text-white/60"
                                  : "text-black/60"
                              }`}
                            >
                              {plan.installments} payment
                              {plan.installments > 1 ? "s" : ""} •{" "}
                              {plan.frequency}
                            </div>
                          </div>
                          {plan.discount > 0 && (
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                calculatorData.paymentPlan === plan.id
                                  ? "bg-white/20 text-white"
                                  : "bg-green-500/20 text-green-500"
                              }`}
                            >
                              {plan.discount}% off
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Results */}
              <div className="space-y-6">
                <div
                  className={`p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-primary-500/10 border-primary-500/20"
                      : "bg-primary-500/10 border-primary-500/20"
                  } border`}
                >
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Payment Breakdown
                  </h4>

                  {paymentCalculation.amount > 0 ? (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-500 mb-2">
                          UGX{" "}
                          {Math.round(
                            paymentCalculation.amount
                          ).toLocaleString()}
                        </div>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-white/70" : "text-black/70"
                          }`}
                        >
                          Per{" "}
                          {paymentPlans
                            .find((p) => p.id === calculatorData.paymentPlan)
                            ?.frequency.toLowerCase()}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            Total Annual Cost
                          </span>
                          <span
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            UGX{" "}
                            {Math.round(
                              paymentCalculation.total
                            ).toLocaleString()}
                          </span>
                        </div>

                        {paymentCalculation.savings > 0 && (
                          <div className="flex justify-between">
                            <span
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-white/70"
                                  : "text-black/70"
                              }`}
                            >
                              Annual Savings
                            </span>
                            <span className="font-semibold text-green-500">
                              UGX{" "}
                              {Math.round(
                                paymentCalculation.savings
                              ).toLocaleString()}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between">
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-white/70"
                                : "text-black/70"
                            }`}
                          >
                            Number of Payments
                          </span>
                          <span
                            className={`font-semibold ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {paymentCalculation.installments}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calculator
                        className={`h-12 w-12 mx-auto mb-4 ${
                          theme === "dark" ? "text-white/50" : "text-black/50"
                        }`}
                      />
                      <p
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Select grade level and boarding type to see payment
                        calculations
                      </p>
                    </div>
                  )}
                </div>

                {/* Payment Methods */}
                <div
                  className={`p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-black/5 border-black/10"
                  } border`}
                >
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Payment Methods
                  </h4>
                  <div className="space-y-3">
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
                              {method.availability}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`font-semibold ${
                              method.processingFee === 0
                                ? "text-green-500"
                                : "text-primary-500"
                            }`}
                          >
                            {method.processingFee === 0
                              ? "Free"
                              : `${method.processingFee}%`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {paymentCalculation.amount > 0 && (
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Set Up This Payment Plan
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plan Detail Modal */}
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } rounded-2xl p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {selectedPlan.name}
              </h3>
              <button
                onClick={() => setSelectedPlan(null)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Plan Overview
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-white/80" : "text-black/80"
                    } leading-relaxed`}
                  >
                    {selectedPlan.description}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    All Benefits
                  </h4>
                  <ul className="space-y-2">
                    {selectedPlan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-3`}
                  >
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedPlan.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="h-4 w-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-white/80" : "text-black/80"
                          }`}
                        >
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-primary-500/10" : "bg-primary-500/10"
                  }`}
                >
                  <h4
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-4`}
                  >
                    Plan Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Payment Frequency
                      </span>
                      <span
                        className={`font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {selectedPlan.frequency}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Number of Installments
                      </span>
                      <span
                        className={`font-semibold ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {selectedPlan.installments}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Discount
                      </span>
                      <span
                        className={`font-semibold ${
                          selectedPlan.discount > 0
                            ? "text-green-500"
                            : theme === "dark"
                            ? "text-white/50"
                            : "text-black/50"
                        }`}
                      >
                        {selectedPlan.discount > 0
                          ? `${selectedPlan.discount}%`
                          : "None"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={`${
                          theme === "dark" ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        Processing Fee
                      </span>
                      <span
                        className={`font-semibold ${
                          selectedPlan.processingFee === 0
                            ? "text-green-500"
                            : "text-orange-500"
                        }`}
                      >
                        {selectedPlan.processingFee === 0
                          ? "Free"
                          : `${selectedPlan.processingFee}%`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Choose This Plan
                  </button>
                  <button
                    className={`flex-1 ${
                      theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-black/10 hover:bg-black/20 text-black"
                    } px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center`}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Terms
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
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
                Ready to Set Up Your Payment Plan?
              </h2>
              <p
                className={`text-xl mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-white/80" : "text-black/80"
                }`}
              >
                Our finance team is ready to help you choose the best payment
                option for your family's needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium flex items-center justify-center group">
                  Contact Finance Office
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className={`${
                    theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  } px-8 py-4 rounded-full transition-colors font-medium flex items-center justify-center`}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Payment Guide
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

export default PaymentPlansPage;
