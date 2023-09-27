
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const shiftypesSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   description: { type: String }
})

const shiftypesModel = mongoose.model('shiftypes', shiftypesSchema, 'shiftypes');
export default shiftypesModel;
