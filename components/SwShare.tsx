import { SocialMedia } from "@/type";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";

type SwShareProps = {
  socialMedias: SocialMedia[];
};

const SwShare = ({ socialMedias }: SwShareProps) => {
  return (
    <div className="flex items-center  gap-4">
      <div className="row-bullet-text text-[14px]">SHARE</div>
      {socialMedias.map((socialMedia) => {
        return (
          <div>
            <Link href={socialMedia.redirectUrl}>
              <CldImage
                width={1200}
                height={1000}
                className="w-[20px]"
                src={socialMedia.image}
                alt={socialMedia.sns}
              ></CldImage>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SwShare;
