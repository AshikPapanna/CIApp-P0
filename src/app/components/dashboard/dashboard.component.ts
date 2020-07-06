import { Component, OnInit, AfterViewChecked } from "@angular/core";
import $ from "jquery";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, AfterViewChecked {
  public isCollapsed=false;
  constructor() {
   
  }
  ngAfterViewChecked(): void {
    $("#sidebarCollapse").one("click", function () {
      $("#sidebar").toggleClass("active");
    });
    $(".ci-main-menu li").one("click",()=>{
      $(this).siblings("li.active").each(()=>{$(this).removeClass("active")});
      $(this).addClass("active");
    })
  }

  ngOnInit() {}
}
