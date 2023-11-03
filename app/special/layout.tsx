import SpecialLayoutPage from "@/components/page/SpecialLayoutPage";
import { getSocialMedia } from "@/lib/SocialMediaApi";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const socialMediaDatas = await getSocialMedia();
  const [socialMedias] = await Promise.all([socialMediaDatas]);
  return <SpecialLayoutPage children={children} socialMedias={socialMedias} />;
};

export default layout;
