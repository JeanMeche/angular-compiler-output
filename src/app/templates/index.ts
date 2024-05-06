import { asyncPipeTemplate } from "./async-pipe";
import { childComponentTemplate } from "./child-component";
import { defaultTemplate } from "./default";
import { eventBindingsTemplate } from "./event-bindings";
import { forLoopsTemplate } from "./for-loops";
import { ifElseReferenceTemplate } from "./if-else-reference";
import { ifThenElseTemplate } from "./if-then-else";
import { nestedNodesTemplate } from "./nested-nodes";
import { NgModelTemplate } from "./ng-model";

export type Template = Record<'label' | 'content', string>;

export const templates: Template[] = [
  { label: 'default', content: defaultTemplate },
  { label: 'nested nodes', content: nestedNodesTemplate },
  { label: '@if/@else', content: ifThenElseTemplate },
  { label: '@for vs ngFor', content: forLoopsTemplate },
  { label: 'ngIf/else w/ template reference', content: ifElseReferenceTemplate },
  { label: 'event bindings', content: eventBindingsTemplate },
  { label: 'ng-model', content: NgModelTemplate },
  { label: 'async pipe', content: asyncPipeTemplate },
  { label: 'child component', content: childComponentTemplate },
];
