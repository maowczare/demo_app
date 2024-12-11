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
    }
}

export async function loadUnescoData(): Promise<UnescoSite[]> {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json() as UnescoData;
        return data.query.row;
    } catch (error) {
        console.error('Error loading UNESCO data:', error);
        return [];
    }
}