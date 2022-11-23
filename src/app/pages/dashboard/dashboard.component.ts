import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TablesService, Element } from '../tables/tables.service';
import { single, multi } from '../charts/charts.data';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public lat: number = 45.421530;
  public lng: number = -75.697193;
  public zoom: number = 7;
  public settings: Settings;
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource: any;  
  public single: any[];
  public multi: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Country';
  public showYAxisLabel = true;
  public yAxisLabel = 'Population';   
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false; 
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };    

  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor(public appSettings:AppSettings, private tablesService:TablesService) { 
    this.settings = this.appSettings.settings;
    this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());      
    Object.assign(this, {single, multi}); 
    
    this.fetch((data) => {
      this.temp = [...data];
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
    
  } 
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // public onSelect(event) {
  //   console.log(event);
  // }
  onSelect({ event, selected }) {
    console.log(event);
    console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  
  fetch(data) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/company.json');
    req.onload = () => {
      data(JSON.parse(req.response));
    };
    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }
  

  onActivate(event) {
    console.log('Activate Event', event);
  }

  ngOnInit() {
  }

}
