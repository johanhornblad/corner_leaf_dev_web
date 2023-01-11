import { Component, OnInit } from "@angular/core";
import { experience } from "./testdata";

@Component({
  selector: "app-home",
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">My Home Page</p>
        </div>
      </div>
    </section>
    <app-skill-list></app-skill-list>
    <app-experience-list></app-experience-list>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
