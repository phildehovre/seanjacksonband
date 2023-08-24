import React from "react";

function Page({ children }: { children: React.ReactNode }) {
  return <div className="h-full w-full items-stretch">{children}</div>;
}

export default Page;
