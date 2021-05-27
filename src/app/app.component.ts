import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Yeshuv, Merchav, Ezur, People } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  yeshuvim?: Yeshuv[];
  merchavim?: Merchav[];
  ezurim?: Ezur[];
  peoples?: People[];

  selectedYeshuv?: number;
  selectedMerchav?: number;
  selectedEzur?: number;

  selectedPeople?: People;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getYeshuvimAndMerchavim().subscribe((data) => {
      this.yeshuvim = data.yeshuvim;
      this.merchavim = data.merchavim;
    });
  }

  onMercahvChange() {
    this.selectedEzur = undefined;
    this.dataService
      .getEzurimByMerchav(this.selectedMerchav!)
      .subscribe((data) => {
        this.ezurim = data;
      });
  }

  searchPeoples() {
    this.dataService
      .getRellavantPeople(
        this.selectedYeshuv!,
        this.selectedMerchav!,
        this.selectedYeshuv!
      )
      .subscribe((data) => {
        this.peoples = data;
      });
  }

  setSelectedPeople(people: People){
    this.selectedPeople = people;
  }
}
