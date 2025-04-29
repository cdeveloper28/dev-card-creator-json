
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
        
        <div className="text-white font-medium">
          Business Card.json
        </div>
        
        <div className="flex items-center">
          <button className="text-white opacity-70 hover:opacity-100">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
      
      <div className="bg-[#252525] px-3 py-1.5 flex items-center space-x-4 border-b border-gray-700">
        <FileJson className="text-gray-400" size={16} />
        <Copy className="text-gray-400" size={16} />
        <Download className="text-gray-400" size={16} />
        <RefreshCw className="text-gray-400" size={16} />
        <Code className="text-gray-400" size={16} />
        <div className="flex-1"></div>
        <button className="text-gray-400">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default CardToolbar;
