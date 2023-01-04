import { NgModule } from '@angular/core';
import { LowerCasePipe } from '../lower-case.pipe';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [
    CardModule.rootComponent,

  ],
  imports: [
    LowerCasePipe
  ],
  exports:[
    CardModule.rootComponent
  ]
})
export class CardModule {
    static rootComponent = CardComponent

}
