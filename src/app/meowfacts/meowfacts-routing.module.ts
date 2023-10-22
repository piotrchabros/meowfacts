import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeowfactsComponent} from './meowfacts.component';

const routes: Routes = [{
    path: '',
    component: MeowfactsComponent
}]

@NgModule({
    declarations: [MeowfactsComponent],
    imports: [RouterModule.forChild(routes)]
})
export class MeowfactsRoutingModule {}