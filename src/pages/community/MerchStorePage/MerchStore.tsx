import type React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  ShoppingCart,
  Truck,
  Shield,
  Heart,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

interface MerchStorePageProps {
  theme: string;
}

const MerchStorePage: React.FC<MerchStorePageProps> = ({ theme }) => {
  const products = [
    {
      name: "Dev Hoodie",
      price: 45000, // UGX
      priceUSD: 12.99,
      description:
        "Comfortable cotton-blend hoodie featuring Uganda's colors and Tredumo logo.",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80",
      colors: ["Black & Yellow", "Red & Black", "Green & White"],
      sizes: ["S", "M", "L", "XL", "2XL"],
      badge: "Popular",
    },
    {
      name: "Dev Tech T-Shirt",
      price: 25000, // UGX
      priceUSD: 6.99,
      description:
        "Lightweight performance t-shirt celebrating Uganda's tech innovation.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
      colors: ["White", "Black", "Uganda Yellow"],
      sizes: ["S", "M", "L", "XL"],
      badge: "New",
    },
    {
      name: "Dev Cap",
      price: 30000, // UGX
      priceUSD: 8.99,
      description:
        "Adjustable cotton cap with embroidered 'Pearl of Africa' and Tredumo logo.",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80",
      colors: ["Black", "Uganda Red", "Forest Green"],
      sizes: ["One Size"],
    },
    {
      name: "Tred Laptop Sleeve",
      price: 35000, // UGX
      priceUSD: 9.99,
      description:
        "Protective sleeve inspired by Uganda's premier university with Tredumo branding.",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80",
      colors: ["Maroon & Gold"],
      sizes: ['13"', '15"', '16"'],
    },
    {
      name: "Dev Bottle",
      price: 20000, // UGX
      priceUSD: 5.99,
      description:
        "Stainless steel bottle celebrating the source of the Nile with Tredumo logo.",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80",
      colors: ["Blue & Silver", "Green & Gold", "Black & Yellow"],
      sizes: ["500ml"],
      badge: "Eco-Friendly",
    },
    {
      name: "Uganda Heritage Sticker Pack",
      price: 10000, // UGX
      priceUSD: 2.99,
      description:
        "Set of 8 vinyl stickers featuring Uganda landmarks and Tredumo designs.",
      image:
        "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80",
      colors: ["Multi-Color"],
      sizes: ["Standard Pack"],
    },
  ];

  const features = [
    {
      icon: <Truck className={`h-6 w-6 text-[#8a87d8]`} />,
      title: "Free Delivery in Kampala",
      description: "Free delivery within Kampala on orders over UGX 50,000",
    },
    {
      icon: <Shield className={`h-6 w-6 text-[#8a87d8]`} />,
      title: "Mobile Money Secure",
      description: "Safe payments via MTN Mobile Money & Airtel Money",
    },
    {
      icon: <Heart className={`h-6 w-6 text-[#8a87d8]`} />,
      title: "Made in Uganda",
      description: "Supporting local artisans and manufacturers",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={`${theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"}`}>
      <Helmet>
        <title>Uganda Merch Store | Tredumo</title>
        <meta
          name="description"
          content="Show your Uganda pride with official Tredumo merchandise. Hoodies, t-shirts, caps and more celebrating Uganda's tech innovation. Free delivery in Kampala."
        />
        <meta
          name="keywords"
          content="Uganda merchandise, Tredumo merch, Uganda tech clothing, Kampala delivery, mobile money payments, Pearl of Africa, Makerere University"
        />
        <meta property="og:title" content="Uganda Merch Store | Tredumo" />
        <meta
          property="og:description"
          content="Show your Uganda pride with official Tredumo merchandise celebrating the Pearl of Africa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tredumo.com/store" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uganda Merch Store | Tredumo" />
        <meta
          name="twitter:description"
          content="Show your Uganda pride with official Tredumo merchandise celebrating the Pearl of Africa."
        />
        <link rel="canonical" href="https://tredumo.com/store" />
      </Helmet>

      <style>{`
        .feature-card {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(138, 135, 216, 0.3),
            rgba(165, 163, 224, 0.2),
            rgba(193, 191, 234, 0.1)
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-4px);
        }

        .product-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 10;
        }
      `}</style>

      {/* Hero Section */}
      <section
        className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              Official Store
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } leading-tight tracking-tight`}
            >
              Uganda Pride
              <br />
              <span className="text-[#8a87d8]">Merch Store</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl ${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } max-w-2xl mx-auto leading-relaxed`}
            >
              Show your Uganda pride with our official merchandise celebrating
              the Pearl of Africa and innovation in education technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`feature-card p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border flex items-center space-x-4`}
              >
                <div
                  className={`p-3 rounded-xl ${
                    theme === "dark" ? "bg-[#8a87d8]/10" : "bg-[#8a87d8]/10"
                  } flex-shrink-0`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-white" : "text-black"
                    } mb-1`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    } leading-relaxed`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              Our Collection
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              Celebrate Uganda's
              <br />
              <span className="text-[#8a87d8]">Innovation Spirit</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card group rounded-3xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 hover:bg-[#8a87d8]/10 border-[#8a87d8]/10 hover:border-[#8a87d8]/20"
                    : "bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10"
                } backdrop-blur-xl border overflow-hidden transition-all duration-300`}
              >
                <div className="relative h-64 overflow-hidden">
                  {product.badge && (
                    <div className="product-badge">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          product.badge === "Popular"
                            ? "bg-[#8a87d8] text-white"
                            : product.badge === "New"
                            ? "bg-green-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={`text-xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      } leading-tight`}
                    >
                      {product.name}
                    </h3>
                    <div className="text-right">
                      <div className={`text-lg font-bold text-[#8a87d8]`}>
                        UGX {product.price.toLocaleString()}
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        ${product.priceUSD}
                      </div>
                    </div>
                  </div>

                  <p
                    className={`${
                      theme === "dark" ? "text-white/70" : "text-black/70"
                    } text-sm mb-6 leading-relaxed`}
                  >
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mb-2 block`}
                      >
                        Colors:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs rounded-full ${
                              theme === "dark"
                                ? "bg-[#8a87d8]/10 text-white border border-[#8a87d8]/20"
                                : "bg-[#8a87d8]/10 text-[#8a87d8] border border-[#8a87d8]/20"
                            }`}
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white/60" : "text-black/60"
                        } mb-2 block`}
                      >
                        Sizes:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-xs rounded-full ${
                              theme === "dark"
                                ? "bg-[#8a87d8]/10 text-white border border-[#8a87d8]/20"
                                : "bg-[#8a87d8]/10 text-[#8a87d8] border border-[#8a87d8]/20"
                            }`}
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    className={`w-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                        : "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                    } px-6 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide group`}
                  >
                    Add to Cart
                    <ShoppingCart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
            >
              Customer Love
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } mt-4 tracking-tight`}
            >
              What Ugandans
              <br />
              <span className="text-[#8a87d8]">Are Saying</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Nakato",
                location: "Kampala",
                review:
                  "Love my Tredumo Dev hoodie! Great quality and the colors are beautiful. Proud to wear it around campus.",
                rating: 5,
              },
              {
                name: "David Mukasa",
                location: "Entebbe",
                review:
                  "The Nile Source water bottle is amazing. Perfect for my daily commute and the design is stunning!",
                rating: 5,
              },
              {
                name: "Grace Namuli",
                location: "Jinja",
                review:
                  "Fast delivery to Jinja and excellent customer service. The sticker pack is perfect for my laptop!",
                rating: 5,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`feature-card p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                    : "bg-black/5 border-black/5"
                } backdrop-blur-xl border`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-[#8a87d8] fill-current"
                    />
                  ))}
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-white/80" : "text-black/80"
                  } mb-4 italic leading-relaxed`}
                >
                  "{review.review}"
                </p>
                <div>
                  <div
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {review.name}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    {review.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-32 px-4 sm:px-6 lg:px-8 ${
          theme === "dark" ? "bg-[#1a1a2e]" : "bg-white"
        } relative`}
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${
              theme === "dark"
                ? "bg-[#8a87d8]/5 border-[#8a87d8]/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-[#8a87d8]/30 via-[#a5a3e0]/30 to-[#c1bfea]/30 blur-3xl opacity-20 rounded-[3rem]"></div>

            <div className="relative">
              <span
                className={`text-sm font-medium tracking-widest text-[#8a87d8] uppercase`}
              >
                Bulk Orders & Custom Design
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                } mt-4 mb-8 tracking-tight`}
              >
                Need custom merchandise
                <br />
                for your institution?
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-white/70" : "text-black/70"
                } text-xl max-w-2xl mx-auto mb-8 leading-relaxed`}
              >
                Contact us for bulk orders, custom designs, or branded
                merchandise for your university, school, or organization across
                Uganda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                      : "bg-[#8a87d8] text-white hover:bg-[#a5a3e0]"
                  } px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}
                >
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/bulk-orders"
                  className={`${
                    theme === "dark"
                      ? "bg-[#8a87d8]/10 text-white hover:bg-[#8a87d8]/20"
                      : "bg-[#8a87d8]/10 text-[#8a87d8] hover:bg-[#8a87d8]/20"
                  } backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}
                >
                  View Bulk Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MerchStorePage;
