
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export type BusinessCardData = {
  name: string;
  title: string;
  email: string;
  link: string;
};

interface CardFormProps {
  cardData: BusinessCardData;
  setCardData: React.Dispatch<React.SetStateAction<BusinessCardData>>;
  handleFormSubmit: (e: React.FormEvent) => void;
}

const CardForm: React.FC<CardFormProps> = ({
  cardData,
  setCardData,
  handleFormSubmit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cardData.name.trim()) {
      toast.error("Name is required");
      return;
    }
    
    if (!cardData.title.trim()) {
      toast.error("Title is required");
      return;
    }
    
    if (!cardData.email.trim()) {
      toast.error("Email is required");
      return;
    }
    
    if (!cardData.link.trim()) {
      toast.error("Link is required");
      return;
    }
    
    handleFormSubmit(e);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Enter Your Developer Info</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={validateForm} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name (with @ if desired)</Label>
            <Input
              id="name"
              name="name"
              placeholder="@username_"
              value={cardData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Software Engineer"
              value={cardData.title}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={cardData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="link">Website/Link</Label>
            <Input
              id="link"
              name="link"
              placeholder="yourwebsite.com"
              value={cardData.link}
              onChange={handleChange}
            />
          </div>
          
          <Button type="submit" className="w-full">
            Generate Card
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardForm;
