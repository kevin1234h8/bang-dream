import HomePage from "@/components/page/HomePage";
import { getBangDreamBand } from "@/lib/BangDreamApiHandler";

export default async function Home() {
  const bangDreamBandDatas = await getBangDreamBand("poppin party");
  const [bangDreamBands] = await Promise.all([bangDreamBandDatas]);
  return <HomePage bangDreamBands={bangDreamBands} />;
}
