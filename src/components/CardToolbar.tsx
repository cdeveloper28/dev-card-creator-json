
import React from "react";
import { MoreHorizontal, FileJson, Copy, Download, RefreshCw, Code } from "lucide-react";

const CardToolbar: React.FC = () => {
  return (
    <div>
      <div className="editor-toolbar rounded-t-lg px-3 py-2.5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="window-dot dot-red"></div>
          <div className="window-dot dot-yellow"></div>
          <div className="window-dot dot-green"></div>
        </div>
        
        <div className="text-white font-medium text-sm flex items-center gap-2">
          <span>Business Card.json</span>
        </div>
        
        <div className="flex items-center">
          <button className="text-white opacity-70 hover:opacity-100 transition">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
      
      <div className="bg-[#1A1A1A] px-3 py-1.5 flex items-center space-x-4 border-b border-gray-700/30">
        <button className="text-gray-400 hover:text-white transition-colors">
          <FileJson size={16} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Copy size={16} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Download size={16} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <RefreshCw size={16} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Code size={16} />
        </button>
      </div>
    </div>
  );
};

export default CardToolbar;
