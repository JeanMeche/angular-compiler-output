import {NgIf} from '@angular/common';
import {Component, effect, ElementRef, model, VERSION, viewChild,} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {compileFormatAndHighlight} from './compile';
import {example1} from './examples';
import {formatAngularTemplate} from './prettier';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <header>Angular Template Compiler - based on {{version}}</header>
    <h2>Type a template <span><button class="docs-primary-btn" [attr.text]="'Prettify ✨'" (click)="pretty()">Prettify</button></span></h2>
    <textarea cols=80 rows=12 [(ngModel)]="template"></textarea>
    <hr>
    <h2>The compiled template</h2> 
    <div #compilerOutput></div>
    <code>renderFlag: 1=create, 2=update</code>

    <hr>
    <footer>
      <div>
        <h2>About</h2>
        <p>
        This demo allows you to see the JS output for a given Angular template 
        <br/><br/>
        The angular template compiler transforms the HTML into javascript instructions.<br>
        Angular instructions are functions that are easily recognizable with their leading <code>ɵɵ</code>.
        </p>
        <h2>Known limitations</h2>
        <ul>
          <li>&#64;Defer is not supported yet</li> 

        </ul>
      </div>

      <span class="twitter">
        Built by <a href="https://twitter.com/Jean__meche">&#64;JeanMeche</a> with the help of <a href="https://twitter.com/synalx">&#64;synalx</a>
      </span>
    </footer>
  `,
})
export class AppComponent {
  version = VERSION.full;
  template = model(example1);
  compilerOutput = viewChild.required('compilerOutput', {read: ElementRef});

  constructor() {
    effect(() => {
      this.compileTemplate(this.template());
    });
  }

  async compileTemplate(template: string) {
    const outputStr = await compileFormatAndHighlight(template);
    this.compilerOutput().nativeElement.innerHTML = outputStr;
  }

  async pretty() {
    const newTemplateStr = await formatAngularTemplate(this.template());
    this.template.set(newTemplateStr);
  }
}