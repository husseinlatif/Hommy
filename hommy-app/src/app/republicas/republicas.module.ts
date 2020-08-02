import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepublicasPageRoutingModule } from './republicas-routing.module';

import { RepublicasPage } from './republicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepublicasPageRoutingModule
  ],
  declarations: [RepublicasPage]
})
export class RepublicasPageModule {}
