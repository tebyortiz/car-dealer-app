import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-no-repeat bg-cover filter blur-sm scale-110"></div>
      </div>

      <div className="relative z-10 h-full overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default Layout;
