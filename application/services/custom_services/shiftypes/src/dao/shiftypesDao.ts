import * as mongoose from 'mongoose';
import shiftypesModel from '../models/daomodels/shiftypes';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class shiftypesDao {
    private shiftypes = shiftypesModel;
    constructor() { }
    
    public async GpDelete(shiftypesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpDelete');

    

    
    
    
    this.shiftypes.findByIdAndRemove(shiftypesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(shiftypesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(shiftypesData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.shiftypes.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(shiftypesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpSearchForUpdate');

    

    
    
    
    this.shiftypes.findOneAndUpdate({ _id: shiftypesData._id }, shiftypesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(shiftypesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpUpdate');

    

    
    
    
    this.shiftypes.findOneAndUpdate({ _id: shiftypesData._id }, shiftypesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(shiftypesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpGetEntityById');

    

    
    
    
    this.shiftypes.findById(shiftypesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpGetAllValues');

    

    
    
    
    this.shiftypes.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(shiftypesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpCreate');

    let temp = new shiftypesModel(shiftypesData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(shiftypesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into shiftypesDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.shiftypes.aggregate(([
                        { $match: { $and: [{ created_by: shiftypesData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from shiftypesDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}