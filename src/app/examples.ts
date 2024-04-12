export const example1 =
    `<div>This is the dynamic template.<br> Test value: {{test}}</div>
@if(isVisible) {
  <span>Some other</span>
}
  <div>OK</div>
<span *ngIf="isVisible">Some other</span>`