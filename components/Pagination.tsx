import React from 'react';

const Pagination: React.FC = () => {
  return (
    <nav className="flex items-center justify-center pt-16" aria-label="Pagination">
      <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md">
        <span className="sr-only">Previous</span>
        Previous
      </a>
      <div className="items-center hidden sm:flex mx-4 space-x-2">
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md">1</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">2</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">3</a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">...</span>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">67</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">68</a>
      </div>
      <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md">
        Next
        <span className="sr-only">Next</span>
      </a>
    </nav>
  );
};

export default Pagination;