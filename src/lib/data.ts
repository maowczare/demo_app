import fsPromises from "fs/promises";
import path from "path";

export interface UnescoSite {
  category: string[];
  danger: string[];
  http_url: string[];
  id_number: string[];
  image_url: string[];
  latitude: string[];
  longitude: string[];
  site: string[];
  short_description: string[];
}

export interface UnescoData {
  query: {
    $: {
      columns: string;
      rows: string;
    };
    row: UnescoSite[];
  };
}

export async function getStaticData(): Promise<UnescoData> {
  try {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromises.readFile(filePath, "utf-8");
    return JSON.parse(jsonData) as UnescoData;
  } catch (error) {
    console.error("Error reading UNESCO data file:", error);
    throw new Error("Failed to load UNESCO data");
  }
}
