import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MeowfactsRoutingModule} from './meowfacts-routing.module';
import {MeowfactsService} from './services/meowfacts.service';

@NgModule({
    imports: [MeowfactsRoutingModule, HttpClientModule],
    providers: [MeowfactsService]
})
export class MeowfactsModule {}