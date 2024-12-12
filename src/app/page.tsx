import { CardLayout } from "@/components/CardLayout/CardLayout";
import { getStaticData } from "@/lib/data";

export default async function Home() {
  const data = await getStaticData();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">UNESCO World Heritage Sites</h1>
      <CardLayout siteData={data.query.row} />
    </div>
  );
}
