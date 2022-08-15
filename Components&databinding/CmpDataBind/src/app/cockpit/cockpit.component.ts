import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName : string , serverContent: string}>();
  @Output('bpCreated') blueprintAdded = new EventEmitter<{serverName : string , serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput :ElementRef;
 //@ViewChild('serverContentInput') serverContentInput : ElementRef ;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput)
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName : nameInput.value ,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput)
   this.blueprintAdded.emit({
    serverName : nameInput.value ,
    serverContent : this.serverContentInput.nativeElement.value
  });
  }

}
function serverContentInput(serverContentInput: any, arg1: { static: boolean; }) {
  throw new Error('Function not implemented.');
}

