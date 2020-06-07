import Component from '@glimmer/component';
import { action } from '@ember/object';
import { annotationGroup } from 'rough-notation';
import { tracked } from '@glimmer/tracking';

export default class RoughNotationGroupComponent extends Component {
    @tracked group = [];

    get annotationGroup() {
        return annotationGroup(this.group);
    }

    @action animate() {
        if (this.args.show) {
            this.annotationGroup.show();
        } else {
            this.annotationGroup.hide();
        }
    }
}
