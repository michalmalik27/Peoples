import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { People } from '../models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css'],
})
export class PeoplesComponent implements OnInit {
  constructor() {}
  @Input() peoples!: People[];
  @Output() selectedPeopleEvent = new EventEmitter<People>();
  clickedRows = new Set<People>();

  displayedColumns: string[] = ['address', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource<People>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<People>(this.peoples);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}

  onSelectedPeople(people: People) {
    this.selectedPeopleEvent.emit(people);
  }
}
