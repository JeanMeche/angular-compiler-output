import { asyncPipeTemplate } from "./async-pipe";
import { defaultTemplate } from "./default";
import { forLoopsTemplate } from "./for-loops";
import { ifElseReferenceTemplate } from "./if-else-reference";
import { ifThenElseTemplate } from "./if-then-else";
import { nestedNodesTemplate } from "./nested-nodes";

export type Template = Record<'label' | 'content', string>;

export const templates: Template[] = [
  { label: 'default', content: defaultTemplate },
  { label: 'nested nodes', content: nestedNodesTemplate },
  { label: '@if/@else', content: ifThenElseTemplate },
  { label: '@for vs ngFor', content: forLoopsTemplate },
  { label: 'NgIf/Else w/ template reference', content: ifElseReferenceTemplate },
  { label: 'async pipe', content: asyncPipeTemplate }
];
