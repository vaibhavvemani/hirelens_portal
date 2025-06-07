"use client";

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { useState } from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

interface PdfViewerProps {
  fileUrl: string;
}

const PDFThumbnail: React.FC<PdfViewerProps> = ({ fileUrl }) => {
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

  return (
    <div className="h-[160px] w-full overflow-y-scroll hide-scroller flex flex-col p-0 overflow-x-hidden cursor-pointer translate-x-1">
      <div className="flex hide-scroller p-0">
        <Worker workerUrl={'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'}>
          <Viewer 
            fileUrl={fileUrl} 
            plugins={[pageNavigationPluginInstance]}
            onDocumentLoad={handleDocumentLoad}
            onPageChange={handlePageChange}
            defaultScale={0.2}
          />
        </Worker>
      </div>


    </div>
  );
};

export default PDFThumbnail;