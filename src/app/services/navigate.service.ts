import { Injectable, inject } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular/standalone';
import { preventEvent } from '../../@np-components/utils/np-utils';
import { CROUTES } from '../@consts/app.consts';
import { ILesson, ILessonPack, TLessonPack, TOptionsTabs } from '../@types/app.types';
import { LessonsService } from './lessons.service';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  private readonly navController = inject(NavController);
  private readonly menuController = inject(MenuController);
  private readonly lessonService = inject(LessonsService);


  private animated = true;

  async goToRoute(route: string[], $event: MouseEvent) {
    preventEvent($event);
    await this.navController.navigateRoot(route, { animated: this.animated });
  }

  async goToHome($event: MouseEvent) {
    preventEvent($event);
    await this.navController.navigateRoot(CROUTES.HOME.ROUTE, { animated: this.animated });
  }

  async goToFreeplay($event: MouseEvent) {
    preventEvent($event);
    await this.navController.navigateRoot(CROUTES.PLAY.ROUTE, { animated: this.animated });
  }

  async goToPractice($event: MouseEvent, bundle: ILessonPack, lesson?: ILesson) {
    preventEvent($event);
    this.lessonService.startBundle(bundle, lesson);
    await this.navController.navigateRoot(CROUTES.PRACTICE.ROUTE, { animated: this.animated });
  }

  async goToLessons($event: MouseEvent, lesson?: TLessonPack, root = true) {
    preventEvent($event);
    if (root) {
      await this.navController.navigateRoot(CROUTES.LESSONS.ROUTES(lesson), { animated: this.animated });
    } else {
      await this.navController.navigateForward(CROUTES.LESSONS.ROUTES(lesson), { animated: this.animated });
    }
  }

  // this has been a popover a page and now its a menu...
  async goToSettings(tab: TOptionsTabs, $event: MouseEvent) {
    preventEvent($event);
    await this.closeMenu();
    await this.menuController.open('options');
  }

  async openMenu($event?: MouseEvent) {
    preventEvent($event);
    await this.menuController.open('first');
  }

  async closeMenu() {
    await this.menuController.close('first');
  }

  async closeOptions() {
    await this.menuController.close('options');
  }

  async goBack($event?: MouseEvent) {
    preventEvent($event);
    return this.navController.back({ animated: this.animated });
  }

  async goToTheory($event: MouseEvent, topic?: TLessonPack, root = true) {
    preventEvent($event);
    if (root) {
      await this.navController.navigateRoot(CROUTES.THEORY.ROUTES(topic), { animated: this.animated });
    } else {
      await this.navController.navigateForward(CROUTES.THEORY.ROUTES(topic), { animated: this.animated });
    }
  }
}
