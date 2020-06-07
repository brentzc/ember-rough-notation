import { modifier } from 'ember-modifier';
import { annotate as a } from 'rough-notation';
import { options } from '../utils/options';

export default modifier(function annotate(element, [ args ]) {
    const {
        type = options.type,
        animate = options.animate,
        animationDuration = options.animationDuration,
        animationDelay = options.animationDelay,
        color = options.color,
        strokeWidth = options.strokeWidth,
        padding = options.padding,
        iterations = options.iterations
    } = args;

    const annotation = a(element, {
        type,
        animate,
        animationDuration,
        animationDelay,
        color,
        strokeWidth,
        padding,
        iterations
    });
    annotation.show();
});