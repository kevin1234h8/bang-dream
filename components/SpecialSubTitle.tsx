import React from "react";

type SpecialSubTitleProps = {
  specialSubTitle: string;
  id?: string;
};

const SpecialSubTitle = ({ specialSubTitle, id }: SpecialSubTitleProps) => {
  return (
    <div id={id} className="special-sns-band-name mt-[30px] mb-[40px] py-2">
      {specialSubTitle}
    </div>
  );
};

export default SpecialSubTitle;
