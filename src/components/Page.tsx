import React from "react";

function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-items flex-col justify-center h-screen h p-20 items-center">
      {children}
    </div>
  );
}

export default Page;
