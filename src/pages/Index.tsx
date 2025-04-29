import React, { useState, useRef } from "react";
import CardForm, { BusinessCardData } from "@/components/CardForm";
import BusinessCard from "@/components/BusinessCard";
import { downloadCardAsImage, copyCardAsImage } from "@/lib/downloadUtils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Download, Copy, FileJson, Github, Code, Share2 } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4 relative overflow-hidden">
      {/* Enhanced abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-80 h-80 rounded-full bg-blue-600 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-500 blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-emerald-500 blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <div className="inline-block mb-6 p-2 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-800">
            <Code className="text-yellow-400 h-8 w-8" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-yellow-400 mb-6">
            Developer <span className="text-yellow-400">Business Card.json</span> Generator
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Create your own code-styled business card as a JSON object. Fill in your details and share your developer identity.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
              100% Genuine Developer Aesthetic
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              <Github size={14} />
              Open Source
            </span>
          </div>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="flex flex-col items-center">
            <div className="w-full p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mb-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <FileJson className="text-blue-400" size={20} />
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
            <div className="mb-10 w-full flex justify-center hover:-rotate-1 transition-transform duration-300">
              <BusinessCard cardData={cardData} cardRef={cardRef} />
            </div>
            
            <div className="flex gap-4 flex-wrap justify-center">
              <Button
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
                onClick={handleDownload}
                disabled={!formSubmitted}
                size="lg"
              >
                <Download size={18} />
                Download Card
              </Button>
              
              <Button
                variant="secondary"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={handleCopy}
                disabled={!formSubmitted}
                size="lg"
              >
                <Copy size={18} />
                Copy to Clipboard
              </Button>
              
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-700 hover:border-gray-500"
                disabled={!formSubmitted}
                size="lg"
              >
                <Share2 size={18} />
                Share
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-24 px-4 py-10 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Developer Identity</h3>
              <p className="text-gray-400">Showcase your developer brand with a stylish JSON-formatted card.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <Copy className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Copy Anywhere</h3>
              <p className="text-gray-400">Easily share your card anywhere with copy-to-clipboard functionality.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Download className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Downloadable</h3>
              <p className="text-gray-400">Download your card as an image to use on social media or anywhere else.</p>
            </div>
          </div>
        </div>
        
        <footer className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>
            Create your developer identity with a stylish JSON business card.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
