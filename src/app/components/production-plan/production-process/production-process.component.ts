import { Component, OnInit } from '@angular/core';
import {StorageServiceService} from '../../../services/storage-service.service'

import {SmartTable, from} from 'smart-table-ng'

const providers = [{
  provide: SmartTable,
  useFactory: (storageServiceService: StorageServiceService) => from(storageServiceService.GetProductionProcess(),{
    search: {},
    slice: { page: 1, size: 11},
    filter: {},
    sort: {
      // pointer: 'balance',
      // direction: 'asc'
    }}),
    deps: [StorageServiceService]
 }];


@Component({
  selector: 'app-production-process',
  templateUrl: './production-process.component.html',
  styleUrls: ['./production-process.component.css'],
  providers
})
export class ProductionProcessComponent implements OnInit {

  constructor(public strorageService:StorageServiceService) { }

  ngOnInit() {
  }

}
