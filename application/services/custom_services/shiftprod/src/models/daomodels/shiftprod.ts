
import * as mongoose from 'mongoose';
import { Ienum } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const shiftprodSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   types: { type: Schema.Types.String, ref: 'shiftypes' },
   ienum: { type: String, enum: Ienum }
})

const shiftprodModel = mongoose.model('shiftprod', shiftprodSchema, 'shiftprod');
export default shiftprodModel;
