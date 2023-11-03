import React from "react";
type PageTitleProps = {
  title: string;
  japaneseTitle: string;
};
const PageTitle = ({ title, japaneseTitle }: PageTitleProps) => {
  return (
    <div className="flex items-center justify-center character-background my-20 relative">
      <div className="character-background-deco"></div>
      <div className="character-background-text">{title}</div>
      <div className="character-background-text_japan">{japaneseTitle}</div>
    </div>  
  );
};

export default PageTitle;
