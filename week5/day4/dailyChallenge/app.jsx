import React from "react";
import Header from "./components/header";
import Card from "./components/card";
import Contact from "./components/contact";

const features = [
  {
    id: 1,
    icon: "🚀",
    title: "Fast Performance",
    description: "Our landing page loads quickly and runs smoothly across all devices.",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Easy to Use",
    description: "Our landing page is simple and intuitive for users to navigate.",
  },
  {
    id: 3,
    icon: "📱",
    title: "Modern Design",
    description: "Our landing page features a clean, modern, and responsive design.",
  },
];

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-gray-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Bonus Hero Section */}
        <section className="py-16 px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Build a Responsive Landing Page with React
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            A mini-project to practice building responsive landing pages using React components.
          </p>
          <a
            href="#features"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg shadow-sm transition-colors"
          >
            Get Started
          </a>
        </section>

        {/* Three Feature Cards */}
        <section id="features" className="pb-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default App;