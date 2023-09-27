import { Request, Response, NextFunction } from "express";
import { shiftypesController } from '../controller/shiftypesController';


export class Routes {
    private shiftypes: shiftypesController = new shiftypesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/shiftypes/:id').delete(this.shiftypes.GpDelete);
app.route('/shiftypes/get/search').get(this.shiftypes.GpSearch);
app.route('/shiftypes/get/update').put(this.shiftypes.GpSearchForUpdate);
app.route('/shiftypes').put(this.shiftypes.GpUpdate);
app.route('/shiftypes/:id').get(this.shiftypes.GpGetEntityById);
app.route('/shiftypes').get(this.shiftypes.GpGetAllValues);
app.route('/shiftypes').post(this.shiftypes.GpCreate);
app.route('/shiftypes/userid/created_by').get(this.shiftypes.GpGetNounCreatedBy);
     }

}