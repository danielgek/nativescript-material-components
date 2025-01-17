import { ViewBase } from 'tns-core-modules/ui/core/view-base';
import { BottomSheetOptions } from './bottomsheet-common';

export { BottomSheetOptions };
declare module 'tns-core-modules/ui/core/view' {
    interface View {
        showBottomSheet(options: BottomSheetOptions): ViewBase;
    }
}

export function install();
declare module 'tns-core-modules/ui/core/view/view' {
    interface View {
        // _modalContext: any;
        _showNativeModalView(parent: View, context: any, closeCallback: Function, fullscreen?: boolean, animated?: boolean, stretched?: boolean);
        // _closeModalCallback: Function;

        _setupAsRootView(context: any): void;
        callLoaded(): void;
        callUnloaded(): void;
        _removeFromFrameStack(): void;
    }
}
