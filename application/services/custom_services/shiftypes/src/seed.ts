import * as mongoose from 'mongoose';
import { productsSchema } from './models/daomodels/products';
import * as mongoose from 'mongoose';
import { modulesSchema } from './models/daomodels/modules';
import * as mongoose from 'mongoose';
import { shiftypesSchema } from './models/daomodels/shiftypes';

const shiftypesModel = mongoose.model('shiftypes', shiftypesSchema);

export class Seed {

    constructor() {

    }

    

}
