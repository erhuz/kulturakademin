# Kulturakademin - K-Play
This project is about making a netflix-like experience with Kulturakademin's existing network of webcasts and podcasts, which you can find [here](https://www.kulturakademin.com/k-play).

## Installation Guide
1. Clone the repository
```
git clone https://github.com/erhuz/kulturakademin.git
```

2. install 3rd party packages
```
npm install
// or `yarn install` depending on your preference
```

3. You're ready to go!

You can start the dev-server with `npm start` then visit [http://localhost:3000](http://localhost:3000) in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

##Feedback

- In your components folders you have unused css-files.
	- (Swipecontainer, SwipeItem, DefaultLayout, -> pages Categories, Index, Search, Webcast).
- Remove unused imports/variables, maybe try a linter to help you keep track of unused code. [https://eslint.org/](https://eslint.org/).
	- (Backbutton, BottomNav, Feedcontqiner, Header, Swipecontainer, SwipeItem, DefaultLayout, Categories, Index, Search, Webcast).
- Remove pages thats not in use (Test).
- Remove code that has been commented out.
	- (App, Feedcard line 23, FeedContainer line 7, SwipeItem line 23 and line 88, SwipeContainer line 51).
- You are using css files and inline styling. Checkout style-components then you can use props for dynamic css attributes ex. Background-images.
- Be consistent with the usage of class vs function components in your react files.
- In Swipecontainer on line 89 the overflow is hidden, change it to scroll ;)
- Remove empty files. 
	- (webcast.css, test.css, defaultLayout.css, swipeItem.css, swipeContainer.css, categories.css, index.css, search.css).
- Try destructuring your props.
- You only need to write “center” once in background-position css-property. 
	- (In swipeItem/index.js line 39).
- If you put your images in a image-folder in Public you can use “/images/image1” instead of '../../assets/images/image1’ when you import them.
- Remove empty functions. 
	- (swipeContainer line 68 onSwipeStart-function).
- Try being consistent with your color-formats, if you use both “white”, “#fff” and “#ffffff” it will be more difficult for you to find and change all occurrences of white if your designers want to change it. Even better, try CSS-variables and you only have to change one lite of code.
- Use easy-to-understand classnames. 
	- (feedCard/index.js line 72 className=“bla”) Do you need classnames everywhere? Maybe you should look into CSS-selectors, so you don’t have to come up with differens classnames all the time.
- Don’t forget to set an alt-property to image-elements. This is important for accessibility.
- Several Links to-functions receive no properties. 
	- (ex. SearchComponent line 22, Header line 68).
- Remove Routes you don’t want you user to find, both “/menu” and “/test/“ leads to your test-page.
- If you use DefaultLayout everywhere you can wrap all pages with it in your App.js. Keep it DRY!
- Do you need a Search-page when it only contains one component and no styling? Why not use the component itself in your routes?. Same thing with Categories-page.
- Remove unused dependencies. ("styled-components" is installed but never used)


