"use client";

import * as React from "react";
import Image from "next/image";
import Img from "../../public/bg.jpg";
import { fetchTabs } from "./utils/fetchTabs";

export default function ChooseUsSection() {
  const [tabs, setTabs] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    const getTabs = async () => {
      const tabsData = await fetchTabs();
      setTabs(tabsData);
    };

    getTabs();
  }, []);

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-sm font-semibold text-center mb-2 text-gray-600 uppercase tracking-wide">
          Why Choose Us
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
          We Are Different From Others
        </h3>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          cupiditate accusantium recusandae soluta explicabo hic! Facere unde
          nam accusantium natus?
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex justify-center items-center p-4">
            <div className="relative flex items-center">
              {tabs.length > 0 && (
                <div className="circle bg-red-500 z-10 shadow-md">
                  <div className="content text-white p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">
                    {tabs[activeTab].label ? tabs[activeTab].label : "Tab Label Here"}
                    </h2>
                    {tabs[activeTab].value ? tabs[activeTab].value : "Tab Balue Here"}
                  </div>
                </div>
              )}
              <div className="circle bg-red-500 -ml-[10%] overflow-hidden shadow-md border-4 border-white">
                <Image
                  src={Img}
                  alt="Placeholder image"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-between ${
                    index === activeTab
                      ? "bg-[#d23f57] text-white shadow-lg"
                      : "bg-[#eef1f4] text-gray-700 hover:bg-[#e2e7ec] hover:shadow-md"
                  }`}
                >
                  <span className="mr-2">&lt;</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
