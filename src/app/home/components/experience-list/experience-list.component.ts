import { Component, OnInit } from "@angular/core";
import { experienceList } from "../../testdata";
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: "app-experience-list",
  template: `
    <div class="experience-list" *ngIf="experiences">
      <div *ngFor="let exp of experiences">
        <app-experience [experience]="exp"></app-experience>
      </div>
    </div>
  `,
  styleUrls: ["eperience-list.component.scss"],
})
export class ExperienceListComponent implements OnInit {
  experiences: {
    title: string;
    company: string;
    From: string;
    to: string;
    description: string;
  }[] = experienceList;

  constructor() {}

  ngOnInit(): void {}
}
