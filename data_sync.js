import { writeFile } from "node:fs/promises";
import { parseStringPromise } from "xml2js";

const xmlUrl = "https://whc.unesco.org/en/list/xml/";

// Define the fields we want to keep
const requiredFields = [
  "category",
  "danger",
  "http_url",
  "id_number",
  "image_url",
  "latitude",
  "longitude",
  "site",
  "short_description",
];

function filterFields(data) {
  return {
    query: {
      $: data.query.$,
      row: data.query.row.map((row) => {
        const filteredRow = {};
        requiredFields.forEach((field) => {
          if (row[field]) {
            filteredRow[field] = row[field];
          }
        });
        return filteredRow;
      }),
    },
  };
}

async function fetchAndConvert() {
  try {
    const response = await fetch(xmlUrl);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`,
      );
    }

    const xmlData = await response.text();
    // Parse the XML data
    const jsonObj = await parseStringPromise(xmlData);
    // Filter the JSON object to keep only desired fields
    const filteredData = filterFields(jsonObj);
    const jsonString = JSON.stringify(filteredData, null, 2);
    await writeFile("data.json", jsonString, "utf8");
    console.log("Data has been fetched, converted, and saved to data.json");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

await fetchAndConvert();
