import Preregi from "@/assets/bg_preregi_overlay.png";
import Image from "next/image";
import AppStore from "@/assets/img_badge_appstore.png";
import PlayStore from "@/assets/img_badge_googleplay.png";
import DistributedText from "@/assets/txt_cta_release.png";
const Footer = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" fixed z-[200] h-[80px] sm:bottom-[-27px] md:bottom-0">
        <div className="flex items-center justify-center">
          <Image
            className="relative sm:w-[475px] md:w-[800px]"
            src={Preregi}
            width={900}
            alt="Preregi"
          />
          <div className="absolute flex items-center sm:gap-6 md:gap-12">
            <div className="bg-black">
              <Image
                src={DistributedText}
                alt="好評配信中"
                className="p-2 sm:w-[70px] md:w-[180px]"
                width={180}
              />
            </div>
            <a
              target="_blank"
              href="https://app.adjust.com/xf8xmuy?redirect=https%3A%2F%2Fapps.apple.com%2Fjp%2Fapp%2Fid1195834442"
            >
              <Image
                src={AppStore}
                alt="AppStore"
                width={150}
                className="p-2 sm:w-[95px] md:w-[150px]"
              />
            </a>
            <a
              target="_blank"
              href="https://app.adjust.com/i6ek911?redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fhl%3Dja%26id%3Djp.co.craftegg.band"
            >
              <Image
                src={PlayStore}
                alt="PlayStore"
                width={150}
                className="p-2 sm:w-[95px]  md:w-[150px] "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
