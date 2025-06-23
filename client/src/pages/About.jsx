import React from 'react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-slate-800 text-center mb-8 border-b-4 border-slate-300 inline-block pb-2">
        About Real Estate
      </h1>

      <section className="mb-10">
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Real Estate is a premier agency specializing in buying, selling, and renting properties in top-tier locations.
          With a customer-first philosophy and years of experience, our mission is to simplify the real estate journey and
          help our clients make confident decisions.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Whether you're a first-time buyer or a seasoned investor, our dedicated team will guide you through every step,
          offering personalized support and market insight that sets us apart from the rest.
        </p>
      </section>

      <section className="bg-slate-100 rounded-2xl p-6 shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>🏡 In-depth knowledge of local markets</li>
          <li>🤝 Transparent and honest communication</li>
          <li>📊 Data-driven strategies to maximize value</li>
          <li>🚀 Fast, reliable, and stress-free process</li>
          <li>🔍 Tailored property searches based on your needs</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Integrity", desc: "We believe in transparency, honesty, and doing the right thing—always." },
            { title: "Commitment", desc: "We’re fully dedicated to helping you achieve your real estate goals." },
            { title: "Innovation", desc: "We use the latest tools and tech to find you the best opportunities." },
          ].map((val, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">{val.title}</h3>
              <p className="text-slate-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Meet Our Expert Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "AMAN", role: "Lead Agent", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "RIYA", role: "Client Manager", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Rahul Verma", role: "Market Analyst", img: "https://randomuser.me/api/portraits/men/47.jpg" },
          ].map((member, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-4 w-64 text-center shadow hover:shadow-lg transition">
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
              />
              <h4 className="text-lg font-medium text-slate-800">{member.name}</h4>
              <p className="text-slate-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
