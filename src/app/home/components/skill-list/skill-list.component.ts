import { Component, OnInit } from "@angular/core";
import { skills } from "../../testdata";

@Component({
  selector: "app-skill-list",
  template: `
    <div class="section">
      <div class="container has-text-centered">
        <div class="title">Skills</div>
        <div class="columns" *ngIf="skills">
          <div style="margin: 0.5%;" *ngFor="let skill of skills">
            <app-skill [skill]="skill"></app-skill>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SkillListComponent implements OnInit {
  skills: {
    id: number;
    name: string;
    rank: number;
    description: string;
  }[] = skills;
  isExpanding: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isExpanding = true;
    alert("Button was clicked");
  }
}
