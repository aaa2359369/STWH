import { Component, OnInit } from '@angular/core';
import {StorageServiceService} from '../../../services/storage-service.service'
import {SmartTable, from} from 'smart-table-ng'



const providers = [{
  provide: SmartTable,
  useFactory: (storageServiceService: StorageServiceService) => from(storageServiceService.GetReportRecords(),{
    search: {},
    slice: { page: 1, size: 5},
    filter: {},
    sort: {
      // pointer: 'balance',
      // direction: 'asc'
    }}),
    deps: [StorageServiceService]
 }];


@Component({
  selector: 'app-report-records',
  templateUrl: './report-records.component.html',
  styleUrls: ['./report-records.component.css'],
  providers
})
export class ReportRecordsComponent implements OnInit {

  constructor(public storageService:StorageServiceService) { }

  ngOnInit() {
  }

}
