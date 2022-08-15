import { Component, Input, OnInit, 
  ViewEncapsulation, SimpleChange, OnChanges, SimpleChanges,
   ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation : ViewEncapsulation.Emulated 
})
export class ServerElementsComponent implements OnInit,OnChanges {
  @Input('srvElement') element: { name: string; type: string; content: string} 
  @Input() name : string;
  @ViewChild('heading',{static : true})  header : ElementRef
  @ContentChild('ContentChanged' ,{static : true}) paragraph : ElementRef;

  constructor() {
    console.log('Constructor Called')
   }

  ngOnInit(): void {
    console.log('ngOnInit Called')
    console.log('Test Server :' + this.header.nativeElement.TextContent)//Not working
    console.log('Content Changed are' + this.paragraph.nativeElement.TextContent)
  }

  ngOnChanges(changes : SimpleChanges) {
  console.log('ngOnChanges Called')
  console.log(changes)
  console.log('Test Server :' + this.header.nativeElement.TextContent)

  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit Called')
    console.log('Test Server :' + this.header.nativeElement.TextContent)//Not working
    console.log('Content Changed are' + this.paragraph.nativeElement.TextContent)
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Called')
  }

}
