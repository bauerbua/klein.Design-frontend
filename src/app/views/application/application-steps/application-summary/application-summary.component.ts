import { Component, Input } from '@angular/core';
import { isObject } from '@shared/utilities/helper-functions';

@Component({
  selector: 'app-application-summary',
  templateUrl: './application-summary.component.html',
  styleUrls: ['./application-summary.component.scss']
})
export class ApplicationSummaryComponent {
  @Input() summary = {};
  isObject = isObject;

  returnZero(): any {
    return 0;
  }
}
