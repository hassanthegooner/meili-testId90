import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Capacitor, PluginListenerHandle } from '@capacitor/core';
import { Meili } from 'capacitor-meili';
import { MeiliEnvironment, MeiliFlow } from 'capacitor-meili/dist/esm/types';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit, OnDestroy {
  @Input() name?: string;

  private iosAllEventsListener: PluginListenerHandle | null = null;
  private androidEventsListener: PluginListenerHandle | null = null;

  env = MeiliEnvironment.Dev;
  ptid = '100.9';

  async ngOnInit() {
    // Call setupListeners when the component initializes
    this.setupListeners();
  }

  async ngOnDestroy() {
    // Remove the event listeners when the component is destroyed
    if (this.iosAllEventsListener) {
      this.iosAllEventsListener.remove();
      this.iosAllEventsListener = null;
    }
    if (this.androidEventsListener) {
      this.androidEventsListener.remove();
      this.androidEventsListener = null;
    }
  }

  async setupListeners() {
    if (Capacitor.getPlatform() === 'ios') {
      this.iosAllEventsListener = await Meili.addListener(
        'all_events',
        (event) => {
          console.log(
            'ExploreContainer all_events',
            event.eventName,
            event.data
          );
        }
      );
    } else if (Capacitor.getPlatform() === 'android') {
      this.androidEventsListener = await Meili.addListener(
        'android_web_events',
        (data) => {
          console.log('ExploreContainer android_web_events', data);
        }
      );
    }
  }

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
          confirmationId: 'TESTID123',
        },
        toolbarCloseIconColor: '#7953FF',
        toolbarTitle: 'ID90 Car Rental',
        toolbarTitleColor: '#7953FF',
      });
    } catch (error) {}
  }
}
