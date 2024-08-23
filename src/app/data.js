import { sql } from "@vercel/postgres";

export async function fetchDistrictSize() {
    
}

export async function fetchDistrictBreweries(districtName) {
    try{
        const data = await sql`SELECT * FROM breweries 
                           WHERE district = ${districtName};`;

        return data.rows; 
    }
    catch (error){
        console.error("Database error", error); 
        throw new error('Failed to fetch breweries'); 
    }
}