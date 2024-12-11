import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Modal({ item, setShowModal }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#fae0c1] p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faTimes} className="text-xl" />
        </button>

        {/* Modal Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#B73C21] mb-4">{item.name}</h2>
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4"
            />
          )}
          <p className="text-gray-700 mb-4">{item.description}</p>
          <p className="text-lg font-bold text-[#B73C21]">${item.price}</p>
          {item.type && (
            <p className="text-gray-600 italic mt-2">
              Type: {item.type}, ABV: {item.abv}, Size: {item.size}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
