import dotenv from 'dotenv';
import Provider from '../models/expenses';

dotenv.config();

export const saveStreams = async(stream) => {
  try {
        const data = new Provider(stream);
        await data.save();
    } catch(error) {
        return (
          {
            status: 400,
            message: 'Oops failed to add expense',
            error
        });
    }
}