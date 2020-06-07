// from https://github.com/pshihn/rough-notation
export const options = {
  /**
   * This is a mandatory field. It sets the annotation style. Following are the list of supported annotation types:
   * underline: Create a sketchy underline below an element.
   * box: This style draws a box around the element.
   * circle: Draw a circle around the element.
   * highlight: Creates a highlight effect as if maked by a highlighter.
   * strike-through: This style draws a box around the element.
   * crossed-off: This style draws a box around the element.
   */
  type: 'underline',
  // Boolean property to turn on/off animation when annotating.
  animate: true,
  // Duration of the animation in milliseconds.
  animationDuration: 800,
  // Delay in animation in milliseconds.
  animationDelay: 0,
  // String value representing the color of the annotation sketch.
  color: 'currentColor',
  // Width of the annotation strokes.
  strokeWidth: 1,
  // Padding between the element and roughly where the annotation is drawn.
  padding: 5,
  // By default annotations are drawn in two iterations, e.g. when underlining, drawing from left to right and then back from right to left. Setting this property can let you configure the number of iterations.
  iterations: 2
}
