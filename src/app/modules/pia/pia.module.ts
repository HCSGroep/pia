import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiaComponent } from './pia.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PiaRoutingModule } from './pia-routing.module';
import { RevisionService } from 'src/app/services/revision.service';
import { AnswerService } from 'src/app/services/answer.service';
import { ActionPlanService } from 'src/app/services/action-plan.service';
import { AnswerStructureService } from 'src/app/services/answer-structure.service';
import { ArchiveService } from 'src/app/services/archive.service';
import { AttachmentsService } from 'src/app/services/attachments.service';
import { MeasureService } from 'src/app/services/measures.service';
import { PiaService } from 'src/app/services/pia.service';
import { StructureService } from 'src/app/services/structure.service';


@NgModule({
  declarations: [
    PiaComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    PiaRoutingModule,
  ],
  providers: [
    PiaService,
    ArchiveService,
    StructureService,
    AnswerStructureService,
    MeasureService,
    ActionPlanService,
    AttachmentsService,
    RevisionService
  ]
})
export class PiaModule { }
