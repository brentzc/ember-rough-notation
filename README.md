ember-rough-notation
==============================================================================

An Ember wrapper for [RoughNotation](https://roughnotation.com/), a small Javascript library to create and animate annotations on a web page.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-rough-notation
```


Usage
------------------------------------------------------------------------------

### Rough-Notation Component

This is the main component for using an annotation.

#### Examples 
```
{{!-- Inline component --}}
<Rough-Notation @type="underline" @show={{true}} @text="Lorem Ipsum" />

{{!-- Block Notation --}}
<Rough-Notation @type="underline" @show={{true}}>
    Lorem Ipsum
</Rough-Notation>
```

#### Properties
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| type | string | underline | This is a mandatory field. It sets the annotation style. Options are underline, box, circle, highlight, strike-through, crossed-off |
| show | boolean | false | Show/hide the annotation |
| group | array | | an array of annotations maintained by the [Rough-Notation-Group](#rough-notation-group) component |
| text | string | | The text to be rendered inside the component if no block content exists |
| animate | boolean | true | Boolean property to turn on/off animation when annotating |
| animationDuration | int | 800 | Duration of the animation in milliseconds |
| animationDelay | number | 0 | Delay in animation in milliseconds. |
| color | string | currentColor | String value representing the color of the annotation sketch |
| strokeWidth | int | 1 | Width of the annotation strokes |
| padding | int | 5 | Padding between the element and roughly where the annotation is drawn |
| iterations | int | 2 | By default annotations are drawn in two iterations, e.g. when underlining, drawing from left to right and then back from right to left. Setting this property can let you configure the number of iterations |

### Rough-Notation-Group

Multiple annotations can be grouped together and the animations triggered in order by using a group component. It yields a `group` array that can be passed to Rough-Notation components.

#### Examples
```
    <Rough-Notation-Group @show={{true}} as |group|>
        <p>
            Lorem ipsum dolor sit amet, <Rough-Notation @group={{group}} @text="consectetur adipiscing" /> elit. Donec condimentum nibh eleifend, egestas orci a, vulputate lorem. <Rough-Notation @group={{group}} @text="Fusce ornare" /> molestie ipsum sed tincidunt.
        </p>
    </Rough-Notation-Group>
```

#### Properties
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| show | boolean | false | Show/hide the annotation |


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
