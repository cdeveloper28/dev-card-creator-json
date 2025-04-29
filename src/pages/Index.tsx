
import React, { useState, useRef } from "react";
import CardForm, { BusinessCardData } from "@/components/CardForm";
import BusinessCard from "@/components/BusinessCard";
import { downloadCardAsImage, copyCardAsImage } from "@/lib/downloadUtils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download, Copy, FileJson } from "lucide-react";

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardData, setCardData] = useState<BusinessCardData>({
    name: "@fr0gger_",
    title: "Malware Therapist",
    email: "my@email.com",
    link: "securitybreak.io",
  });
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast.success("Business card generated!");
  };
  
  const handleDownload = async () => {
    const success = await downloadCardAsImage(cardRef);
    if (success) {
      toast.success("Business card downloaded!");
    } else {
      toast.error("Failed to download card.");
    }
  };
  
  const handleCopy = async () => {
    const success = await copyCardAsImage(cardRef);
    if (success) {
      toast.success("Business card copied to clipboard!");
    } else {
      toast.error("Failed to copy to clipboard. Download instead.");
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute top-3/4 left-1/3 w-60 h-60 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-500 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            Developer <span className="text-yellow-400">Business Card.json</span> Generator
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Create your own code-styled business card as a JSON object. Fill in your details and download or copy your card.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-center">
            <CardForm 
              cardData={cardData} 
              setCardData={setCardData} 
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-6 w-full flex justify-center">
              <BusinessCard cardData={cardData} cardRef={cardRef} />
            </div>
            
            <div className="flex gap-4">
              <Button
                className="flex items-center gap-2"
                onClick={handleDownload}
                disabled={!formSubmitted}
              >
                <Download size={18} />
                Download Card
              </Button>
              
              <Button
                variant="secondary"
                className="flex items-center gap-2"
                onClick={handleCopy}
                disabled={!formSubmitted}
              >
                <Copy size={18} />
                Copy to Clipboard
              </Button>
            </div>
          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>
            Create your developer identity with a stylish JSON business card.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
