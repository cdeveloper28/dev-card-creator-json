
import React, { useState, useRef } from "react";
import CardForm, { BusinessCardData } from "@/components/CardForm";
import BusinessCard from "@/components/BusinessCard";
import { downloadCardAsImage, copyCardAsImage } from "@/lib/downloadUtils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download, Copy, FileJson, Github, Code } from "lucide-react";

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
    <div className="min-h-screen monochrome-bg py-12 px-4 relative overflow-hidden">
      {/* Minimal monochrome background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-gray-600 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-gray-700 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div className="inline-block mb-6 p-2 bg-gray-800/40 rounded-xl backdrop-blur-sm border border-gray-700">
            <Code className="text-gray-300 h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-200 mb-4">
            Developer <span className="text-gray-400">Business Card</span> Generator
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create your own code-styled business card as a JSON object.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-800/40 rounded-full text-sm text-gray-400 backdrop-blur-sm">
              <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
              Developer Aesthetic
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-800/40 rounded-full text-sm text-gray-400 backdrop-blur-sm">
              <Github size={14} />
              Open Source
            </span>
          </div>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="flex flex-col items-center">
            <div className="w-full p-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl mb-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h2 className="text-xl font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <FileJson className="text-gray-400" size={20} />
                  Enter Your Info
                </h2>
                <CardForm 
                  cardData={cardData} 
                  setCardData={setCardData} 
                  handleFormSubmit={handleFormSubmit}
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-10 w-full flex justify-center transition-transform duration-300 hover:-rotate-1 hover:scale-105">
              <BusinessCard cardData={cardData} cardRef={cardRef} />
            </div>
            
            <div className="flex gap-4 flex-wrap justify-center">
              <Button
                className="monochrome-button flex items-center gap-2 border border-gray-700"
                onClick={handleDownload}
                disabled={!formSubmitted}
                size="lg"
              >
                <Download size={18} />
                Download Card
              </Button>
              
              <Button
                variant="secondary"
                className="flex items-center gap-2 bg-gray-800/60 text-gray-300 border border-gray-700 hover:bg-gray-800"
                onClick={handleCopy}
                disabled={!formSubmitted}
                size="lg"
              >
                <Copy size={18} />
                Copy to Clipboard
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 px-4 py-10 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-800/40">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-800/60 flex items-center justify-center mx-auto mb-4">
                <Code className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Developer Identity</h3>
              <p className="text-gray-500">Showcase your developer brand with a stylish JSON-formatted card.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-800/60 flex items-center justify-center mx-auto mb-4">
                <Copy className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Copy Anywhere</h3>
              <p className="text-gray-500">Easily share your card anywhere with copy-to-clipboard functionality.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-800/60 flex items-center justify-center mx-auto mb-4">
                <Download className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Downloadable</h3>
              <p className="text-gray-500">Download your card as an image to use on social media or anywhere else.</p>
            </div>
          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800/40 pt-8">
          <p>
            Create your developer identity with a stylish JSON business card.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">About</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">GitHub</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
