"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const tocItems = [
  { 
    id: "overview", 
    label: "Overview of CUET", 
    icon: "📚",
    description: "Understand the exam structure, eligibility criteria, and key information about CUET"
  },
  { 
    id: "achievers", 
    label: "CUET Achievers - 2024", 
    icon: "🏆",
    description: "Success stories and insights from top performers who cracked CUET 2024"
  },
  { 
    id: "programs", 
    label: "CUET Prep. Programs", 
    icon: "📖",
    description: "Explore our comprehensive preparation programs tailored for CUET success"
  },
  { 
    id: "mentors", 
    label: "Our Mentors", 
    icon: "👨‍🏫",
    description: "Meet our experienced faculty who will guide you through your CUET journey"
  },
  { 
    id: "about", 
    label: "About CUET 2026", 
    icon: "ℹ️",
    description: "Latest updates, exam dates, and important notifications for CUET 2026"
  },
  { 
    id: "coaching", 
    label: "CUET Coaching Programs", 
    icon: "🎓",
    description: "Detailed information about our classroom, online, and hybrid coaching options"
  },
  { 
    id: "universities", 
    label: "CUET University List", 
    icon: "🏛️",
    description: "Complete list of universities accepting CUET scores with admission details"
  },
  { 
    id: "articles", 
    label: "CUET UG Articles", 
    icon: "📝",
    description: "Expert articles, study tips, and preparation strategies for CUET UG"
  },
  { 
    id: "colleges", 
    label: "Top Colleges of DU", 
    icon: "⭐",
    description: "Discover the best Delhi University colleges accepting CUET scores"
  },
  { 
    id: "courses", 
    label: "CUET Popular Courses", 
    icon: "📊",
    description: "Explore trending courses, career prospects, and subject combinations"
  },
  { 
    id: "faqs", 
    label: "CUET UG FAQs", 
    icon: "❓",
    description: "Get answers to commonly asked questions about CUET UG exam"
  },
];

export default function TableOfContents() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const listRef = useRef(null);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const handleItemClick = (id) => {
    setActiveItem(id);
    // Smooth scroll to section (if sections exist on page)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleItemKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleItemClick(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-8 px-4">
      {/* Banner Section */}
  

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto">
        {/* Introduction Text */}
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          {/* Header */}
          <button
            className="w-full flex items-center justify-between px-8 py-6 bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition-all duration-300 group"
            onClick={toggle}
            onKeyDown={handleKeyDown}
            aria-expanded={open}
            aria-controls="toc-list"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📑</span>
              <span className="text-xl font-bold text-gray-800">
                Table of Contents
              </span>
            </div>
            <span
              className={`text-2xl transition-transform duration-300 ease-out ${
                open ? "rotate-180" : ""
              } group-hover:scale-110`}
              aria-hidden="true"
            >
              ⌄
            </span>
          </button>

          {/* List */}
          <div
            id="toc-list"
            ref={listRef}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Description */}
            <div className="px-6 pt-4 pb-2 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
              <p className="text-gray-700 text-sm leading-relaxed">
                Navigate through our comprehensive CUET guide - from exam basics and preparation strategies to university lists and expert mentorship. Each section is designed to support your journey to success.
              </p>
            </div>

            <div className="p-4 space-y-2">
              {tocItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  onKeyDown={(e) => handleItemKeyDown(e, item.id)}
                  className={`w-full flex flex-col gap-1 px-6 py-4 rounded-xl text-left transition-all duration-200 ${
                    activeItem === item.id
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-[1.02]"
                      : "bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 text-gray-700 hover:shadow-md hover:transform hover:translate-x-2"
                  }`}
                  style={{
                    animationDelay: `${idx * 30}ms`,
                  }}
                >
                  <div className="flex items-center gap-4 w-full">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="font-medium text-base flex-grow">
                      {item.label}
                    </span>
                    <span
                      className={`text-sm transition-opacity ${
                        activeItem === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      ✓
                    </span>
                  </div>
                  <p className={`text-xs ml-10 ${
                    activeItem === item.id 
                      ? "text-orange-50" 
                      : "text-gray-600"
                  }`}>
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

      
      </section>
    </div>
  );
}