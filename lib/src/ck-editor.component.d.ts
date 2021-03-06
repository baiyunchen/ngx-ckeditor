import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CKEDITOR_VALUE_ACCESSOR: any;
export declare class CKEditorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, ControlValueAccessor {
    private ngZone;
    private ckIns;
    private propagateChange(_);
    private propagateTouch();
    private innerValue;
    readonly instance: any;
    private identifier;
    readonly: boolean;
    config: any;
    skin: string;
    language: string;
    fullPage: boolean;
    inline: boolean;
    id: string;
    change: EventEmitter<{}>;
    ready: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    focus: EventEmitter<{}>;
    ck: ElementRef;
    constructor(ngZone: NgZone);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private static getRandomIdentifier(id?);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private initCKEditor(identifier);
    private destroyCKEditor();
    private updateValue(value);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
}
