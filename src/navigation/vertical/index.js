// This array represents the routes that will be displayed in the sidebar of the application.
// Each object in the array defines a route with properties such as title, icon, and path.
// These routes are used to navigate to different components or sections of the application.


import List from "@icons/format-list-bulleted.svg";

// Exporting an array of route objects
export default [

  // Route object for the Button component
  {
    // Title of the route, displayed in the sidebar
    title: 'Buttons',
    // Icon associated with the route, displayed in the sidebar
    icon: '',
    // Path to navigate to when the route is clicked
    to: '/components/buttons'
  },

  {
    title: 'Lists',
    icon:  '' ,
    to:'/components/lists'
  },
  {
    title: 'Avatars',
    icon:  '' ,
    to:'/components/avatars'
  },
  {
    title: 'Tabs',
    icon:  '' ,
    to:'/components/tabs'
  },
  {
    title: 'Badges',
    icon:  '' ,
    to:'/components/badges'
  },
]
