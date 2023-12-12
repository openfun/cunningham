# @openfun/cunningham-react

## 2.4.0

### Minor Changes

- da3761b: make DataGrid responsive
- 72f7048: make Pagination responsive

### Patch Changes

- 7ddcfeb: fix closing of menu via toggle button

## 2.3.0

### Patch Changes

- e3882eb3: support ReactNode as input label

## 2.2.0

### Minor Changes

- 94b32be5: add monoline props to multi select

## 2.1.0

### Minor Changes

- 01528b93: render Button as link
- bbf3df85: add TextArea component

### Patch Changes

- b714c3d5: Update stylesheet to use modern SASS
- d39d33d0: fix inputs overflowing placeholder

## 2.0.0

### Major Changes

- cce8eccf: add themes management

### Minor Changes

- cf3a589d: Export Button props
- 1c7a114b: add ref to Select

## 1.3.1

### Patch Changes

- 0c757957: Include Popover component to package exports
- 3a6028f0: Fix Select usage with react hook form
- 034e2994: Fix input usage with react hook form
- a1e8f463: fix checkbox double onChange
- a46d28f0: make multi select height homogeneous

## 1.3.0

### Minor Changes

- 4e1d0f0: rework the behavior of the Select component

### Patch Changes

- 3fc464b: fix some edge effects on the mono select component

## 1.2.0

### Minor Changes

- 4616ad9: add select menu empty placeholder

### Patch Changes

- 8470126: fix failing selection of last removed item
- fd988c0: fix controlled searchable select triggering onChange undefined

## 1.1.0

### Minor Changes

- 9de9a97: improve Select actions ui
- 32b8dc0: make DatePicker placeholders uppercase
- 9be1ec5: make the DataGrid checkboxes column the smallest possible
- 9a349c1: fix Select and Input error colors
- c002896: add Button nano size
- 94f392e: update DatePicker error color
- 37772a4: add a background color to DatePicker segments
- c90f66f: hide input number arrows
- 09e474c: improve Pagination behavior
- cf542e4: fix DatePicker, Select, Input success colors
- d36e314: improve FileUploader style
- c7000f3: fix props not recognized on the input element
- 1c45b93: homogenize form fields colors
- cf299d9: add auto right alignment for the actions column in DataGrid

### Patch Changes

- 4e6e5a2: fix button style
- 4d2a5d1: improve DataGrid's empty placeholder's ui
- 495f7d3: Fix DatePicker focus style
- 6257dd9: fix DatePicker label focused
- 7128e7f: using correct fs- class for DataGrid headers
- 8fd34ad: fix Radio, Checkbox fullWidth

## 1.0.2

### Minor Changes

- 468c816: add RHF examples
- b530e96: add textItems to Field

### Patch Changes

- a88aa1a: fix isActive console warning

## 1.0.1

### Patch Changes

- 66c25bc: export more types

## 1.0.0

### Major Changes

- The first bunch of components and features are ready,
  the first milestone has been reached

### Minor Changes

- 9edb976: Position Datepicker popover on top or bottom depending space available

### Patch Changes

- fd7ad8a: Do not apply font-family to all elements with `*` selector

## 0.11.1

### Patch Changes

- 4eae45c: fix RadioGroup optional prop
- 3e1cdbe: bug fix, remove usage of InputRefType

## 0.11.0

### Minor Changes

- cd42afb: Add a timezone props to date picker components
- 0dc46d1: Restrict input formats of date picker components to IS0 strings

### Patch Changes

- 3471e2e: Add Button token font-family
- bae7392: Fix flaky tests on DateRangePicker
- 8cf8e1e: Fix datepicker component's output timezone management

## 0.10.0

### Minor Changes

- 5c61413: Add calendar system customization in `DatePicker` component
- e4c1df5: fix datagrid column unique key
- 0d6b98e: Introduce a DateRangePicker component
- 0775490: Introduce a common DatePickerAux component
- 114d0b5: Refactor DatePicker component

### Patch Changes

- c35cc603: Fixed development warning in `CalendarAux` component
- 2cd8c6e8: Refactor DatePicker's tests which no longer depend on the user's locale.

## 0.9.0

### Minor Changes

- 672f4be: make use of tokens references
- 80e8dc4: add file uploader

## 0.8.2

### Patch Changes

- c160359: Export date picker components

## 0.8.1

### Patch Changes

- 501ba1a: fix DatePicker alignments

## 0.8.0

### Minor Changes

- 8cf2bb2: improve checkbox input styling configuration
- 787bd3d: allow autocompletion for DataGrid's renderCell
- 10fa71e: add datepicker component
- 30d08a9: add fullWidth props to Button
- 0153b50: add forms examples to documentation
- fe91471: add pixel-to-rem sass util function
- c8afa10: add multi select
- 1d1cf81: add a popover component
- 38538e3: improve radio input styling configuration
- 1ff37cf: improve input styling configuration

### Patch Changes

- 2c6a66b: change pagination border color
- a869fe5: reduce inputs borders
- 76ad562: Fix initial focused item on select opening under the calendar
- 6f05995: make eof stylesheet consistent with a newline
- 1cb1b48: add min-width to Field
- 9127fd8: support nested field in DataGrid

