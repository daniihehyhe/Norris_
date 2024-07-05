'use client'

import { FC } from 'react';

const loading: FC = () => {
  return (
    <main className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-90 z-50">
      <div className="border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </main>
  );
};

export default loading;