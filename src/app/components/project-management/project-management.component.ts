import { Component, OnInit } from '@angular/core';
import {StorageServiceService} from '../../services/storage-service.service'

import {SmartTable, from} from 'smart-table-ng'


const providers = [{
  provide: SmartTable,
  useFactory: (storageServiceService: StorageServiceService) => from(storageServiceService.GetProjectInfos(),{
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
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css'],
  providers
})
export class ProjectManagementComponent implements OnInit {

  constructor(public storageServiceService:StorageServiceService) { }

  ngOnInit() {
    console.log(this.storageServiceService.GetProjectInfos())
  }

  deleteProject() {
    var chk_value =[];//定义一个数组    
    $('input[name="checkbox-item"]:checked').each(function(){//遍历每一个名字为nodes的复选框，其中选中的执行函数    
    	chk_value.push($(this).val());//将选中的值添加到数组chk_value中    
    });

    if (chk_value.length < 1) {
      alert('请至少选择一个项目');
    } else {
      var groups = chk_value.join(",");
      alert(groups);
    }
  }

  selectAll() {
    
    if($('#checkbox-id').is(':checked')) {
      $("input[name='checkbox-item']").attr("checked", true); 
    } else {
      $("input[name='checkbox-item']").attr("checked", false); 
    }
   }
}
