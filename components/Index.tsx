import React from "react";
import IndexImage from "@/assets/index.svg";
import Image from "next/image";
import Link from "next/link";

type IndexProps = {
  redirectUrl: string;
  marginTop: string;
};

const Index = ({ redirectUrl, marginTop }: IndexProps) => {
  return (
    <Link
      href={redirectUrl}
      className={`flex items-center gap-3 index-wrapper ${marginTop}`}
    >
      <div className="bg-[#ffccde] p-3 rounded-full">
        <Image
          src={IndexImage}
          width={10}
          height={10}
          alt="IndexImage"
          className="index-image"
        />
      </div>
      <div className="text-[#b92b5d]">INDEX</div>
    </Link>
  );
};

export default Index;
