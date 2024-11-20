import React, { Suspense } from 'react';
import { Spinner } from '@nextui-org/react';

const SuspenseSpinner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spinner size="lg" color="secondary"/>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseSpinner;