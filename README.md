# 🌍 Countries Explorer — React Application

A React application that explores real country data using the **REST Countries API**.

Users can:

- Search countries by name
- Filter countries by region
- View important country information
- Experience proper loading and error handling

This project was built as part of a React assignment focused on practicing core React concepts such as **state management, useEffect, conditional rendering, lists, keys, and derived state**.

---

## 🎯 Objective

Build a Countries Explorer app that lets users:

- Load real country data from an API
- Search by country name
- Filter by region
- Handle loading and errors properly

---

## 🧠 React Concepts Practiced

This project intentionally practices:

- `useState` for managing app state
- `useEffect` for API fetching
- Correct dependency array usage `[search, region]`
- Derived state using `.filter()`
- Conditional rendering
- Rendering lists with stable keys
- Handling asynchronous data safely
- Defensive UI for missing API fields

---

## 🛰️ API Used (No API Key Required)

**REST Countries API**

### Endpoints used

| Purpose | Endpoint |
|---------|----------|
| All countries | `https://restcountries.com/v3.1/all?fields=name,flags,region,population` |
| Search by name | `https://restcountries.com/v3.1/name/{name}?fields=name,flags,region,population` |
| Filter by region | https://restcountries.com/v3.1/region/{region}?fields=name,flags,region,population` |

To improve performance, only required fields are requested:


---

## 🗂️ Application State

The app maintains the following state:

```js
countries  // array of countries
loading    // boolean
error      // string | null
search     // string
region     // string (default: "all")
```
## ▶️ How to Run the Project
Clone the repository:
```
git clone https://github.com/kubra-Islami/countries-explorer.git 

```
Navigate to the project folder:
```
cd countries-explorer

```

Install dependencies:
```
npm install

```

Run the project:

```
npm run dev

```
Open in browser:
```
http://localhost:5173

```
