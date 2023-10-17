import { NgModule } from "@angular/core";

import { NzFormModule } from "ng-zorro-antd/form"
import { NzInputModule } from "ng-zorro-antd/input"
import { NzCollapseModule } from "ng-zorro-antd/collapse"



@NgModule({
    exports: [
        NzFormModule,
        NzInputModule,
        NzCollapseModule
    ]
})

export class ngZorroAntdModule {}