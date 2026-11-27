import React from "react";

function CelebrityCard({
  title,
  imageUrl,
  description,
  buttonLabel,
  buttonUrl,
}) {
  return (
    <div className="max-w-md bg-white text-gray-900 shadow rounded p-4 border border-gray-200 flex flex-col justify-between">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover rounded mb-3"
        />

        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>

      <div className="text-center">
        <a
          href={buttonUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}

export default CelebrityCard;