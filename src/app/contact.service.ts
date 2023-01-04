import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  private apiUrl = "the api Path to fire base(or mailthis)";

  constructor(private http: HttpClient) {}
  PostMessage(input: any) {
    this.http.post(this.apiUrl, input);
  }
}
