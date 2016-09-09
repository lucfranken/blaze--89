import { Template } from 'meteor/templating';

import './main.html';

Template.users.helpers({
  users() {
    return [
      {
        name: 'John',
        age: 12,
      },
      {
        name: 'Jane',
        age: 21,
      },
    ];
  },
});

// Template.user.helpers({
//   users() {
//     return [
//       {
//         name: 'John',
//         age: 12,
//       },
//       {
//         name: 'Jane',
//         age: 21,
//       },
//     ];
//   },
// });
