import { IExtendParams, IMatcher } from './matcher';
import { IObserver } from './observers';
import { Step } from './types';
import { IMetaQuerier } from './util/metaquerier';
declare type StepEventHandler = (step: Step) => void;
export declare type RecorderOptions = {
    matcher: IMatcher;
    onEmit: StepEventHandler;
    metaQuerier?: IMetaQuerier;
};
export declare class Recorder {
    private observersList;
    private listenerMap;
    private matcher;
    private onEmit;
    private metaQuerier;
    private _state;
    get state(): 'active' | 'inactive' | 'suspend';
    constructor(options: RecorderOptions);
    start(): void;
    suspend(): void;
    stop(): void;
    extendAction<params extends IExtendParams>(action: params): IObserver;
    removeAction(observer: IObserver): void;
    private emitCurrentStep;
}
export {};
