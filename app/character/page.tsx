import CharacterPage from "@/components/page/CharacterPage";
import { getBangDreamBands } from "@/lib/BangDreamApiHandler";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const bangDreamBandDatas = await getBangDreamBands();
  const [bangDreamBands] = await Promise.all([bangDreamBandDatas]);
  console.log(bangDreamBands);

  return <CharacterPage bangDreamBands={bangDreamBands} />;
}
