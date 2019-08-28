import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAnchor, faEdit, faDraftingCompass, faAd, faImages, faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  active = false;
  constructor() {
    library.add(faAnchor, faEdit, faDraftingCompass, faAd, faImages, faCube);
  }

  ngOnInit() {
  }

}
