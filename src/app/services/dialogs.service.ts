import { Injectable, inject } from '@angular/core';
import { AlertController } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
import { TTextID } from '../../@np-components/@types/np.types';

@Injectable({
              providedIn: 'root'
            })
export class DialogsService {
  private readonly alertController = inject(AlertController);
  private readonly translate = inject(TranslateService);


  async presentInfo(infoID: TTextID) {
      const message = this.translate.instant(infoID)
      const toast = await this.alertController.create({
                                                        message,
                                                        buttons: [
                                                          // {text: 'dont show again', handler: () => {}},
                                                          {text: 'Okay', handler: () => {}},
                                                        ],
                                                      });
      await toast.present();
      return toast;
  }

}
