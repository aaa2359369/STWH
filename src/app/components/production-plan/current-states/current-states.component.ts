import { Component, OnInit } from '@angular/core';
import {current_state} from '../../../services/current-states'
import {StorageServiceService} from '../../../services/storage-service.service'

@Component({
  selector: 'app-current-states',
  templateUrl: './current-states.component.html',
  styleUrls: ['./current-states.component.css']
})
export class CurrentStatesComponent implements OnInit {

  constructor(public storageService:StorageServiceService) { }

  ngOnInit() {
    this.GetCurrentStates()
  }

  current_states:current_state[] = []

  GetCurrentStates(){
    var stream = this.storageService.GetCurrentStates();
    stream.subscribe((data)=>{
    this.current_states = data
 
     })
  }

}
