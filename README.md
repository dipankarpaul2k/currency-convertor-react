# Currency Convertor with React

A simple Currency Convertor app.

The main file App.jsx uses the `useState` and `useEffect` hooks from the React library to manage state and perform side effects. The component imports the `InputBox` component from a local file and the `useCurrencyInfo` hook from another file. It defines several state variables to store the amount, source currency, target currency, and converted amount.

The component fetches currency information using the `useCurrencyInfo` hook and extracts the currency options from the fetched data. It provides methods to swap the source and target currencies and to convert the amount based on the selected currencies. The component renders a form with two `InputBox` components for the source and target currencies, a swap button, and a convert button.

## InputBox.jsx

This is a functional component that renders an input box and a select dropdown for currency selection. It takes several props including `label`, `amount`, `onAmountChange`, `onCurrencyChange`, `currencyOptions`, `selectCurrency` and `amountDisable`. It uses the `useId` hook from the react library to generate a unique ID for the input element. The component renders a div with two child divs, one for the label and input, and the other for the currency select dropdown.

- `label (string)`: The label text for the input box.
- `amount (number)`: The value of the input box.
- `onAmountChange (function)`: A callback function to handle changes in the input box value.
- `onCurrencyChange (function)`: A callback function to handle changes in the currency select dropdown value.
- `currencyOptions (array)`: An array of currency options for the select dropdown.
- `selectCurrency (string)`: The currently selected currency.
- `amountDisable (boolean)`: Whether the input box should be disabled.

## useCurrencyInfo.js

This is a custom React hook that fetches currency data from an API based on the `fromCurrency` parameter. It uses the `useEffect` and `useState` hooks from React to handle the asynchronous fetch request and store the fetched data.

- `fromCurrency`: A string representing the currency code for which the data is being fetched.
