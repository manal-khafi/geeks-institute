import React from "react";

function Card({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center flex flex-col items-center">
      <div className="text-4xl mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default Card;