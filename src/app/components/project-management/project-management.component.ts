import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(public storageServiceService:StorageServiceService, private element:ElementRef) { }

  ngOnInit() {
    console.log(this.storageServiceService.GetProjectInfos())
  }

  deleteProject() {
    var chk_value =[];//定义一个数组  

    var checkboxs = this.element.nativeElement.querySelectorAll("input[name='checkbox-item']");
    for (var i = 0; i < checkboxs.length; i++) {
      if (checkboxs[i].checked) {
        chk_value.push(checkboxs[i].value);
      }
    }

    if (chk_value.length < 1) {
      alert('请至少选择一个项目');
    } else {
      var groups = chk_value.join(",");
      alert(groups);
    }
  }

  selectAll() {
    var checkbox = this.element.nativeElement.querySelector("#checkbox-id");
    if (checkbox.checked) {
      var checkboxs = this.element.nativeElement.querySelectorAll("input[name='checkbox-item']");
      for (var i = 0; i < checkboxs.length; i++) {
        checkboxs[i].checked = true;
      }
    } else {
      var checkboxs = this.element.nativeElement.querySelectorAll("input[name='checkbox-item']");
      for (var i = 0; i < checkboxs.length; i++) {
        checkboxs[i].checked = false;
      }
    } 
  }

  base64 (content) {
    return window.btoa(unescape(encodeURIComponent(content)));         
  }

  exportToExcel(fileName) {
    var temp = [];
    var table = this.element.nativeElement.querySelector('#projectInfo');
    for (var i = 0; i < table.rows.length; i++) {
      temp.push(table.rows[i].cells[0].innerHTML);
      table.rows[i].deleteCell(0);
    }
    var excelContent = table.innerHTML;
    var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
    excelFile += "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
    excelFile += "<body><table>";
    excelFile += excelContent;
    excelFile += "</table></body>";
    excelFile += "</html>";
    var link = "data:application/vnd.ms-excel;base64," + this.base64(excelFile);
    var a = document.createElement("a");
    a.download = fileName+".xls";
    a.href = link;
    a.click();

    for (var i = 0; i < table.rows.length; i++) {
      var cell = table.rows[i].insertCell(0);
      cell.innerHTML = temp[i];
    }
  }

  
}
