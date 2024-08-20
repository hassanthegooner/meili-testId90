import { Component, Input } from '@angular/core';
import { Meili } from 'capacitor-meili';
import { MeiliEnvironment, MeiliFlow } from 'capacitor-meili/dist/esm/types';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  env = MeiliEnvironment.Dev;
  ptid = '100.9';

  async openMeiliDirect() {
    try {
      Meili.openModal({
        env: this.env,
        ptid: this.ptid,
        flow: MeiliFlow.Direct,
        availParams: {
          // overriding currency
          currencyCode: 'GBP',
        },
        toolbarCloseIconColor: '#7953FF',
        toolbarTitle: 'ID90 Car Rental',
        toolbarTitleColor: '#7953FF',
      });
    } catch (error) {}
  }

  async openMeiliConnect() {
    try {
      Meili.openModal({
        env: this.env,
        ptid: this.ptid,
        flow: MeiliFlow.Connect,
        availParams: {
          pickupLocation: 'BCN',
          dropoffLocation: 'BCN',
          pickupDate: '2025-01-01',
          pickupTime: '12:00',
          dropoffDate: '2025-01-07',
          dropoffTime: '12:00',
          driverAge: 35,
          residency: 'GB',
        },
        toolbarCloseIconColor: '#7953FF',
        toolbarTitle: 'ID90 Car Rental',
        toolbarTitleColor: '#7953FF',
      });
    } catch (error) {}
  }

  async openMeiliBookingManager() {
    try {
      Meili.openModal({
        env: this.env,
        ptid: this.ptid,
        flow: MeiliFlow.BookingManager,
        // overriding currency
        additionalParams: {
          prefillOnly: true,
          lastName: 'Bloggs',
          confirmationId: 'TESTID123'
        },
        toolbarCloseIconColor: '#7953FF',
        toolbarTitle: 'ID90 Car Rental',
        toolbarTitleColor: '#7953FF',
      });
    } catch (error) {}
  }
}
