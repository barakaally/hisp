import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TableData } from '../data/table-data';
import { HispTable, MetaData } from '../model/hisp.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  headers = [];
  ou: string[];
  dx: string[];
  rows: { dx: string; pe: string; ou: string; value: string; }[][] | any[][];
  rowMatrix = ["dx", "pe", "ou", "value"];

  constructor() { }

  ngOnInit(): void {
    this.getTable(TableData);
  }
  /**
   * @description get table dataSet from HISP data
   * @param data HispTable data
   * 
   */
  getTable(data: HispTable) {
    this.setHeaders(data.metaData.dimensions.pe, data.metaData);
    this.setOu(data.metaData.dimensions.ou, data.metaData);
    this.setDx(data.metaData.dimensions.dx, data.metaData);
    this.setRows(data);
  }
  /**
   * @description set table headers
   * @param pe string[] @description array of period
   * @param metaData @description Matadata
   */
  setHeaders = (pe: string[], metaData: MetaData) => {
    this.headers = pe.map(x => metaData.items[x].name);
    //push empty column
    this.headers.unshift("");
  }

  /**
   * 
   * @param ou string[] @description array of organization unit
   * @param metaData Matadata
   * @returns string[]
   */
  setOu = (ou: string[], metaData: MetaData) => this.ou = ou
    .map(x => metaData.items[x].name);

  /**
   * @param dx string[] @description array of Data unit
   * @param metaData Matadata
   * @returns string[]
   */
  setDx = (dx: string[], metaData: MetaData) =>
    this.dx = dx
      .map(x => metaData.items[x].name);

  /**
   * @description set table row 
   * @param data HispTable
   * @returns table Row
   */
  setRows = (data: HispTable) => this.rows = data.rows.map(row => {
    let obj = {};
    return row.map((x, i) => {
      const key = this.rowMatrix[i];
      const value = i != 3 ? data.metaData.items[x].name : x;
      Object.assign(obj, { [key]: value });
      return obj;
    });
  });

  /**
   * @description get inner rows
   * @returns string[]
   */
  getRowHeaders = () => this.headers?.filter(x => x != "");

  /**
   * @description det inner row value based on dx,pe and ou
   * @param dx 
   * @param pe 
   * @param ou 
   * @returns value
   */
  getRowValue(dx: string, pe: string, ou: string) {
    const row = this.rows.filter(
      x => x.some(y => y.dx == dx && y.pe == pe && y.ou == ou));
    return row.length ? row[0][0]?.value : ""
  }


}
