import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MaterialModule} from '../material/material.module';
import {MeowfactsComponent} from './meowfacts.component';

const routes: Routes = [{
    path: '',
    component: MeowfactsComponent
}]

@NgModule({
    declarations: [MeowfactsComponent],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        InfiniteScrollModule,
        CommonModule
    ]
})
export class MeowfactsRoutingModule {}