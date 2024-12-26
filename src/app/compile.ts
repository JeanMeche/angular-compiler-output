import * as ng from '@angular/compiler';
import { HighlighterGeneric, createHighlighter } from 'shiki';

import { formatJs } from './prettier';
import { Context, Printer } from './printer';
import { map } from 'rxjs';

let highlighter: HighlighterGeneric<any, any>;

export async function initHightlighter() {
  highlighter = await createHighlighter({
    themes: ['github-dark'],
    langs: ['javascript'],
  });
}

interface CompileOutput {
  output: string;
  errors: ng.ParseError[] | null;
  details: any;
}

export async function compileFormatAndHighlight(
  template: string,
): Promise<CompileOutput> {
  const { output: unformated, errors, details } = compileTemplate(template);

  const formatted = await formatJs(unformated);
  const highlighted = highlighter.codeToHtml(formatted, {
    lang: 'javascript',
    theme: 'github-dark',
  });

  return { output: highlighted, errors, details };
}

function compileTemplate(templateStr: string): CompileOutput {
  const constantPool = new ng.ConstantPool();
  const template = ng.parseTemplate(templateStr, 'template.html', {
    preserveWhitespaces: false,
  });

  const CMP_NAME = 'TestCmp';

  const meta: ng.R3ComponentMetadata<any> = {
    name: CMP_NAME,
    isStandalone: true,
    selector: 'test-cmp',
    host: {
      attributes: {},
      listeners: {},
      properties: {},
      specialAttributes: {},
    },
    inputs: {},
    outputs: {},
    lifecycle: {
      usesOnChanges: false,
    },
    hostDirectives: null,
    declarations: [],
    declarationListEmitMode: ng.DeclarationListEmitMode.Direct,
    deps: [],
    animations: null,
    defer: {
      dependenciesFn: null,
      mode: ng.DeferBlockDepsEmitMode.PerComponent,
    },
    i18nUseExternalIds: false,
    interpolation: ng.DEFAULT_INTERPOLATION_CONFIG,
    isSignal: false,
    providers: null,
    queries: [],
    styles: [],
    template,
    encapsulation: ng.ViewEncapsulation.Emulated,
    exportAs: null,
    fullInheritance: false,
    changeDetection: null,
    relativeContextFilePath: 'template.html',
    relativeTemplatePath: 'template.html',
    type: {
      value: new ng.WrappedNodeExpr(CMP_NAME),
      type: new ng.WrappedNodeExpr(CMP_NAME),
    },
    typeArgumentCount: 0,
    typeSourceSpan: null!,
    usesInheritance: false,
    viewProviders: null,
    viewQueries: [],
  };

  const out = ng.compileComponentFromMetadata(
    meta,
    constantPool,
    ng.makeBindingParser(ng.DEFAULT_INTERPOLATION_CONFIG),
  );

  const details = foo(meta, new ng.ConstantPool());

  const printer = new Printer();
  let strExpression = out.expression.visitExpression(
    printer,
    new Context(false),
  );

  for (const stmt of constantPool.statements) {
    const strStmt = stmt.visitStatement(printer, new Context(true));

    strExpression += `\n\n${strStmt}`;
  }

  return { output: strExpression, errors: template.errors, details };
}

function foo(meta: ng.R3ComponentMetadata<any>, constantPool: ng.ConstantPool) {
  let allDeferrableDepsFn: ng.ReadVarExpr | null = null;

  const tpl = ng.ingestComponent(
    meta.name,
    meta.template.nodes,
    constantPool,
    meta.relativeContextFilePath,
    meta.i18nUseExternalIds,
    meta.defer,
    allDeferrableDepsFn,
    meta.relativeTemplatePath,
    /* enableDebugLocations */ false,
  );

  const res: Map<string, any> = new Map();

  res.set('initial state', {
    phase: 'Initial state',
    units: [...tpl.units].map((unit) => mapUnit(unit, tpl, constantPool)),
  });

  for (const phase of ng.phases) {
    if (
      phase.kind === ng.CompilationJobKind.Tmpl ||
      phase.kind === ng.CompilationJobKind.Both
    ) {
      // The type of `Phase` above ensures it is impossible to call a phase that doesn't support the
      // job kind.
      phase.fn(tpl as ng.CompilationJob & ng.ComponentCompilationJob);
      res.set(phase.fn.name, {
        phase: phase.fn.name,
        units: [...tpl.units].map((unit) => mapUnit(unit, tpl, constantPool)),
      });
    }
  }

  res.set('Final state', {
    phase: 'Final state',
    units: [...tpl.units].map((unit) => mapUnit(unit, tpl, constantPool)),
  });

  return res;
}

function mapUnit(
  unit: ng.ViewCompilationUnit,
  tpl: ng.ComponentCompilationJob,
  constantPool: ng.ConstantPool,
) {
  return {
    create: [...unit.create].map((create) => mapOp(create, tpl, constantPool)),
    update: [...unit.update].map((update) => mapOp(update, tpl, constantPool)),

    // create: [...unit.create],
    // update: [...unit.update],
    ops: [...unit.ops()].map((op) => mapOp(op, tpl, constantPool)),
  };
}

function mapOp(
  op: ng.CreateOp | ng.UpdateOp,
  tpl: ng.ComponentCompilationJob,
  constantPool: ng.ConstantPool,
) {
  const obj = {
    kind: ng.OpKind[op.kind],
    //fn: null, // ng.emitTemplateFn(tpl, constantPool),
  };

  if ('tag' in op) {
    Object.assign(obj, { tag: op.tag });
  }

  if ('sourceSpan' in op) {
    Object.assign(obj, { sourceSpan: op.sourceSpan?.toString() });
  }

  return obj;
}
