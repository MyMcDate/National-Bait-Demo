// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[85vh] w-full overflow-hidden shadow-2xl transform transition-all duration-300 ease-out scale-100 hover:scale-[1.01] relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 rounded-2xl blur-sm opacity-75 animate-pulse"></div>
        
        {/* Main modal content */}
        <div className="relative bg-white rounded-2xl">
          {/* Header with gradient background */}
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-md transition-all duration-200 transform hover:scale-110"
            >
              ×
            </button>
          </div>
          
          {/* Content area */}
          <div className="p-8 overflow-y-auto max-h-[65vh] bg-gradient-to-b from-white to-gray-50">
            {children}
          </div>
          
          {/* Footer with close button */}
          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end rounded-b-2xl">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;