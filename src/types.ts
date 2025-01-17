import { IMeta } from './util/metaquerier';

export enum MatcherKey {
  NEW_EVENT = 'matcher.newEvent',
  EMIT = 'matchere.emit',
}

export type Step = {
  selector: IMeta;
  action: 'CLICK' | 'DRAG' | 'SCROLL' | 'TEXT';
  events: StepEvent[];
};

export type StepEvent =
  | MousedownEvent
  | MouseupEvent
  | ClickEvent
  | MousemoveEvent
  | ScrollEvent
  | KeydownEvent
  | KeypressEvent
  | TextInputEvent
  | TextChangeEvent
  | KeyupEvent
  | BlurEvent
  | BeforeUnloadEvent
  | HoverEvent
  | WheelEvent;

export type Modifiers = {
  // only record modifers when needed
  ctrl?: true;
  alt?: true;
  shift?: true;
  meta?: true;
};

export type MousemoveRecord = {
  clientX: number;
  clientY: number;
  timeOffset: number;
};

type BaseEvent = {
  timestamp: number;
};

export type MousedownEvent = BaseEvent & {
  type: 'MOUSEDOWN';
  clientX: number;
  clientY: number;
  modifiers: Modifiers;
};

export type MouseupEvent = BaseEvent & {
  type: 'MOUSEUP';
  clientX: number;
  clientY: number;
  modifiers: Modifiers;
};

export type ClickEvent = BaseEvent & {
  type: 'CLICK';
  clientX: number;
  clientY: number;
  modifiers: Modifiers;
};

export type MousemoveEvent = BaseEvent & {
  type: 'MOUSEMOVE';
  positions: Array<MousemoveRecord>;
};

export type ScrollEvent = BaseEvent & {
  type: 'SCROLL';
  scrollLeft: number;
  scrollTop: number;
};

export type KeydownEvent = BaseEvent & {
  type: 'KEYDOWN';
  key: string;
  code: string;
  keyCode: number;
  modifiers: Modifiers;
};

export type KeypressEvent = BaseEvent & {
  type: 'KEYPRESS';
  key: string;
  code: string;
  keyCode: number;
  modifiers: Modifiers;
};

export type TextInputEvent = BaseEvent & {
  type: 'TEXT_INPUT';
  data: string;
  // departed
  value: string;
};

export type TextChangeEvent = BaseEvent & {
  type: 'TEXT_CHANGE';
  value: string;
};

export type KeyupEvent = BaseEvent & {
  type: 'KEYUP';
  key: string;
  code: string;
  keyCode: number;
  modifiers: Modifiers;
};

export type BlurEvent = BaseEvent & {
  type: 'BLUR';
};

export type BeforeUnloadEvent = BaseEvent & {
  type: 'BEFORE_UNLOAD';
};

export type HoverEvent = BaseEvent & {
  type: 'HOVER';
  clientX: number;
  clientY: number;
  modifiers: Modifiers;
};

export type WheelEvent = BaseEvent & {
  type: 'WHEEL';
};
