import React from "react";

const SubTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center gap-4 special-sns-title-container">
      <div className="special-sns-title">{title}</div>
    </div>
  );
};

export default SubTitle;
