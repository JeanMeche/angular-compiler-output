export const example1 =
    `<div>This is the dynamic template.<br> Test value: {{test}}</div>
@if(isVisible) {
  <span>Some other</span>
}
  <div>OK</div>`


export const forLoops = `
<div>For loops examples</div>
@for(item of [1,2,3,4]; track $index) {
  <span>{{item}}</span>
}

<br>

<span *ngFor="let item of [1,2,3,4]">{{item}}</span>
`

export const ifElseReference = `
<div *ngIf="isLoggedIn; else loggedOut">
  Welcome back, friend.
</div>

<ng-template #loggedOut>
  Please friend, login.
</ng-template>`

export const custom = `<div>Write your own template =)</div>`

export const templates = [
  {label: 'example1', content: example1},
  {label: '@for vs ngFor', content: forLoops},
  {label: 'NgIf/Else w/ reference', content: ifElseReference},
  {label: 'custom', content: custom},
];

export type Template = typeof templates[number];