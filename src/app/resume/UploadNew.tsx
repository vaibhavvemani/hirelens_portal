"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Resume } from "@/types/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UploadNew = () => {
  const [formData, setFormData] = useState<Omit<Resume, "id">>({
    name: "",
    description: "",
    file: "",
    atsscore: 0,
    default: false,
    dateUpdated: new Date(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "aiscore" ? parseInt(value) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload this and save the URL
      setFormData((prev) => ({
        ...prev,
        file: URL.createObjectURL(file),
        dateUpdated: new Date(),
      }));
    }
  };

  const handleSwitch = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      default: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Resume:", formData);
    // You can now send this to your backend or state
  };

  return (
    <Card className="max-w-xl w-full mx-auto shadow-md border border-gray-200 rounded-2xl p-6 space-y-6 bg-white">
      <CardContent className="space-y-5 p-0">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <Label htmlFor="name">Resume Name</Label>
            <Input
              name="name"
              placeholder="e.g. Software Engineer Resume"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              name="description"
              placeholder="e.g. Tailored for frontend roles"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="file">Upload Resume</Label>
            <Input type="file" accept=".pdf" onChange={handleFileChange} />
            {formData.file && (
              <p className="text-xs text-muted-foreground break-all">
                Uploaded: {formData.file}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Label>Set as Default</Label>
            <Switch checked={formData.default} onCheckedChange={handleSwitch} />
          </div>

          <Button type="submit" className="w-full">
            Save Resume
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UploadNew;
