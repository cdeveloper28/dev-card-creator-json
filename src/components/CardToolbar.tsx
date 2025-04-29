
import React from "react";
import { MoreHorizontal, FileJson, Copy, Download, RefreshCw, Code } from "lucide-react";

const CardToolbar: React.FC = () => {
  return (
    <div>
      <div className="editor-toolbar rounded-t-lg px-3 py-2.5 flex justify-between items-center backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <div className="window-dot dot-red ring-1 ring-red-800/50"></div>
          <div className="window-dot dot-yellow ring-1 ring-yellow-800/50"></div>
          <div className="window-dot dot-green ring-1 ring-green-800/50"></div>
        </div>
        
        <div className="text-white font-medium text-sm flex items-center gap-2">
          <FileJson size={14} className="text-blue-400" />
          <span>Business Card.json</span>
        </div>
        
        <div className="flex items-center">
          <button className="text-white opacity-70 hover:opacity-100 transition">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
      
      <div className="bg-[#252525] px-3 py-1.5 flex items-center space-x-4 border-b border-gray-700/70 backdrop-blur-md">
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
        <div className="flex-1"></div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default CardToolbar;
