import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Utensils,
  Clock,
  Users,
  Heart,
  Leaf,
  Shield,
  Star,
  Calendar,
  ChefHat,
  Apple,
  Coffee,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import MegaNavbar from "../../components/navigation/MegaNavbar";
import MegaFooter from "../../components/navigation/MegaFooter";
import { getCurrentSchoolConfig } from "../../config/schoolConfig";

interface DiningServicesPageProps {
  theme: string;
  toggleTheme: () => void;
}

const DiningServicesPage: React.FC<DiningServicesPageProps> = ({ theme, toggleTheme }) => {
  const [selectedMealPlan, setSelectedMealPlan] = useState("full");
  const [activeMenu, setActiveMenu] = useState("today");
  const schoolConfig = getCurrentSchoolConfig();

  const mealPlans = {
    full: {
      name: "Full Meal Plan",
      description: "All meals included - breakfast, lunch, and dinner",
      price: 400000,
      meals: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      features: [
        "All daily meals included",
        "Variety of menu options",
        "Special dietary accommodations",
        "Weekend meals included"
      ],
      popular: true
    },
    lunch: {
      name: "Lunch Only Plan",
      description: "Lunch meals for day students",
      price: 200000,
      meals: ["Lunch"],
      features: [
        "Nutritious lunch meals",
        "Fresh daily preparation",
        "Vegetarian options available",
        "Flexible payment terms"
      ],
      popular: false
    },
    occasional: {
      name: "Pay-As-You-Go",
      description: "Flexible meal payments when needed",
      price: 8000,
      meals: ["Per meal"],
      features: [
        "No commitment required",
        "Pay per meal consumed",
        "All menu options available",
        "Perfect for occasional dining"
      ],
      popular: false
    }
  };

  const weeklyMenu = {
    today: {
      day: "Today",
      breakfast: {
        main: "Scrambled eggs with toast",
        sides: ["Fresh fruit", "Yogurt", "Orange juice"],
        options: ["Porridge", "Pancakes"]
      },
      lunch: {
        main: "Grilled chicken with rice",
        sides: ["Steamed vegetables", "Salad", "Fresh juice"],
        options: ["Vegetarian curry", "Fish fillet"]
      },
      dinner: {
        main: "Beef stew with posho",
        sides: ["Green beans", "Soup", "Water"],
        options: ["Chicken stir-fry", "Vegetable pasta"]
      }
    },
    tomorrow: {
      day: "Tomorrow",
      breakfast: {
        main: "Oatmeal with fruits",
        sides: ["Milk", "Honey", "Tea/Coffee"],
        options: ["Eggs", "Toast"]
      },
      lunch: {
        main: "Fish with sweet potatoes",
        sides: ["Cabbage", "Fruit", "Juice"],
        options: ["Chicken rice", "Bean stew"]
      },
      dinner: {
        main: "Pasta with meat sauce",
        sides: ["Garlic bread", "Salad", "Water"],
        options: ["Rice and beans", "Grilled fish"]
      }
    }
  };

  const diningFeatures = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Nutritious Meals",
      description: "Balanced meals planned by qualified nutritionists for growing students"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Fresh Ingredients",
      description: "Locally sourced, fresh ingredients prepared daily in our modern kitchen"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Food Safety",
      description: "Strict hygiene standards and food safety protocols maintained"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Dietary Accommodations",
      description: "Special diets for allergies, religious requirements, and health needs"
    }
  ];

  const currentMealPlan = mealPlans[selectedMealPlan as keyof typeof mealPlans];
  const currentMenu = weeklyMenu[activeMenu as keyof typeof weeklyMenu];

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} min-h-screen`}>
      <Helmet>
        <title>Dining Services | {schoolConfig.name}</title>
        <meta
          name="description"
          content={`Dining services at ${schoolConfig.name}. Nutritious meals, flexible meal plans, and dietary accommodations for all students.`}
        />
      </Helmet>

      <MegaNavbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80"
            alt="Dining Services"
            className="w-full h-full object-cover opacity-10"
          />
          <div className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-r from-black/90 to-black/70" : "bg-gradient-to-r from-white/90 to-white/70"}`} />
        </div>

        <div className="max-w-7xl mx-auto relative" style={{ marginTop: "6rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-medium tracking-widest text-primary-500 uppercase">
              Nourishing Excellence
            </span>
            <h1 className={`text-5xl md:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mt-4 mb-6 leading-tight`}>
              Dining <span className="text-primary-500">Services</span>
            </h1>
            <p className={`text-xl ${theme === "dark" ? "text-white/80" : "text-black/80"} max-w-3xl mx-auto leading-relaxed`}>
              Nutritious, delicious meals prepared with care to fuel student success. Experience our commitment to healthy eating and culinary excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Meal Plans
            </h2>
            <p className={`text-lg ${theme === "dark" ? "text-white/70" : "text-black/70"} max-w-2xl mx-auto`}>
              Choose the meal plan that best fits your needs and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(mealPlans).map(([key, plan]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  plan.popular
                    ? theme === "dark"
                      ? "bg-gradient-to-b from-primary-500/20 to-secondary-500/20 border-primary-500/30 ring-2 ring-primary-500/50"
                      : "bg-gradient-to-b from-primary-500/20 to-secondary-500/20 border-primary-500/30 ring-2 ring-primary-500/50"
                    : theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border-white/10"
                    : "bg-black/5 hover:bg-black/10 border-black/10"
                } border relative`}
                onClick={() => setSelectedMealPlan(key)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <Utensils className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                    <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-2`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"} mb-4`}>
                      {plan.description}
                    </p>
                    <div className="text-3xl font-bold text-primary-500 mb-2">
                      UGX {plan.price.toLocaleString()}
                    </div>
                    <div className={`text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                      {key === "occasional" ? "per meal" : "per term"}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Star className="h-4 w-4 text-primary-500 mr-3" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full px-4 py-3 rounded-lg transition-colors font-medium ${
                    plan.popular
                      ? "bg-primary-500 hover:bg-primary-600 text-white"
                      : theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  }`}>
                    {plan.popular ? "Choose This Plan" : "Select Plan"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Menu */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Today's Menu
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(weeklyMenu).map(([key, menu]) => (
                <button
                  key={key}
                  onClick={() => setActiveMenu(key)}
                  className={`px-6 py-3 rounded-full transition-colors ${
                    activeMenu === key
                      ? "bg-primary-500 text-white"
                      : theme === "dark"
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-black/10 hover:bg-black/20 text-black"
                  }`}
                >
                  {menu.day}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Breakfast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
            >
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-orange-500 mr-3" />
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  Breakfast
                </h3>
                <span className={`ml-auto text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                  7:00 - 8:00 AM
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Main Course
                  </h4>
                  <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                    {currentMenu.breakfast.main}
                  </p>
                </div>
                
                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Sides & Beverages
                  </h4>
                  <ul className="space-y-1">
                    {currentMenu.breakfast.sides.map((side, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {side}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Alternative Options
                  </h4>
                  <ul className="space-y-1">
                    {currentMenu.breakfast.options.map((option, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {option}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Lunch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
            >
              <div className="flex items-center mb-4">
                <Utensils className="h-6 w-6 text-green-500 mr-3" />
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  Lunch
                </h3>
                <span className={`ml-auto text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                  12:00 - 1:00 PM
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Main Course
                  </h4>
                  <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                    {currentMenu.lunch.main}
                  </p>
                </div>
                
                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Sides & Beverages
                  </h4>
                  <ul className="space-y-1">
                    {currentMenu.lunch.sides.map((side, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {side}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Alternative Options
                  </h4>
                  <ul className="space-y-1">
                    {currentMenu.lunch.options.map((option, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {option}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Dinner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"} border`}
            >
              <div className="flex items-center mb-4">
                <ChefHat className="h-6 w-6 text-purple-500 mr-3" />
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}>
                  Dinner
                </h3>
                <span className={`ml-auto text-sm ${theme === "dark" ? "text-white/60" : "text-black/60"}`}>
                  6:00 - 7:00 PM
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Main Course
                  </h4>
                  <p className={`text-sm ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
                    {currentMenu.dinner.main}
                  </p>
                </div>
                
                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Sides & Beverages
                  </h4>
                  <ul className="space-y-1">
                    {currentMenu.dinner.sides.map((side, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {side}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`font-medium mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                    Alternative Options
                  </h4>
                  <ul className="space-y-1">
                    {currentMenu.dinner.options.map((option, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2" />
                        <span className={`text-sm ${theme === "dark" ? "text-white/70" : "text-black/70"}`}>
                          {option}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dining Features */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-black"} mb-4`}>
              Why Choose Our Dining Services?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diningFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-black/5 hover:bg-black/10 border-black/10"} border transition-all duration-300 hover:scale-105`}
              >
                <div className={`p-4 rounded-xl inline-block mb-4 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-white" : "text-black"} mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${theme === "dark" ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MegaFooter theme={theme} />
    </div>
  );
};

export default DiningServicesPage;