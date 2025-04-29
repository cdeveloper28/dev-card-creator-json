
import React from "react";
import { BusinessCardData } from "./CardForm";
import CardToolbar from "./CardToolbar";

interface BusinessCardProps {
  cardData: BusinessCardData;
  cardRef: React.RefObject<HTMLDivElement>;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ cardData, cardRef }) => {
  const lineHeight = 28; // Height of each line
  
  return (
    <div
      ref={cardRef}
      className="w-full max-w-md rounded-lg overflow-hidden shadow-2xl code-editor glassmorphism-card"
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        transform: "perspective(1000px) rotateX(2deg)",
        position: "relative",
      }}
    >
      <div className="bg-blur-overlay"></div>
      <CardToolbar />
      <div className="editor-body p-0 relative z-10">
        <div className="flex text-base">
          {/* Line numbers */}
          <div className="line-numbers py-3 px-3 select-none w-8">
            <div style={{ height: lineHeight }}>1</div>
            <div style={{ height: lineHeight }}>2</div>
            <div style={{ height: lineHeight }}>3</div>
            <div style={{ height: lineHeight }}>4</div>
            <div style={{ height: lineHeight }}>5</div>
            <div style={{ height: lineHeight }}>6</div>
            <div style={{ height: lineHeight }}>7</div>
          </div>
          
          {/* JSON content */}
          <div className="py-3 flex-1">
            <div style={{ height: lineHeight }} className="whitespace-pre">
              <span className="text-gray-400">Business Card.json</span>
            </div>
            <div style={{ height: lineHeight }} className="whitespace-pre">
              <span className="json-punctuation">{"{"}</span>
            </div>
            <div style={{ height: lineHeight }} className="whitespace-pre pl-4">
              <span className="json-property">"name"</span>
              <span className="json-punctuation">: </span>
              <span className="json-value">"{cardData.name}"</span>
              <span className="json-punctuation">,</span>
            </div>
            <div style={{ height: lineHeight }} className="whitespace-pre pl-4">
              <span className="json-property">"title"</span>
              <span className="json-punctuation">: </span>
              <span className="json-value">"{cardData.title}"</span>
              <span className="json-punctuation">,</span>
            </div>
            <div style={{ height: lineHeight }} className="whitespace-pre pl-4">
              <span className="json-property">"email"</span>
              <span className="json-punctuation">: </span>
              <span className="json-value">"{cardData.email}"</span>
              <span className="json-punctuation">,</span>
            </div>
            <div style={{ height: lineHeight }} className="whitespace-pre pl-4">
              <span className="json-property">"link"</span>
              <span className="json-punctuation">: </span>
              <span className="json-value">"{cardData.link}"</span>
            </div>
            <div style={{ height: lineHeight }} className="whitespace-pre">
              <span className="json-punctuation">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
