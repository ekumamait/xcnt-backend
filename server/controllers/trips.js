import request from 'request';
import stream from 'event-stream';
import dotenv from 'dotenv';

dotenv.config();

const { HOST } = process.env;

const Trips = {
    /**
     * Get A trIP
     * @param {object} res
     * @returns {object} Trip object 
     */
      async GetAllTrips(req,res) {
        request  
            .get(HOST)          
            .pipe(stream.split())   
            .pipe(stream.parse())
            .pipe(stream.map(function (data) { 
                console.log(data);
                return res.data
                }))
      }
    }

    export default Trips;