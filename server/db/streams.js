import request from 'request';
import stream from 'event-stream';
import dotenv from 'dotenv';
import Provider from '../controllers/expenses';

dotenv.config();


const { HOST } = process.env;

export const expenseStream = async() => {
    request  
        .get(HOST)          
        .pipe(stream.split())   
        .pipe(stream.parse())
        .pipe(stream.map(function (data) { 
            // console.log(data);
            Provider.saveStreams(data);
            }))
}

