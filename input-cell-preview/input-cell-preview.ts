import {
    Component, OnInit, KeyValueDiffers,
    ElementRef, Renderer2, ViewChild,
    HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';

export interface InputCellProps {
    title?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    children: any[];
    style?: { [k: string]: string };
    focus?: boolean;
}

@Component({
    selector: 'input-cell-preview',
    templateUrl: './input-cell-preview.html',
    styleUrls: ['./input-cell-preview.scss']
})
export class InputCellPreviewComponent extends ReactComponent<InputCellProps, any> {
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

    onPropsChange() { }

    onStateChange() { }
}
