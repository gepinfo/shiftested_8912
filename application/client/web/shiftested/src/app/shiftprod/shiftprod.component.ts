import { Component, OnInit, ViewChild } from '@angular/core';
import { ShiftprodService } from './shiftprod.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

    export enum ienum {
        OPEN = 'open',
        CLOSE = 'close',
        INPROGRESS = 'inprogress',
    }

interface DataItem {
  name: String;
  types: String;
  ienum: ienum;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-shiftprod',
  templateUrl: './shiftprod.component.html',
  styleUrls: ['./shiftprod.component.scss'],
})

export class ShiftprodComponent implements OnInit {
public searchtickets:any;
public shiftypesitemArray:any[] = [];
    public shiftprod:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        types: '',
        ienum: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private shiftprodService: ShiftprodService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.shiftypesGetAllValues();
        this.shiftprod.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }

   showModal(): void {
    this.isVisibleCreate = true;
   }

  handleOk(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }




     Create() {
      this.isVisibleCreate = false;
        this.shiftprodService.PostAllshiftprodValues(this.shiftprod).subscribe((data:any) => {
            this.shiftprod.name = '',
            this.shiftprod.types = '',
            this.shiftprod.ienum = '',
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    filterStatus = [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'In-Active', value: 'INACTIVE' }
    ];
  
    filterAccessProfile = [
      { text: 'Receptionist', value: 'Receptionist' },
      { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]
  
    
  
    listOfData: DataItem[] = [];

    Update() {
        this.shiftprodService.Updateshiftprod(this.shiftprod).subscribe((data:any) => {
            this.shiftprod.name = '';
            this.shiftprod.types = '';
            this.shiftprod.ienum = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.shiftprodService.DeleteshiftprodValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.shiftprodService.GetAllshiftprodValues().subscribe((data: any) => {
            this.listOfData = data;
            console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }
    shiftypesGetAllValues() {
    this.shiftprodService.GetAllshiftypesValues().subscribe((data: any) => {
        this.shiftypesitemArray = data;
        console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }


    search(search:any){
    if(search.length >= 2){
        const targetValue: any[] = [];
        this.listOfData.forEach((value: any) => {
            let keys = Object.keys(value);
            for (let i = 0; i < keys.length; i++) {
                if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
                    targetValue.push(value);
                    break;
                }
            }
        });
        this.listOfData = targetValue;
        } else {
            this.GetAllValues();
        }
    }


    cancel(): void {
        this.nzMessageService.info('click cancel');
    }

    confirmDelete(data:any): void {
        this.nzMessageService.info('click confirm');
        this.Delete(data.id);
    }

    getUpdateById(data:any){
        this.isVisibleUpdate = true;
        this.shiftprod = data;
    }
}

  