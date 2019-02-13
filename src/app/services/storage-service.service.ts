import { Injectable } from '@angular/core';
import {Observable, of, from} from 'rxjs'
import {ProductionProcess,items_Production_process} from './production-process'
import {items_current_states, current_state} from './current-states'
import {items_dispatcher_workers_records,Dispatched_Workers_record} from './dispatched-workers-records'
import {items_report_record,ReportRecord} from './report_records'
import {items_QRT_content,QRT_content} from './QRT-content'
import {project_infos} from './project_info'


import {delay} from 'rxjs/operators'
import { project_info } from './project_info';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  constructor() { }

  GetProductionProcess():Observable<ProductionProcess[]>{
    return of(items_Production_process).pipe(delay(0))
  }

  GetCurrentStates():Observable<current_state[]>{
    return of(items_current_states)
  }

  GetDisPatchedWorkersRecords():Observable<Dispatched_Workers_record[]>{
    return of(items_dispatcher_workers_records)
  }

  GetReportRecords():Observable<ReportRecord[]>{
    return of(items_report_record)
  }

  GetQRT_content():Observable<QRT_content[]>{
    return of(items_QRT_content)
  }

  GetProjectInfos():Observable<project_info[]> {
    return of(project_infos)
  }

}
