import React from "react";

type BangDreamMemberProfileProps = {
  title: string;
  description: string | number;
};

const BangDreamMemberProfile = ({
  title,
  description,
}: BangDreamMemberProfileProps) => {
  return (
    <div className="bg-white p-4 py-2 flex  text-xs  ">
      <div className="text-[#b92b5d] w-[120px] text-xs">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default BangDreamMemberProfile;
