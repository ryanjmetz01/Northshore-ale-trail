import * as cheerio from 'cheerio';
import axios from 'axios';

export async function getStoupTapList() {
    try {
        const response = await axios.get('https://www.stoupbrewing.com/kenmore/');
        
        const tapList = [];
        const $ = cheerio.load(response.data);
        
        const $beers = $('.grid a.reveal-toggle');
        
        $beers.each((index, element) => {
            const beerName = $(element).find('.title').text();
            const abv = $(element).find('.abv').text()

            tapList.push([beerName, abv]); 
        });
        
        return tapList;
    } catch (error) {
        console.error('Error getting tap list from Stoup Brewing:', error);
        throw error; 
    }
}
