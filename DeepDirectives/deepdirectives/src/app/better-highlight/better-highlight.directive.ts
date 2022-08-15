import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
@Input() defaultColor : string = 'Transparent'
@Input('appBetterHighlight') highlightedColor : string = 'blue'
  @HostBinding('style.backgroundColor') backgroundcolor : string = this.defaultColor;
  constructor(private renderer : Renderer2,
    private elRef : ElementRef) { }

    ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue')
    }

    @HostListener('mouseenter') mouseover(eventdata : Event){
      // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','red')
      this.backgroundcolor = this.highlightedColor;
    }

    @HostListener('mouseleave') mouseleave(eventdata : Event){
      // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','Transparent')
      this.backgroundcolor = this.defaultColor;
    }
}
