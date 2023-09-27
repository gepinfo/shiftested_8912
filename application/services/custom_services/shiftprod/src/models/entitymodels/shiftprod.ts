
export interface shiftprod 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   types: { type: String, ref: 'shiftypes' },
   ienum: { type: Ienum }
}


export enum Ienum {
   OPEN = 'open',
   CLOSE = 'close',
   INPROGRESS = 'inprogress'
}



