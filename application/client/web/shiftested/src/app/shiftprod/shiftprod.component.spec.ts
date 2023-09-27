import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftprodComponent } from './shiftprod.component';
import { ShiftprodService } from './shiftprod.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

describe('ShiftprodComponent', () => {
  let component: ShiftprodComponent;
  let fixture: ComponentFixture<ShiftprodComponent>;
  let service: ShiftprodService;
  let httpClient: HttpClientTestingModule;
  let nzMessageService: NzMessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [
         HttpClientTestingModule,
        NzFormModule,
        NzMenuModule,
        NzLayoutModule,
        NzInputModule,
        NzTableModule,
        NzDropDownModule,
        NzSwitchModule,
        FormsModule,
        NzIconModule,
        NzButtonModule,
        NzSelectModule,
        NzModalModule,
        NzFormModule,
        NzPopconfirmModule,
        NzMessageModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ ShiftprodComponent ],
      providers: [ ShiftprodService, NzMessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftprodComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ShiftprodService);
    httpClient = TestBed.inject(HttpClient);
    nzMessageService = TestBed.inject(NzMessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //cancel nzmessage
  it('should call nzMessageService.info with the expected message', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    
    component.cancel();

    expect(nzMessageService.info).toHaveBeenCalledWith('click cancel');
  });

  // confirm delete
  it('should call nzMessageService.info with the expected message and Delete with the correct id', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    spyOn(component, 'Delete'); // Spy on the Delete method
    const data = { id: 1 };

    component.confirmDelete(data);

    expect(nzMessageService.info).toHaveBeenCalledWith('click confirm');
    expect(component.Delete).toHaveBeenCalledWith(data.id);
  });

   //show modal
  it('should set isVisibleCreate to true', () => {
    component.showModal();

    expect(component.isVisibleCreate).toBe(true);
  });
  //handleok
  it('should set handle ok isVisibleCreate and isVisibleUpdate to true', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleOk();

     
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });
  //handle cancel
  it('should set handlecancel isVisibleCreate and isVisibleUpdate to false', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleCancel();

 
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });






  // post create apps 
  it('should call PostAllshiftprodValues and reset shiftprod properties', () => {
    // Create a spy for the Create method of the service
    spyOn(service, 'PostAllshiftprodValues').and.returnValue(of({}));
  
    // Set values for shiftprod properties
    component.shiftprod.name = 'name Name';
    component.shiftprod.types = 'types Name';
    component.shiftprod.ienum = 'ienum Name';

    // Call the Create method
    component.Create();

    // Expect the PostAllshiftprodValues method to have been called with the shiftprod object
    expect(service.PostAllshiftprodValues).toHaveBeenCalledWith(component.shiftprod);

    // Expect the shiftprod properties to be reset
    expect(component.shiftprod.name).toBe('');
    expect(component.shiftprod.types).toBe('');
    expect(component.shiftprod.ienum).toBe('');

  });
  it('should log error on update PostAllshiftprodValues failure', () => {
    const error = new Error('PostAllshiftprodValues failed');
    spyOn(service, 'PostAllshiftprodValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Create();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // get all shiftypesGetAlls
  it('should fetch and assign the data from shiftypesGetAllValues shiftypesService', () => {
    const dummyData = [{ 
      _id: 1, 
      name: 'name 1',
      types: 'types 1',
      ienum: 'ienum 1',
    }]; // Replace with dummy data

    spyOn(service, 'GetAllshiftypesValues').and.returnValue(of(dummyData)); 

    component.shiftypesGetAllValues();

    expect(service.GetAllshiftypesValues).toHaveBeenCalled();
    expect(component.shiftypesitemArray).toEqual(dummyData);
  });
  it('should log error on update shiftypesGetAllValues failure', () => {
    const error = new Error('shiftypesGetAllValues failed');
    spyOn(service, 'GetAllshiftypesValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.shiftypesGetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });


  // GetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData:any = [{ 
      _id: 1, 
      name: 'name 1',
      types: 'types 1',
      ienum: 'ienum 1',
    }];
    spyOn(service, 'GetAllshiftprodValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAllshiftprodValues).toHaveBeenCalled();
    expect(component.listOfData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAllshiftprodValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  //update
  it('should clear UpdateshiftprodComponent shiftprod properties on successful update', () => {
    spyOn(service, 'Updateshiftprod').and.returnValue(of({}));

    component.Update();

    expect(component.shiftprod.name).toBe('');
    expect(component.shiftprod.types).toBe('');
    expect(component.shiftprod.ienum).toBe('');
  });

  it('should log error on update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Updateshiftprod').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // delete the entity
  it('should call DeleteshiftprodValues and call GetAllValues on success', (() => {
    const deleteId = 123;
    const mockData:any = { 
      _id: 1, 
      name: 'test 1',
    };
    const deleteshiftprodValuesSpy = spyOn(service, 'DeleteshiftprodValues').and.returnValue(of(mockData));
    const gpGetAllValuesSpy = spyOn(component, 'GetAllValues');
    
    component.Delete(deleteId);
  

    expect(deleteshiftprodValuesSpy).toHaveBeenCalledWith(deleteId);
    expect(gpGetAllValuesSpy).toHaveBeenCalled();
  }));

  it('should log error on failure', (() => {
    const deleteId = 123;
    const error = new Error('Some error');
    spyOn(console, 'log');
    spyOn(service, 'DeleteshiftprodValues').and.returnValue(throwError(error));

    component.Delete(deleteId);
 
    expect(console.log).toHaveBeenCalledWith('Error', error);
  }));

  




  // fixed search method
  it('should filter listOfData when search length is greater than or equal to 2', () => {

    const targetValue:any[] =
    component.listOfData = [{ 
    }];

    component.search('Jo');

    expect(component.listOfData).toEqual([{ 
    }]);

  });

  it('should call GetAllValues when search length is less than 2', () => {
    spyOn(component, 'GetAllValues');

    component.search('J');

    expect(component.GetAllValues).toHaveBeenCalled();
  });
  



});