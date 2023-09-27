import { Request, Response } from 'express';
import {shiftypesDao} from '../dao/shiftypesDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let shiftypes = new shiftypesDao();

export class shiftypesService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpDelete')
     let  shiftypesId = req.params.id;
     shiftypes.GpDelete(shiftypesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpSearch')
     let  shiftypesData = req.query;
     shiftypes.GpSearch(shiftypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpSearchForUpdate')
     let  shiftypesData = req.body;
     shiftypes.GpSearchForUpdate(shiftypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpUpdate')
     let  shiftypesData = req.body;
     shiftypes.GpUpdate(shiftypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpGetEntityById')
     let  shiftypesId = req.params.id;
     shiftypes.GpGetEntityById(shiftypesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpGetAllValues')
     
     shiftypes.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpCreate')
     let  shiftypesData = req.body;
     shiftypes.GpCreate(shiftypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into shiftypesService.ts: GpGetNounCreatedBy')
     let  shiftypesData = { created_by: req.query.createdby };
     shiftypes.GpGetNounCreatedBy(shiftypesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from shiftypesService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}