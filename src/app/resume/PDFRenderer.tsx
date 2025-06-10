"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { useState } from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { Button } from "@/components/ui/button";
import { CloudUpload, Trash, Trash2 } from "lucide-react";

interface PDFRendererProps {
  fileUrl: string;
  width: number;
  height: number;
  scale: number;
  navigator: boolean;
}

const PDFRenderer: React.FC<PDFRendererProps> = ({
  fileUrl,
  width,
  height,
  scale,
  navigator
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const pageNavigationPluginInstance = pageNavigationPlugin();

  const handleDocumentLoad = (e: any) => {
    setTotalPages(e.doc.numPages);
    setCurrentPage(1);
  };

  const handlePageChange = (e: any) => {
    setCurrentPage(e.currentPage + 1);
  };

  const goToPage = (direction: "prev" | "next") => {
    if (direction === "next" && currentPage < totalPages) {
      pageNavigationPluginInstance.jumpToPage(currentPage); // 0-based
    } else if (direction === "prev" && currentPage > 1) {
      pageNavigationPluginInstance.jumpToPage(currentPage - 2); // 0-based
    }
  };

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="flex flex-col items-center overflow-hidden no-shadow-pdf gap-2 hide-scroller"
    >
      <div className="flex-1 w-full overflow-y-scroll hide-scroller items-center">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[pageNavigationPluginInstance]}
            onDocumentLoad={handleDocumentLoad}
            onPageChange={handlePageChange}
            defaultScale={scale}
          />
        </Worker>
      </div>
      {navigator && (
      <div className="flex justify-around w-full mt-2">
        <div className="w-full flex items-center px-4 gap-3">
          <Button
            onClick={() => goToPage("prev")}
            disabled={currentPage === 1}
            className="text-sm px-3 py-1"
          >
            ← Prev
          </Button>
          <p className="text-sm font-semibold bg-accent px-2 py-1 rounded-sm">
            Page {currentPage} of {totalPages}
          </p>
          <Button
            onClick={() => goToPage("next")}
            disabled={currentPage === totalPages}
            className="text-sm px-3 py-1"
          >
            Next →
          </Button>
        </div>
        <div className="flex gap-1">
          <Button>
            <CloudUpload />
            Replace file
          </Button>
          <Button className="bg-red-500">
            <Trash2 />
            Delete
          </Button>
        </div>
      </div>
      )}
    </div>
  );
};

export default PDFRenderer;
