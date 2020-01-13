import { Component, OnInit } from '@angular/core';
import {StatsService} from '../api/services';
import {AuthenticationService} from '../authentication.service';
import {MatSnackBar} from '@angular/material';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';
import {ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statsApi: StatsService, private authService: AuthenticationService, private snackBar: MatSnackBar) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  clientCount: number;
  avgNumberAppointment: number;
  avgRelookeuseMark: number;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Clients', 'Relookeuses', 'Admin'];
  public pieChartData: SingleDataSet = [0, 0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  loading: boolean = true;

  ngOnInit() {
    this.statsApi.getApiStats().subscribe(ok => {
      this.clientCount = ok.clientCount;
      this.avgNumberAppointment = ok.avgNumberAppointment;
      this.avgRelookeuseMark = ok.avgRelookeuseMark;
      this.pieChartData = [(ok.clientCount - ok.adminCount) - ok.relookeuseCount, ok.relookeuseCount, ok.adminCount];
      this.loading = false;
    }, error => {
      if (error.status === 401) {
        this.authService.logout();
        this.snackBar.open('Votre session a expiré', 'Ok');
      } else if (error.status === 403) {
        this.authService.logout();
        this.snackBar.open('Il semblerait que vous ne soyez plus admin', 'Ok');
      } else {
        this.snackBar.open('Un problème est survenu lors de la connexion à l\'api! Veuillez réessayer!', 'Ok');
      }
    });
  }

}
