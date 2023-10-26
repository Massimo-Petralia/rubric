import { NgModule } from "@angular/core";

import { NzFormModule } from "ng-zorro-antd/form"
import { NzInputModule } from "ng-zorro-antd/input"
import { NzCollapseModule } from "ng-zorro-antd/collapse"
import {  NzPaginationModule } from "ng-zorro-antd/pagination"



@NgModule({
    exports: [
        NzFormModule,
        NzInputModule,
        NzCollapseModule,
        NzPaginationModule
    ]
})

export class ngZorroAntdModule {}