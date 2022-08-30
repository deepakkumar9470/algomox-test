import { readFileSync } from 'fs'
import path from 'path'
const __dirname = path.resolve();
export const  loadAirData =  () => {


    JSON.parse(readFileSync(path.join(__dirname + 'airlines.json')));
}
        //  console.log(data)
        //  return data;


// loadAirData()


// export default loadAirData;