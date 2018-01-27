import { Component, OnInit } from "@angular/core";
import { Table } from "../classes/table";
import { TABLES } from "../mocks/mock-tables";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.css"]
})
export class TablesComponent implements OnInit {
  tables = TABLES;

  selectedTable: Table;

  p: number = 1;

  constructor() {}

  ngOnInit() {}

  onSelect(tbl: Table): void {
    this.selectedTable = tbl;
  }
}
