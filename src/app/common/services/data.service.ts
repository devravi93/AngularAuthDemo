import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    constructor(private http: Http) {
    }

    callGetWebService(url) {
        return this.http.get(url);
    }

    callPostWebService(url, obj) {
        let headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options: RequestOptions = new RequestOptions({ headers: headers });
        return this.http.post(url, JSON.stringify(obj), options);
    }
}