"use client";

import { useState } from "react";
import { Course, Module } from "@/types/courses";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, ChevronDown, Download, Eye, File, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CourseContentProps {
  course: Course;
}

interface PreviewFile {
  id: number;
  name: string;
  description: string;
  fileURL: string;
}

const CourseContent = ({ course }: CourseContentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [previewFile, setPreviewFile] = useState<PreviewFile | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Handle file preview
  const handlePreview = (file: any) => {
    setPreviewFile({
      id: file.id,
      name: file.name,
      description: file.description,
      fileURL: file.fileURL,
    });
    setIsPreviewOpen(true);
  };

  // Handle file download
  const handleDownload = async (file: any) => {
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = file.fileURL;
      link.download = file.name || "download";
      link.target = "_blank";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: Show success message
      console.log(`Downloading: ${file.name}`);
    } catch (error) {
      console.error("Download failed:", error);
      // Optional: Show error message to user
    }
  };

  function findTheLatestDate(module: Module): string {
    if (!module.Files || module.Files.length === 0) {
      return "No files yet";
    }

    const validDates = module.Files.filter(
      (file) =>
        file.dateUploaded instanceof Date && !isNaN(file.dateUploaded.getTime())
    ).map((file) => file.dateUploaded.getTime());

    if (validDates.length === 0) {
      return "No valid dates";
    }

    const latestDate = new Date(Math.max(...validDates));
    const now = new Date();
    const diffInMilliseconds = now.getTime() - latestDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays < 1) {
      const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
      if (diffInHours < 1) {
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
        return diffInMinutes <= 1
          ? "Updated just now"
          : `Updated ${diffInMinutes} minutes ago`;
      }
      return diffInHours === 1
        ? "Updated 1 hour ago"
        : `Updated ${diffInHours} hours ago`;
    }

    if (diffInDays < 30) {
      return diffInDays === 1
        ? "Updated 1 day ago"
        : `Updated ${diffInDays} days ago`;
    }

    if (diffInDays < 365) {
      const diffInMonths = Math.floor(diffInDays / 30);
      return `Updated ${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }

    return "More than a year ago";
  }

  function getFileTypeFromURL(url: string): string {
    const extension = url.split(".").pop()?.split("?")[0].toLowerCase();
    if (!extension) return "Unknown";

    const knownTypes: { [key: string]: string } = {
      pdf: "PDF Document",
      doc: "Word Document",
      docx: "Word Document",
      xls: "Excel Spreadsheet",
      xlsx: "Excel Spreadsheet",
      ppt: "PowerPoint Presentation",
      pptx: "PowerPoint Presentation",
      txt: "Text File",
      jpg: "JPEG Image",
      jpeg: "JPEG Image",
      png: "PNG Image",
      gif: "GIF Image",
      zip: "ZIP Archive",
      rar: "RAR Archive",
    };

    return knownTypes[extension] || extension.toUpperCase() + " File";
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {course.modules.map((module, index) => {
          const isOpen = openIndex === index;

          return (
            <Collapsible
              key={index}
              open={isOpen}
              onOpenChange={(open) => setOpenIndex(open ? index : null)}
            >
              <Card className="p-0 w-full flex items-start overflow-hidden gap-0">
                <CollapsibleTrigger className="w-full [&[data-state=open]>div]:bg-secondary/50">
                  <CardHeader
                    className={`p-3 flex flex-col items-start bg-secondary transition-colors ${
                      isOpen ? "border-b-2" : ""
                    }`}
                  >
                    <div className="flex w-full justify-between items-center">
                      <div>
                        <CardTitle className="text-left">
                          {module.name}
                        </CardTitle>
                        <CardDescription className="flex flex-row gap-2 items-center">
                          <p className="font-medium">
                            {module.Files.length} files
                          </p>
                          <p className="text-lg leading-tight">•</p>
                          <p>{findTheLatestDate(module)}</p>
                        </CardDescription>
                      </div>
                      <div className="flex w-fit items-center gap-3">
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-semibold text-muted-foreground">
                            {module.progress}% Completed
                          </p>
                          <Progress
                            value={module.progress}
                            className="w-[130px]"
                          />
                        </div>
                        <ChevronDown
                          className={`transition-transform duration-500 ease-in-out ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up w-full p-0">
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-3 px-2 py-3">
                      {module.Files.map((file) => (
                        <Card key={file.id} className="w-full p-2 rounded-md">
                          <CardHeader className="p-0 gap-0 flex justify-between">
                            <div className="flex flex-col gap-0">
                              <CardTitle>{file.name}</CardTitle>
                              <CardDescription>
                                {file.description}
                              </CardDescription>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                className="flex gap-2"
                                onClick={() => handlePreview(file)}
                              >
                                <Eye size={16} /> Preview
                              </Button>
                              <Button
                                className="flex gap-2"
                                onClick={() => handleDownload(file)}
                              >
                                <Download size={16} /> Download
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="p-0 flex gap-1 text-muted-foreground items-center">
                            <div className="flex items-center gap-1">
                              <Calendar size={12} strokeWidth={2.5} />
                              <p className="text-xs font-medium">
                                {file.dateUploaded.toLocaleDateString()}
                              </p>
                            </div>
                            <p className="text-lg leading-tight transform -translate-y-[1px]">
                              •
                            </p>
                            <div className="flex items-center gap-1">
                              <File size={12} strokeWidth={2.5} />
                              <p className="text-xs font-medium">
                                {getFileTypeFromURL(file.fileURL)}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>

      {/* Preview Modal */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-xl font-semibold">
                  {previewFile?.name}
                </DialogTitle>
                <DialogDescription className="mt-1">
                  {previewFile?.description}
                </DialogDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => previewFile && handleDownload(previewFile)}
                >
                  <Download size={16} className="mr-1" />
                  Download
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPreviewOpen(false)}
                ></Button>
              </div>
            </div>
          </DialogHeader>
          <div className="flex-1 p-6 pt-4">
            {previewFile && (
              <div className="w-full h-[70vh] border rounded-lg overflow-hidden">
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                    previewFile.fileURL
                  )}&embedded=true`}
                  className="w-full h-full"
                  title={`Preview of ${previewFile.name}`}
                  frameBorder="0"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CourseContent;
