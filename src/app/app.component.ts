import { CdkMenuModule } from '@angular/cdk/menu';
import {
  Component,
  effect,
  ElementRef,
  Host,
  HostListener,
  inject,
  signal,
  VERSION,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';

import { compileFormatAndHighlight } from './compile';
import { formatAngularTemplate } from './prettier';
import { Template, templates } from './templates';
import { unzip, zip } from './zip';

// Please don't blame for what you're gonna read

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CdkMenuModule, MatIcon],
  template: `
    <header>Angular Template Compiler - based on {{ version }}</header>
    <main>
      <section>
        <div class="controls">
          <h2>Template</h2>

          <div class="adev-playground-header">
            <div class="adev-template-select">
              <label for="playgroundTemplate">Select a template</label>
              <button [cdkMenuTriggerFor]="templatesMenu">
                <span>{{ currentTemplate() }}</span>
                <mat-icon>expand_more</mat-icon>
              </button>
            </div>
          </div>

          <ng-template #templatesMenu>
            <ul class="adev-template-dropdown" cdkMenu>
              @for (template of templates; track $index) {
                <li>
                  <button
                    cdkMenuItem
                    type="button"
                    (click)="selectTemplate(template)"
                  >
                    <span>{{ template.label }}</span>
                  </button>
                </li>
              }
            </ul>
          </ng-template>

          <button
            class="docs-primary-btn"
            [attr.text]="'Prettify ✨'"
            (click)="pretty()"
          >
            Prettify
          </button>
          <button
            class="docs-primary-btn"
            [attr.text]="'Share Example'"
            (click)="save()"
          >
            Share example
          </button>
        </div>
        <textarea
          cols="80"
          rows="12"
          [(ngModel)]="template"
          (keydown)="selectCustom()"
        ></textarea>
      </section>
      <hr />
      <h2>The compiled template</h2>
      @if (errors().length > 0) {
        <section class="error">
          @for (error of errors(); track error) {
            <div>L{{ error.line }}: {{ error.message }}</div>
          }
        </section>
      }
      <div #compilerOutput></div>
      <code>renderFlag: 1=create, 2=update</code>

      <hr />
      <footer>
        <div>
          <h2>About</h2>
          <p>
            The demo aims to teach the basics of the Angular compiler.
            <br /><br />
            The angular template compiler transforms angular templates (HTML)
            into javascript.<br />
            The templates are compiled into view functions made of sequential
            calls of instructions.<br />
            Angular instructions are functions that are easily recognizable with
            their leading <code>ɵɵ</code>.
          </p>
          <h2>Known limitations</h2>
          <ul>
            <li>&#64;Defer is not supported yet</li>
            <li>i18n is not supported yet</li>
            <li><a href="https://github.com/JeanMeche/angular-compiler-output/issues">Probably some other issues</a>...</li>
          </ul>
          <h2>More on the Angular compiler</h2>
          <p>
            Have a look at
            <a href="https://www.youtube.com/watch?v=S0o-4yc2n-8">this talk</a>
            by Kara Erickson at Angular Connect 2019
          </p>
        </div>

        <br /><br /><br />
        <p>Repo <a href="https://github.com/jeanmeche/angular-compiler-output">here</a></p>
        <span class="twitter">
          Built by
          <a href="https://twitter.com/Jean__meche">&#64;JeanMeche</a> with the
          help of <a href="https://twitter.com/synalx">&#64;synalx</a>
        </span>
      </footer>
    </main>
  `,
})
export class AppComponent {
  protected readonly version = VERSION.full;
  protected readonly router = inject(Router);
  protected readonly activatedRoute = inject(ActivatedRoute);

  protected readonly templates = templates;
  protected readonly template = signal(templates[0].content);
  protected readonly errors = signal<{ message: string; line: number }[]>([]);
  protected readonly currentTemplate = signal(templates[0].label);
  protected readonly compilerOutput = viewChild.required('compilerOutput', {
    read: ElementRef,
  });

  constructor(private matIconReg: MatIconRegistry) {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    effect(() => {
      this.compileTemplate(this.template());
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['template']) {
        this.selectCustom();
        this.template.set(unzip(params['template']));
      }
    });
  }

  selectTemplate(template: Template): void {
    this.template.set(template.content);
    this.currentTemplate.set(template.label);
  }

  selectCustom() {
    this.currentTemplate.set('Custom');
  }

  async compileTemplate(template: string) {
    const { output, errors } = await compileFormatAndHighlight(template);
    this.compilerOutput().nativeElement.innerHTML = output;
    this.errors.set(
      errors?.map((e) => {
        return { message: e.msg, line: e.span.start.line };
      }) ?? [],
    );
  }

  async pretty() {
    const newTemplateStr = await formatAngularTemplate(this.template());
    this.template.set(newTemplateStr);
  }

  save() {
    this.router.navigate([], {
      queryParams: { template: zip(this.template()) },
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 's' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      this.save();
    }
  }
}
