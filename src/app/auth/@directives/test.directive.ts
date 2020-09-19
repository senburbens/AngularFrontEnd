import { Directive, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement,'background-color','#d6e0f0');
    this.renderer.setStyle(this.el.nativeElement,'color','black');
  }

  ngOnDestroy(): void {
    console.log("Directive destroyed");
  }
}
