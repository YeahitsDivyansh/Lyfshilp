import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
}
