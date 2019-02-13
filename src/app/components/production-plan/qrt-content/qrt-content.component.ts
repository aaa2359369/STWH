import { Component, OnInit } from '@angular/core';
import {StorageServiceService} from '../../../services/storage-service.service'

import {SmartTable, from} from 'smart-table-ng'



const providers = [{
  provide: SmartTable,
  useFactory: (storageServiceService: StorageServiceService) => from(storageServiceService.GetQRT_content(),{
    search: {},
    slice: { page: 1, size: 2},
    filter: {},
    sort: {
      // pointer: 'balance',
      // direction: 'asc'
    }}),
    deps: [StorageServiceService]
 }];


@Component({
  selector: 'app-qrt-content',
  templateUrl: './qrt-content.component.html',
  styleUrls: ['./qrt-content.component.css'],
  providers
})
export class QRTContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
