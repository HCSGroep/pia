import { Injectable } from '@angular/core';
import { Evaluation } from 'app/entry/entry-content/evaluations/evaluation.model';
import { Measure } from 'app/entry/entry-content/measures/measure.model';

@Injectable()
export class ActionPlanService {
  data: any;
  pia: any;
  evaluationModel: Evaluation = new Evaluation();
  risks = [];
  measures = [];
  results: any;
  noPrinciplesActionPlan = true;
  noMeasuresActionPlan = true;
  noRisksActionPlan = true;

  listActionPlan() {
    this.results = [];
    const section = this.data.sections.filter((s) => {
      return s.id === 2;
    });
    section[0].items.forEach((item) => {
      item.questions.forEach(q => {
        const evaluation = new Evaluation();
        const reference_to = '2.' + item.id + '.' + q.id;
        evaluation.getByReference(this.pia.id, reference_to).then(() => {
          if (evaluation.status > 0) {
            if (evaluation.action_plan_comment && evaluation.action_plan_comment.length > 0) {
              this.noPrinciplesActionPlan = false;
            }
            this.results.push({ status: evaluation.status, short_title: q.short_title,
                                action_plan_comment: evaluation.action_plan_comment, evaluation: evaluation });
          } else {
            this.results.push({ status: null, short_title: q.short_title, action_plan_comment: null, evaluation: null });
          }
        });
      });
    });

    const measure = new Measure();
    measure.pia_id = this.pia.id;
    measure.findAll().then((entries: any) => {
      entries.forEach(m => {
        const evaluation2 = new Evaluation();
        const reference_to = '3.1.' + m.id;
        this.measures[reference_to] = null;
        evaluation2.getByReference(this.pia.id, reference_to).then(() => {
          if (evaluation2.status > 0) {
            if (evaluation2.action_plan_comment && evaluation2.action_plan_comment.length > 0) {
              this.noMeasuresActionPlan = false;
            }
            this.measures.push({ name: m.title, status: evaluation2.status, action_plan_comment: evaluation2.action_plan_comment });
          } else {
            this.measures.push({ name: m.title, status: null, action_plan_comment: null });
          }
        });
      });
    });

    const evaluation3 = new Evaluation();
    evaluation3.getByReference(this.pia.id, '3.2').then(() => {
      if (evaluation3.status > 0) {
        if (evaluation3.action_plan_comment && evaluation3.action_plan_comment.length > 0) {
          this.noRisksActionPlan = false;
        }
        this.risks['3.2'] = { status: evaluation3.status, action_plan_comment: evaluation3.action_plan_comment };
      }
    });

    const evaluation4 = new Evaluation();
    evaluation4.getByReference(this.pia.id, '3.3').then(() => {
      if (evaluation4.status > 0) {
        if (evaluation4.action_plan_comment && evaluation4.action_plan_comment.length > 0) {
          this.noRisksActionPlan = false;
        }
        this.risks['3.3'] = { status: evaluation4.status, action_plan_comment: evaluation4.action_plan_comment };
      }
    });

    const evaluation5 = new Evaluation();
    evaluation5.getByReference(this.pia.id, '3.4').then(() => {
      if (evaluation5.status > 0) {
        if (evaluation5.action_plan_comment && evaluation5.action_plan_comment.length > 0) {
          this.noRisksActionPlan = false;
        }
        this.risks['3.4'] = { status: evaluation5.status, action_plan_comment: evaluation5.action_plan_comment };
      }
    });
  }
}