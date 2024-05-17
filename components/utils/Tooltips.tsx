import React, { useState } from "react";

interface IProps {
  text: string;
  children: React.ReactNode;
}
const Tooltip = ({ text, children }: IProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap before:absolute before:-top-full before:left-1/2 before:ml-2 before:-translate-x-1/2 before:translate-y-full before:border-8 before:rotate-180 before:border-gray-800 before:border-b-transparent before:border-l-transparent before:border-r-transparent">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
