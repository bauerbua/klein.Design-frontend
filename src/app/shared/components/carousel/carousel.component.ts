import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
  @Input() items;
}
