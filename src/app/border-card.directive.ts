import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaulColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
      this.setBorder(this.initialColor);
      this.setHeight(this.defaultHeight);
  }

  @Input('pkmnBorderCard') borderColor: string; //on déclare la propriété borderColor avec alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaulColor); // || permet de donner une couleur par défaut si aucune couleur n'est définie dans le template
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
      let border = 'solid 4px ' + color;
      this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
      this.el.nativeElement.style.height = height + 'px';
  }
}
