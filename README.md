# adapt-grid  

**Grid** is a *presentation component* for the [Adapt framework](https://github.com/adaptlearning/adapt_framework).  

This component displays items in a grid, which can contain text and/or images.  

## Installation

**Grid** must be manually installed in the adapt framework and authoring tool.

If **Grid** has been uninstalled from the Adapt authoring tool, it may be reinstalled using the [Plug-in Manager](https://github.com/RobertPeek/adapt_authoring/wiki/Plugin-Manager).  

## Settings Overview

The attributes listed below are used in *components.json* to configure **Grid**, and are properly formatted as JSON in [*example.json*](https://github.com/RobertPeek/adapt-grid/blob/master/example.json).

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `grid`.

**_classes** (string): CSS class name to be applied to **Grid**’s containing `div`. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.  

**instruction** (string): This optional text appears above the component. It is frequently used to guide the learner’s interaction with the component.  

**_columns** (number): Enter the number of pixels the text box should be from the top of the component widget.  

**_items** (array): Multiple items may be created. Each `_item` contains values for **_position**, **_text**, and **_graphic**.  

>**_position** (object): The `_position` attributes group contains values for **_columnStart**, **_columnEnd**, **_rowStart**, **_rowEnd**, **_vPosition**, and **_hPosition**.  

>>**_columnStart** (number): Enter the column's line number for which the item should start from.  

>>**_columnEnd** (number): Enter the column's line number for which the item should end.  

>>**_rowStart** (number): Enter the row's line number for which the item should start from.  

>>**_rowEnd** (number): Enter the row's line number for which the item should end.  

>>**_vPosition** (string): Enter the item's vertical position. Options are `top`, `middle` or `bottom`.  

>>**_hPosition** (string): Enter the item's howizontal position. Options are `left`, `center` or `right`.  

>**_text** (object): The `_text` attributes group contains values for **body**, **_size**, **_lineHeight**, **_color**, and **_background**.  

>>**body** (string): This is the text for the item.  

>>**_size** (number): Enter the font size for the body text.  

>>**_lineHeight** (number): Enter the body text's line height.  

>>**_color** (string): Defines the CSS color class for the body text.  

>>**_background** (string): Defines the CSS background color class for the body text.  

>**_graphic** (object): The `_graphic` attributes group contains values for **_src**, and **alt**.

>>**_src** (string): File name (including path) of the image. Path should be relative to the *src* folder.  

>>**alt** (string): This text becomes the image’s `alt` attribute.  

## Accessibility
+ Remember to include an **alt** attribute for all your images. Screen readers will read aloud alt text content, so leave the alt text empty (`"alt": ""`) if the image does not contribute significant course content.  
+ If the alt text is left empty, the image will *not* be included in the tab order. If the component is configured to display [title or body text]((https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes)), these will remain keyboard accessible.  
+ If the alt text is assigned a value, but the component is not being tracked for course completion, assign the class `"no-state"` to **_classes**. Adapt's accessibility mode reports to the learner the 'state' of the component, whether it is complete or incomplete. It is not common practice to require interaction with (or 'completion' of) an image for course completion. Indeed, a screen reader needlessly announcing the state of an image may be distracting for the learner. Assigning the built-in class `"no-state"` prevents this.  

## Limitations

CSS grid is not fully supported in IE11, so the grid items simply stack vertically in IE11.

----------------------------
**Version number:**  1.0.0  
**Framework versions:** 5.14.0+  
**Author / maintainer:** Robert Peek  
**Accessibility support:** WAI AA   
**RTL support:** yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (latest version), Edge, Safari 11+12 for macOS+iOS  
