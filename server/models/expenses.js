import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
      uuid:{
            type:String,
            required: true,
      },
      employee:{
        uuid:{
            type: String,
            required: true,
        }, 
        first_name:{
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        last_name:{
            type: String,
            required: true,
            trim: true,
            lowercase: true
        }
      },
      description:{
        type: String,
        required: true
      },
      amount: {
        type: Number,
        trim: true,
      },
      currency:{
        type: String,
      },
      created_at:{
        type: Date,
      }
});

const Provider = mongoose.model('provider',expenseSchema );

export default Provider;

