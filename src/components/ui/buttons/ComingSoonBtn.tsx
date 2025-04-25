import React from "react";

const ComingSoonBtn = ({ className = "" }) => {
  return (
    <button 
      className={`flex items-center gap-2 px-4 py-2 rounded-md bg-gray-400/70 text-[#141414] cursor-not-allowed ${className}`}
      disabled={true}
    >
      Próximamente <i className="fa-solid fa-lock text-[#141414] text-xl"></i>
    </button>
  );
};

export default ComingSoonBtn