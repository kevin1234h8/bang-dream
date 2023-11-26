import PageTitle from "@/components/PageTitle";
import SpecialSubTitle from "@/components/SpecialSubTitle";
// import SystemPage from "@/components/page/SystemPage";
import { addHyphen } from "@/utils/stringUtils";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const SystemPage = dynamic(() => import("@/components/page/SystemPage"), {
  ssr: false,
});

const page = () => {
  return <SystemPage />;
};

export default page;
