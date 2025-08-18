import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DywkESLE.js";import{M as l,C as t,S as i,A as s}from"./index-DjiUAfnp.js";import{S as c,F as a,D as h,a as p,C as m,b as u,c as x,d as j,L as g,E as f}from"./index.stories-ByZ8jgC8.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-rkLeB0kx.js";import"./index-BhNLfgFX.js";import"./index-DyRkmeWf.js";import"./index-46f45BQC.js";import"./index-CAEZVxT0.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-BcQiDnY4.js";import"./index-B7qWtOxe.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"datagrid",children:"DataGrid"}),`
`,e.jsxs(n.p,{children:[`Cunningham provides a DataGrid component that can be used to display data in a tabular format. The DataGrid component
is built on top of `,e.jsx(n.a,{href:"https://tanstack.com/table/v8",rel:"nofollow",children:"Tan Stack Table"}),". It can be used for client only data or server side data."]}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h2,{id:"get-started",children:"Get Started"}),`
`,e.jsx(n.p,{children:`As you will see there are two different implementations of the DataGrid (a simple one and a more versatile one). But
in both cases you will need to provide columns definition and rows, those are required props.`}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"columns"})," props is an array of objects that describe the columns of the table."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"rows"})," props is an array of objects that describe the rows of the table. Each object must have a ",e.jsx(n.code,{children:"id"})," property."]}),`
`,e.jsx(n.p,{children:"We will explore the possibilities that those props provide through the following examples."}),`
`,e.jsx(n.h2,{id:"datalist",children:"DataList"}),`
`,e.jsx(i,{language:"ts",dark:!0,format:!1,code:'import { DataList } from "@openfun/cunningham-react";'}),`
`,e.jsx(n.p,{children:"This component is a wrapper around the more complicated DataGrid component. It is made to be used for simple lists of elements that don't need pagination nor sorting. Also, it doesn't display any header."}),`
`,e.jsx(n.p,{children:"Here a quick usage example"}),`
`,e.jsx(t,{sourceState:"shown",of:h}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"simpledatagrid",children:"SimpleDataGrid"}),`
`,e.jsx(i,{language:"ts",dark:!0,format:!1,code:'import { SimpleDataGrid } from "@openfun/cunningham-react";'}),`
`,e.jsxs(n.p,{children:["This component is a wrapper around the more complicated ",e.jsx(n.code,{children:"DataGrid"}),` component. It is mostly intended to be used for client
side data that is already loaded. It provides a simple approach so you don't have to think about controlled Pagination,
Sorting etc ...`]}),`
`,e.jsx(n.p,{children:"Take a look at the following example that renders a table of users."}),`
`,e.jsx(t,{sourceState:"shown",of:m}),`
`,e.jsxs(n.p,{children:["As you can see in this example there is no pagination, but we can simply add it by adding a ",e.jsx(n.code,{children:"defaultPaginationParams"}),` props.
We will also enable a default sorting on the `,e.jsx(n.code,{children:"price"})," column with the ",e.jsx(n.code,{children:"defaultSortModel"}),` props, along with the row selection
with `,e.jsx(n.code,{children:"enableRowSelection"}),", ",e.jsx(n.code,{children:"rowSelection"})," and ",e.jsx(n.code,{children:"onRowSelectionChange"})," props."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Please click on checkboxes to select rows to see hows the ",e.jsx(n.code,{children:"onRowSelectionChange"}),` prop works, selected ids are displayed
below the table.`]}),`
`]}),`
`,e.jsx(t,{sourceState:"shown",of:u}),`
`,e.jsxs(n.p,{children:["As you can see, with ",e.jsx(n.code,{children:"SimpleDataGrid"}),` you can easily add pagination, sorting without have to worry about controlling
their states.`]}),`
`,e.jsx(n.h3,{id:"props-1",children:"Props"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"datagrid-1",children:"DataGrid"}),`
`,e.jsxs(n.p,{children:["Now let's dive into the usage of the ",e.jsx(n.code,{children:"DataGrid"}),` component. This component is more versatile and can be used for both
client side and server side data. It is also more complicated to use as you will need to control the state of the
pagination, sorting etc ...`]}),`
`,e.jsx(n.p,{children:`Please take a look at the following example that simulates a server side data that's re-fetched on each page and sorting
change.`}),`
`,e.jsx(t,{sourceState:"shown",of:a}),`
`,e.jsxs(n.p,{children:[`As you can see, in this example the pagination and sorting are now controlled, this is more verbose but gives you more
control over the state of the table, like being able to use `,e.jsx(n.code,{children:"useEffect"})," to fetch data when the state changes."]}),`
`,e.jsx(n.h3,{id:"props-2",children:"Props"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"columns",children:"Columns"}),`
`,e.jsx(n.p,{children:`As you can see there are two types of columns, one for displaying bare data and one for displaying
custom content like the last one that displays a button.`}),`
`,e.jsx(n.h3,{id:"data-columns",children:"Data Columns"}),`
`,e.jsxs(n.p,{children:["Columns that display only data must define a ",e.jsx(n.code,{children:"field"}),` property that will be used to retrieve the data from the row object,
a `,e.jsx(n.code,{children:"headerName"})," property that will be used as the column header."]}),`
`,e.jsx(n.h3,{id:"custom-columns",children:"Custom Columns"}),`
`,e.jsxs(n.p,{children:["Columns that display custom content must define a ",e.jsx(n.code,{children:"renderCell"}),` property that will be used to render the content of the
cell. This property is a function that takes a row as argument and must return a ReactNode.`]}),`
`,e.jsx(n.h3,{id:"highlight",children:"Highlight"}),`
`,e.jsxs(n.p,{children:["You can highlight any column by setting the ",e.jsx(n.code,{children:"highlight"})," property to ",e.jsx(n.code,{children:"true"}),`. This will render the column with a bold
font.`]}),`
`,e.jsx(n.h2,{id:"sorting",children:"Sorting"}),`
`,e.jsxs(n.p,{children:["By default sorting is enabled on columns but you can disable it by setting the ",e.jsx(n.code,{children:"enableSorting"})," property of columns to ",e.jsx(n.code,{children:"false"}),`.
Bare in mind that with `,e.jsx(n.code,{children:"SimpleDataGrid"})," this is all you have to do, but with the ",e.jsx(n.code,{children:"DataGrid"}),` component more work is
needed as you will need to provide `,e.jsx(n.code,{children:"sortModel"})," and ",e.jsx(n.code,{children:"onSortModelChange"})," props."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ Even though ",e.jsx(n.code,{children:"sortModel"})," is an array, only the first element will be used for now."]}),`
`]}),`
`,e.jsx(n.h2,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(n.p,{children:["The pagination for ",e.jsx(n.code,{children:"DataGrid"})," is exactly the same as ",e.jsx(n.a,{href:"?path=/story/components-pagination-doc--page",children:"Pagination"}),`,
that's why you can see that `,e.jsx(n.code,{children:"usePagination"}),` hook is used to control the state of the pagination. You can see it in action
in the server side example.`]}),`
`,e.jsx(n.h2,{id:"row-selection",children:"Row Selection"}),`
`,e.jsxs(n.p,{children:["In order to enable row selection you need to define the following props: ",e.jsx(n.code,{children:"enableRowSelection"}),", ",e.jsx(n.code,{children:"rowSelection"}),` and
`,e.jsx(n.code,{children:"onRowSelectionChange"})," props."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This feature is controlled even with ",e.jsx(n.code,{children:"SimpleDataGrid"}),` because this is a type of data that you want to keep track of
outside the grid component ( for example to delete selected rows ).`]}),`
`]}),`
`,e.jsx(n.h2,{id:"loading",children:"Loading"}),`
`,e.jsxs(n.p,{children:["The component provides out of the box a loading state that can be enabled by setting the ",e.jsx(n.code,{children:"isLoading"})," props to ",e.jsx(n.code,{children:"true"}),`.
So feel free to use it between page or sorting changes when you are fetching data from a server.`]}),`
`,e.jsx(t,{sourceState:"shown",of:g}),`
`,e.jsx(n.h2,{id:"empty-state",children:"Empty State"}),`
`,e.jsx(n.p,{children:"The component automatically displays an empty state when there is no data to display and it is not loading."}),`
`,e.jsx(t,{sourceState:"shown",of:f}),`
`,e.jsx(n.h2,{id:"actions-alignment",children:"Actions alignment"}),`
`,e.jsxs(n.p,{children:[`As you can see from examples above there's often a dedicated column for actions ( the right-most one ). Our recommendation
is to align on the right the actions buttons, in order to make this easy and convenient we automatically align the right
the cell contents of this column when you give it the `,e.jsx(n.code,{children:"id"})," ",e.jsx(n.code,{children:"actions"}),"."]}),`
`,e.jsx(n.h2,{id:"dos-and-donts",children:"Do's and don'ts"}),`
`,e.jsx(n.h3,{id:"button",children:"Button"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"❌ Don’t place button(s) in other column than the last column"}),`
`,e.jsx(n.li,{children:"✅ Do place buttons all on the right because it designates the action to be done on the whole row, and end of read parsing by eyes."}),`
`,e.jsx(n.li,{children:"✅ Be consistent, if you add a button on a row, you must do the same on the other rows."}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_1_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_1_d.svg"}),`
`,e.jsx(n.h3,{id:"primary-button",children:"Primary Button"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"❌ Don’t show on each row the primary button"}),`
`,e.jsx(n.li,{children:"✅ Do show The primary button only at the hover."}),`
`,e.jsx(n.li,{children:"✅ Do use secondary or tertiary buttons for always displayed button."}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_2_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_2_d.svg"}),`
`,e.jsx(n.h3,{id:"actions",children:"Actions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"❌ Don’t have more than one main action in a line. If you have other secondary actions, you have to put them in a menu."}),`
`,e.jsx(n.li,{children:"✅ You should only have one icon per line"}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_3_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_3_d.svg"}),`
`,e.jsx(n.h3,{id:"titles",children:"Titles"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"❌ Don’t use a title before a data table to explain what is the table"}),`
`,e.jsx(n.li,{children:`✅ Do for each table, add a title to explain what we look at in less than 7 words
If you have many subtable add another title in a H+2 sizes.`}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_4_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_4_d.svg"}),`
`,e.jsx(n.h3,{id:"maximum-width-text-width-in-a-cell",children:"Maximum Width text Width in a cell"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ If the size of a text in a cell reaches the maximum size of a cell it becomes 3 small points. If your text exceeds the size of the cell, it will be hidden and will only be displayed on screen hover."}),`
`,e.jsx(n.li,{children:"❌ Don't exceed 2 lines of entries"}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_5_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_5_d.svg"}),`
`,e.jsx(n.h3,{id:"text-weight--color",children:"Text weight & color"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"❌ Don’t use visual difference on different row in a col (ex: Col2)"}),`
`,e.jsx(n.li,{children:"✅ Do use only one column to catch the eye and very often it is the first one."}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_6_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_6_d.svg"}),`
`,e.jsx(n.h3,{id:"units",children:"Units"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"❌ Don’t put the unit in the cell but in the title of the column to avoid repetition."}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_7_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_7_d.svg"}),`
`,e.jsx(n.h3,{id:"empty-state-1",children:"Empty state"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"❌ Don’t use the primary button more than once in a page"}),`
`,e.jsx(n.li,{children:"✅ You can have many empty table on one page, it can be a primary if it's really the main goal of the screen"}),`
`,e.jsx(n.li,{children:"✅ Do use secondary button if you have many object inn one page."}),`
`]}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_8_dn.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_8_d_1.svg"}),`
`,e.jsx("img",{src:"components/DataGrid/resources/dd_8_d_2.svg"})]})}function F(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{F as default};
