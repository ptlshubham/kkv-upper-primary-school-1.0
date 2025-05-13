import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.services';
import { StaffService } from 'src/app/core/services/staff.services';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  standalone:false
})
export class AchievementsComponent implements OnInit {
  p: number = 1;
  studentAchievementsList: any = [];
  staffAchievementsList: any = [];

  pl: number = 1;
  ps: number = 1;
  constructor(
    private homeService: HomeService,

  ) {
  }

  ngOnInit(): void {
    this.getachievementsListDetails();
  }
  getachievementsListDetails() {
    this.homeService.getAchievementsList(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.studentAchievementsList = res.filter((a: any) => a.purpose == 'Student');
      this.staffAchievementsList = res.filter((a: any) => a.purpose == 'Staff');

    })
  }

}