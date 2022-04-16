## BottomSheet component

[![Netlify Status](https://api.netlify.com/api/v1/badges/3b648c9c-6490-43e9-9646-b297dc2654a5/deploy-status)](https://app.netlify.com/sites/gentle-custard-f68661/deploys)

[See Demo App](https://gentle-custard-f68661.netlify.app/)

A basic bottom sheet implementation

## Stack

- [Create React App + Typescript](https://create-react-app.dev/docs/adding-typescript/) - boilerplate app. Used Typescript because it’s important to
- [Styled-components](https://styled-components.com/) - styles. Assuming the projects that would use this would have this as a dependency
- [React-spring](https://react-spring.io/) - animation hook

## Component Behavior

| "Expanded"                                                                                                                                    | "Collapsed"                                                                                                                                   | "Dismissed"                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Screen Shot 2022-04-15 at 1 35 36 PM](https://user-images.githubusercontent.com/5474124/163662286-a3d518f8-6813-4c8b-ab79-d026c4861302.png) | ![Screen Shot 2022-04-15 at 1 35 51 PM](https://user-images.githubusercontent.com/5474124/163662288-419cd97f-2c47-44cf-8d89-7f57bacb564c.png) | ![Screen Shot 2022-04-15 at 1 36 24 PM](https://user-images.githubusercontent.com/5474124/163662289-67888df2-6c4c-4b5e-a8c2-5c1fd9753371.png) |

Bonus: The component snaps to the top of the screen if you get close enough.

## Accessibility

In this component we:

- Turn off animation if your local has set "prefers reduce motion" to true ([see docs](https://react-spring.io/guides/accessibility#accessibility))
- Made the BottomSheet's scrollable area have a tab index of 0 so that you can use arrow keys to scroll
- Use rem for font sizes so users can have larger font sizes if their local is defaulted to do so.
- Make the close button accessible by tabbing by making it a button.
- Allow devs to pass down a custom aria label for the close button (closeButtonAriaLabel prop)
- Say this is a modal by setting aria-modal to true
- Set the component’s role to “dialog”
- Set the aria-labelledby’s value to the dialog’s title

## Styles

Since all of the colors on the page change when the bottom sheet opens I added some quick theme functionality. The component is using styled-components and is expecting a theme object to be provided for it so that it can support whatever mode you want.

You can find the expected theme object shape in theme.ts. The nomenclature is based on [Material Design's logic](https://material.io/design/color/dark-theme.html#anatomy)

## Starting Project on Local

1. run `yarn install`
2. pick an app
   - regular app: `yarn start`
   - storybook: `yarn storybook`

## Note

1. Didn't have time to tackle the updating scroll size in the way that it would auto update but can do.
2. Would like to revisit the state where there is not title or subtitle to see what design would like to do with that.

## Extra Credit:

1. **How might you test this component**

- Jest component tests for collapsed, expanded, and dismissed states, scrolling behavior, tab index
- e2e cypress tests for any important feature using this.
- pull out any possible function to make unit tests

2. **A quick note on how you might assist others in adopting/using the component in their code?**

- Do a presentation about it and how to use it in whatever meeting is appropriate
- have a storybook UI story so they can play around with it before using it. This includes grab and go code
- Meet with anyone who has questions during office hours (or honestly whenever)
- If there is a documentation site both design and engineering share would update it

3. **How might you expand customization of the component?**

- Could be interesting to add custom color features for it instead of it’s set colors right now.
- make collapsed state height an optional prop
- customize the thumb bar
- make the heights for everything inline more flexible instead of static numbers, potentially based on a ref's heights.

4. **Create an example app that uses this component with different content, configurations**

- start storybook link up by running `yarn storybook` on local

5. **Describe how this might work with/in-conjunction with other kinds of similar components. Modals, Tooltips, Toasts, etc**

- Modals: ideally only one Modal or Bottom sheet is open at a time, so we could keep track of what is open in some form of shared context.
- Tooltips: this is where we would get into some really fun zIndex elevations rules so that the bottom sheet can exist over tooltips in the body and the - tooltips inside of the bottom sheet have a higher zindex elevation than the bottom sheet.
- Toasts: since toasts have to do with alerts I could see either making sure that toasts are just a higher zIndex above the bottom sheet OR making it so that when an error shows in a toast the bottom sheet closes first and then the toast shows.
