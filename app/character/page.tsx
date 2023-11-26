// import CharacterPage from "@/components/page/CharacterPage";
import { getBangDreamBands } from "@/lib/BangDreamApiHandler";
import dynamic from "next/dynamic";

const CharacterPage = dynamic(() => import("@/components/page/CharacterPage"), {
  ssr: false,
});
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const bangDreamBandDatas = await getBangDreamBands();
  const [bangDreamBands] = await Promise.all([bangDreamBandDatas]);

  return <CharacterPage bangDreamBands={bangDreamBands} />;
}
