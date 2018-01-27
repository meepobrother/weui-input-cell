import {
    Component, OnInit, KeyValueDiffers,
    ElementRef, Renderer2, ViewChild,
    HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';


export interface InputCellProps {
    title?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    children: any[];
    style?: { [k: string]: string };
    focus?: boolean;
    value?: string;
}

@Component({
    selector: 'input-cell-preview',
    templateUrl: './input-cell-preview.html',
    styleUrls: ['./input-cell-preview.scss']
})
export class InputCellPreviewComponent extends ReactComponent<InputCellProps, any> implements OnInit {
    @ViewChild('input') input: ElementRef;
    @HostListener('mouseenter', ['$event'])
    mouseover() {
        this.props.focus = true;
    }
    @HostListener('mouseleave', ['$event'])
    mouseleave() {
        this.props.focus = false;
    }

    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    ngOnInit() {
        merge(
            fromEvent(this.ele.nativeElement, 'change'),
            fromEvent(this.ele.nativeElement, 'propertychange'),
            fromEvent(this.ele.nativeElement, 'keyup'),
            fromEvent(this.ele.nativeElement, 'keydown'),
        ).distinctUntilChanged()
            .debounceTime(300)
            .subscribe(res => {
                this.props.value = this.input.nativeElement.value;
                this.setProps({
                    ...this.props,
                    ...{ value: this.input.nativeElement.value }
                });
            });
    }

    onPropsChange() {}

    onStateChange() { }
}
