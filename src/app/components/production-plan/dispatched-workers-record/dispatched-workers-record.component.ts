import { Component, OnInit } from '@angular/core';
import {StorageServiceService} from '../../../services/storage-service.service'

import {SmartTable, from} from 'smart-table-ng'


const providers = [{
  provide: SmartTable,
  useFactory: (storageServiceService: StorageServiceService) => from(storageServiceService.GetDisPatchedWorkersRecords(),{
    search: {},
    slice: { page: 1, size: 3},
    filter: {},
    sort: {
      // pointer: 'balance',
      // direction: 'asc'
    }}),
    deps: [StorageServiceService]
 }];


@Component({
  selector: 'app-dispatched-workers-record',
  templateUrl: './dispatched-workers-record.component.html',
  styleUrls: ['./dispatched-workers-record.component.css'],
  providers
})
export class DispatchedWorkersRecordComponent implements OnInit {

  constructor(public storageService:StorageServiceService) { }

  ngOnInit() {

  }

}
