import PageTitle from "@/components/PageTitle";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-auto max-w-7xl">
      <PageTitle title={"CHARACTER"} japaneseTitle="キャラクター" />
      {children}
    </div>
  );
};

export default layout;
