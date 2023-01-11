import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-skill",
  template: `
    <div>
      <p>{{ skill?.name }}</p>
    </div>
  `,
  styles: [],
})
export class SkillComponent implements OnInit {
  @Input() skill:
    | {
        id: number;
        name: string;
        rank: number;
        description: string;
      }
    | undefined;

  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
