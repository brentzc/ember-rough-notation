import Component from '@glimmer/component';
import { action } from '@ember/object';
import { annotate } from 'rough-notation';
import { options } from '../utils/options';

export default class RoughNotationComponent extends Component {
    @action animate() {
        if (this.args.show) {
            this.annotation.show();
        } else {
            this.annotation.hide();
        }
    }

    @action initializeAnnotation(element) {
        const {
            type = options.type,
            animate = options.animate,
            animationDuration = options.animationDuration,
            animationDelay = options.animationDelay,
            color = options.color,
            strokeWidth = options.strokeWidth,
            padding = options.padding,
            iterations = options.iterations
        } = this.args;

        this.annotation = annotate(element, {
            type,
            animate,
            animationDuration,
            animationDelay,
            color,
            strokeWidth,
            padding,
            iterations
        });

        if (this.args.group) {
            this.args.group.push(this.annotation);
        } else {
            this.animate();
        }
    }
}
