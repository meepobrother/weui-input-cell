import { InputCellPreviewComponent } from './input-cell-preview/input-cell-preview';
import { InputCellSettingComponent } from './input-cell-setting/input-cell-setting';

export const both = {
    'input-cell': {
        setting: InputCellSettingComponent,
        view: InputCellPreviewComponent
    }
};

export const preview = {
    'input-cell': InputCellPreviewComponent
};

export const entrys = [
    InputCellPreviewComponent,
    InputCellSettingComponent
];

export { InputCellProps } from './input-cell-preview/input-cell-preview';
