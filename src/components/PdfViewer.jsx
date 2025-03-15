import React from 'react';
import { useParams } from 'react-router-dom';

function PdfViewer() {
    const { lang } = useParams();
    const resumePath = lang === "tr"
        ? "/assets/KadirOzerOzturk-CV.pdf"
        : "/assets/KadirOzerOzturk-CV-ENG.pdf";

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
            <iframe src={resumePath} className="w-full h-full" title="Resume Viewer"></iframe>
        </div>
    );
}

export default PdfViewer;
