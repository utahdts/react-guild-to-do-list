# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },


## HTTP Verb usage
[www.restapitutorial.com](https://www.restapitutorial.com/lessons/httpmethods.html)

This REST API uses the following HTTP verbs with the following results based if the url is for a collection/list of records or targets a single record:

* DELETE *Delete*
  * collection: 405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable.
  * specific: 200 (OK). 404 (Not Found), if ID not found or invalid.
* GET *Read*
  * collection: 200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists.
  * specific: 200 (OK), single customer. 404 (Not Found), if ID not found or invalid.
* PATCH *Update/Modify*
  * collection: 405 (Method Not Allowed), unless you want to modify the collection itself.
  * specific: 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.
* POST *Create*
  * collection: 201 (Created), 'Location' header with link to /customers/:id containing new ID.
  * specific: 404 (Not Found), 409 (Conflict) if resource already exists..
* PUT *Update/Replace*
  * collection: 405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection.
  * specific: 200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.

## URL templates
Here are templates for the different objects and their urls to which the above HTTP Verbs may be applied
* Accounts: `/api/v1/accounts`
* Account: `/api/v1/accounts/:accountId`
* ToDo-Lists: `/api/v1/accounts/:accountId/todo-lists`
* ToDo-List: `/api/v1/accounts/:accountId/todo-lists/:toDoListId`
* ToDos: `/api/v1/accounts/:accountId/todo-lists/:toDoListId/todos`
* ToDo: `/api/v1/accounts/:accountId/todo-lists/:toDoListId/todos/:toDoId`

## Example Account->todolists->todoitems data
[
  {
    id: 'some-id-here-unieuq1',
    name: 'account #1',
    todo-lists: [
      {
        id: 'some-id-here-unieueq2',
        name: 'to do list #1',
        todo-items: [
          {
            id: 'some-id-here-unique3',
            name: 'to do item #1',
          }
        ]
      }
    ]
  }
]
