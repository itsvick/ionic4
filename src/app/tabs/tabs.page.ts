import { CommonService } from './../util/common.service';
import { Component, ViewChild, EventEmitter } from '@angular/core';
import { IonTabs, Events } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('myTabs') myTabs: IonTabs;

  pageTabs = [
    { label: "Tab One", root: 'tab1', icon: "downloads" },
    { label: "", root: '', icon: "courses", disabled: true },
    { label: "Tab Two", root: 'tab2', icon: "resources" },
    { label: "Tab Three", root: 'tab3', icon: "profile" },
  ];
  constructor(
    private commonService: CommonService,
    private events: Events
  ) {
    console.log("tabs", this.myTabs);
  }
  ionChange(ev) {
    this.commonService.currentTabName = this.myTabs.getSelected();
    console.log("tabs", this.myTabs);
    // console.log("event", ev.getSelected());
    // console.log("Next tab")
    // ev.select('tab2').then((data) => { 
    //   console.log(data)
    //  });
  }

  tabClick(tab) {
    console.log("tabClick", tab);

    if (tab.label === 'Scanner') {
      console.log("its a scanner");
    } else {
      return false;
    }
  }

  public ionTabsWillChange(event: any) {
    console.log("Inside ionChange", event);
    this.events.publish('tab.change', event);

    // const filterValue = this.pageTabs.find(item => item['root'] === event.tab);
    // console.log(filterValue);

    this.pageTabs[1].root = event.tab;
  }

}
