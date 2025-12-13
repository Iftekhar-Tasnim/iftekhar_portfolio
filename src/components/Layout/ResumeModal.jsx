import React from 'react';

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0a192f]/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#112240] rounded-xl border border-accent/20 shadow-2xl flex flex-col animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-xl font-mono text-accent font-bold">Resume Preview</h3>
          <div className="flex items-center gap-4">
            <a 
              href="/resume.pdf" 
              download
              className="px-4 py-2 bg-accent/10 border border-accent text-accent text-sm font-mono rounded hover:bg-accent/20 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-text-muted hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-grow bg-white/5 w-full h-full overflow-hidden rounded-b-xl relative">
            <iframe 
                src="/resume.pdf" 
                className="w-full h-full border-none"
                title="Resume Preview"
            ></iframe>
            
            {/* Fallback for mobile/unsupported browsers (iframe content usually ignored if src works, but good to have a message if it fails visually or logically) */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-text-muted">
                <p className="mb-4">Preview not available on this device.</p>
                <a href="/resume.pdf" download className="text-accent underline">Download PDF</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
