
import React from "react";
import { MoreHorizontal, FileJson } from "lucide-react";

const CardToolbar: React.FC = () => {
  return (
    <div>
      <div className="editor-toolbar rounded-t-lg px-3 py-2.5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="window-dot dot-red ring-1 ring-red-800/50"></div>
          <div className="window-dot dot-yellow ring-1 ring-yellow-800/50"></div>
          <div className="window-dot dot-green ring-1 ring-green-800/50"></div>
        </div>
        
        <div className="text-gray-300 font-medium text-sm flex items-center gap-2">
          <FileJson size={14} className="text-gray-400" />
          <span>Business Card.json</span>
        </div>
        
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-gray-200 transition">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardToolbar;
