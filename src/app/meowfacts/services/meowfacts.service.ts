import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {filter, tap} from 'rxjs';

@Injectable()
export class MeowfactsService {
    public meowfactsData: string[] = [];
    private baseUrl = 'https://meowfacts.herokuapp.com/';

    constructor(private http: HttpClient){}

    loadMeowfact() {
        return this.http.get<{data: string[]}>(this.baseUrl)
            .pipe(
                tap(meowfact => {
                    if (this.meowfactsData.includes(meowfact.data[0])) {
                        this.loadMeowfact();
                    }
                }),
                filter(meowfact => !this.meowfactsData.includes(meowfact.data[0])),
                tap(meowfact => {
                    this.meowfactsData.push(meowfact.data[0]);
                })
            );
    } 

    loadMeowfacts(count: number) {
        for (let i = 0; i < count; i++) {
            this.loadMeowfact().subscribe();
        }
    }
}