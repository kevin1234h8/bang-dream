// import HomePage from "@/components/page/HomePage";
import { getBangDreamBand } from "@/lib/BangDreamApiHandler";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/components/page/HomePage"), {
  ssr: false,
});
export default async function Home() {
  const bangDreamBandDatas = await getBangDreamBand("poppin party");
  const [bangDreamBands] = await Promise.all([bangDreamBandDatas]);
  return <HomePage bangDreamBands={bangDreamBands} />;
}
