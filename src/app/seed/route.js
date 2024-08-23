import { db } from '@vercel/postgres'; 
import { breweries, districts } from '../placeholder-data';

const client = await db.connect(); 

async function seedBreweries() {
    await client.sql`
        CREATE TABLE IF NOT EXISTS breweries (
         name VARCHAR(50) PRIMARY KEY,
         district VARCHAR(50) REFERENCES districts(name) NOT NULL,
         website VARCHAR(100), 
         logo VARCHAR(50) UNIQUE
        );
    `; 

    const insertedBreweries = await Promise.all(
        breweries.map(
            (brew) => 
            client.sql`
                INSERT INTO breweries (name, district, website, logo)
                VALUES (${brew.name}, ${brew.district}, ${brew.website}, ${brew.logo})
                ON CONFLICT (name) DO NOTHING; 
                `,
        ),
    ); 

    return insertedBreweries; 
}

async function seedDistrict() {
    await client.sql`
        CREATE TABLE IF NOT EXISTS districts (
         name VARCHAR(50) PRIMARY KEY, 
         size INTEGER
        ); 
    `; 

    const insertedDistricts = await Promise.all(
        districts.map(
            (dist) => 
               client.sql`
                    INSERT INTO districts (name, size)
                    VALUES (${dist.name}, ${dist.size})
                    ON CONFLICT (name) DO NOTHING; 
                `,  
        ),
    ); 
    
    return insertedDistricts; 
}

export async function GET(){
    try{
        await client.sql`BEGIN`; 
        await seedDistrict(); 
        await seedBreweries(); 
        await client.sql`COMMIT`; 

        return Response.json({message: 'Database seeded successfully'}); 
    } catch (error) {
        await client.sql`ROLLBACK`;
        return Response.json({error}, {status: 500}); 
    }
}