import { useState } from 'react';

const SearchBarModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-500">
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <input type="text" className="w-full rounded" />
            <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBarModal;
