import {Component} from '@angular/core';
import {UntilDestroy} from '@ngneat/until-destroy';
import {MeowfactsService} from './services/meowfacts.service';

@UntilDestroy()
@Component({
    selector: 'app-meowfacts',
    templateUrl: './meowfacts.component.html',
    styleUrls: ['./meowfacts.component.scss']
})
export class MeowfactsComponent {
    meowfactsData = this.meowfacts.meowfactsData;

    constructor(private meowfacts: MeowfactsService) {
        this.meowfacts.loadMeowfacts(10);
    }

    loadMoreMeowfacts() {
        this.meowfacts.loadMeowfacts(5);
    }

}