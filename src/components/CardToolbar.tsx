
import React from "react";

const CardToolbar: React.FC = () => {
  return (
    <div className="editor-toolbar rounded-t-lg px-3 py-2.5 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="window-dot dot-red"></div>
        <div className="window-dot dot-yellow"></div>
        <div className="window-dot dot-green"></div>
      </div>
      
      <div className="text-white font-medium">
        Business Card.json
      </div>
      
      <div className="flex items-center">
        <button className="text-white opacity-70 hover:opacity-100">
          ⋯
        </button>
      </div>
    </div>
  );
};

export default CardToolbar;
