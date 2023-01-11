import { Component, OnInit } from "@angular/core";
import { skills } from "../../testdata";

@Component({
  selector: "app-skill-list",
  template: `
    <div class="skill-list">
      <div *ngFor="let skill of skills">
        <app-skill class="skill-grid-item" [skill]="skill"></app-skill>
      </div>
    </div>
  `,
  styleUrls: ["skill-list.component.scss"],
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
}
