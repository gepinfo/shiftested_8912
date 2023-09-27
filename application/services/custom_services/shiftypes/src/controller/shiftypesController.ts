import { Request, Response } from 'express';
import { shiftypesService } from '../service/shiftypesService';
import { CustomLogger } from '../config/Logger'
let shiftypes = new shiftypesService();

export class shiftypesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    shiftypes.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into shiftypesController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from shiftypesController.ts: GpGetNounCreatedBy');
    })}


}