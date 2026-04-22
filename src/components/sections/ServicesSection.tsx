"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "../ui/animated-button";

const services = [
  {
    title: "Garden Design",
    description: "Creating beautiful, functional layouts tailored to your style and space.",
    duration: "2 Days",
    price: "100$"
  },
  {
    title: "Hardscaping",
    description: "Integrating stone, wood, and concrete to build durable outdoor structures.",
    duration: "4 Days",
    price: "200$"
  },
  {
    title: "Planting & Softscaping",
    description: "Selecting and installing the perfect flora for your unique environment.",
    duration: "6 Days",
    price: "800$"
  },
  {
    title: "Lawn Care & Maintenance",
    description: "Keeping your grass green, healthy, and precisely manicured year-round.",
    duration: "5 Days",
    price: "700$"
  },
  {
    title: "Irrigation & Drainage",
    description: "Smart watering systems to ensure your garden thrives sustainably.",
    duration: "2 Days",
    price: "300$"
  },
  {
    title: "Outdoor Lighting",
    description: "Illuminating your pathways and features for safe, magical evenings.",
    duration: "1 Days",
    price: "100$"
  }
];

export function ServicesSection() {
  return (
    <section id="service" className="py-24 px-6 bg-[#FFFFFF]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-semibold tracking-wider text-[#3A5F45] uppercase mb-4 block">
              (services)
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C241F]">
              Landscaping Solutions Tailored for You
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedButton variant="outline">Book our Services</AnimatedButton>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="group p-8 rounded-2xl bg-[#F9F8F6] border border-[#DCE5DE] hover:border-[#3A5F45] transition-colors duration-300"
            >
              <h4 className="text-2xl font-bold text-[#1E3A2B] mb-4">{service.title}</h4>
              <p className="text-[#4A6046] mb-8 min-h-[60px]">{service.description}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-[#DCE5DE]">
                <div className="flex flex-col">
                  <span className="text-xs text-[#4A6046] uppercase font-semibold">timeline</span>
                  <span className="text-lg font-semibold text-[#1C241F]">{service.duration}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-[#4A6046] uppercase font-semibold">starting at</span>
                  <span className="text-lg font-semibold text-[#1C241F]">{service.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
