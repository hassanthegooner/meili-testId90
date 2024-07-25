import { Component, Input } from '@angular/core';
import { Meili } from 'capacitor-meili'
import { MeiliEnvironment, MeiliFlow } from 'capacitor-meili/dist/esm/types';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  async openMeiliModal() {
    try {
      Meili.openModal({
        currentFlow: MeiliFlow.Direct,
        ptid: "100.9",
        env: MeiliEnvironment.Dev
      })
    } catch (error) {
      
    }
  }

}