## 0.7.0

### Minor Changes

- eb6692b: add a design token for checkbox hover background
- b5fcfdf: add support for CJS
- e05c6b7: export DefaultToken types and defaultTokens variable
- 527c3fc: set specific cursor on checkbox related components
- c53d348: add customization doc
- c117279: add clearable option to Select
- 9d7ad48: add Switch component
- e72606c: make inputs labels bolder
- c93c8d2: add disable property to select option
- d79f01f: add the possibility to hide select label

### Patch Changes

- 8cda417: fix Storybook source blocks
- bc6d085: change label color on state error ( select, input )
- ce6eb50: migrate ArgsTable to ArgTypes and rework imports
- 75c6e2e: change label color when focused ( select, input )

## 0.6.2

### Patch Changes

- 15eb9b9: Add missing types for Checkbox and Radio

## 0.6.1

### Patch Changes

- 4777a75: fix "exports" attribute of package.json. Default condition must be last one.

## 0.6.0

### Minor Changes

- 2ff5fc5: add Select component
- 2ff5fc5: add forwardRef to Button
- 2ff5fc5: create a generic LabelledBox

### Patch Changes

- 3545af8: Make package pure ESM

## 0.5.0

### Minor Changes

- 7513b4d: fix type files imports and rollup them
- b53afcb: Add DataList component

## 0.4.0

### Minor Changes

- 4f11684: Add Field component
- feea284: Add Input component
- 43096e2: add Checkbox component
- f5cb2e7: add Radio component

### Patch Changes

- a462bb5: add compact mode to Field
- 26be159: make Pagination use new Input

## 0.3.0

### Minor Changes

- 1be02f5: remove button box shadow

### Patch Changes

- e90563a: Install missing Storybook dependencies

## 0.2.0

### Minor Changes

- e36dc63: add DataGrid, SimpleDataGrid components
- e36dc63: add button sizes: small and medium
- e36dc63: add Loader component
- e36dc63: add Pagination component
- e36dc63: add i18n
- e36dc63: add material icons
- e36dc63: add active state on button

### Patch Changes

- e36dc63: allow async font loading

## 0.1.1

### Patch Changes

- 2a5acea: The CSS utility classes are no longer automatically included when using Cunningham bin
- 722b66b: Make Button handle icon only
- cd88e46: Split fonts in a separated CSS file

## 0.1.0

### Minor Changes

- 4ebbf16: Add storybook
- 4ebbf16: Add package
- 4ebbf16: Add component's tokens handling

[unreleased]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@2.4.0...main
[2.4.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@2.3.0...@openfun/cunningham-react@2.4.0
[2.3.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@2.2.0...@openfun/cunningham-react@2.3.0
[2.2.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@2.1.0...@openfun/cunningham-react@2.2.0
[2.1.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@2.0.0...@openfun/cunningham-react@2.1.0
[2.0.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@1.3.1...@openfun/cunningham-react@2.0.0
[1.3.1]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@1.3.0...@openfun/cunningham-react@1.3.1
[1.3.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@1.2.0...@openfun/cunningham-react@1.3.0
[1.2.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@1.1.0...@openfun/cunningham-react@1.2.0
[1.1.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@1.0.2...@openfun/cunningham-react@1.1.0
[1.0.2]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@1.0.1...@openfun/cunningham-react@1.0.2
[1.0.1]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@1.0.0...@openfun/cunningham-react@1.0.1
[1.0.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.11.1...@openfun/cunningham-react@1.0.0
[0.11.1]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.11.0...@openfun/cunningham-react@0.11.1
[0.11.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.10.0...@openfun/cunningham-react@0.11.0
[0.10.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.9.0...@openfun/cunningham-react@0.10.0
[0.9.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.8.2...@openfun/cunningham-react@0.9.0
[0.8.2]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.8.1...@openfun/cunningham-react@0.8.2
[0.8.1]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.8.0...@openfun/cunningham-react@0.8.1
[0.8.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.7.0...@openfun/cunningham-react@0.8.0
[0.7.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.6.2...@openfun/cunningham-react@0.7.0
[0.6.2]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.6.1...@openfun/cunningham-react@0.6.2
[0.6.1]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.6.0...@openfun/cunningham-react@0.6.1
[0.6.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.5.0...@openfun/cunningham-react@0.6.0
[0.5.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.4.0...@openfun/cunningham-react@0.5.0
[0.4.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.3.0...@openfun/cunningham-react@0.4.0
[0.3.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.2.0...@openfun/cunningham-react@0.3.0
[0.2.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.1.1...@openfun/cunningham-react@0.2.0
[0.1.1]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.1.0...@openfun/cunningham-react@0.1.1
[0.1.0]: https://github.com/openfun/cunningham/compare/@openfun/cunningham-react@0.0.0...@openfun/cunningham-react@0.1.0
[0.0.0]: https://github.com/openfun/cunningham/compare/0b532742e7f9747c5d573b869daa8aca0d79e7f1...@openfun/cunningham-react@0.0.0
