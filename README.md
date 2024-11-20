[![banner-car-dealer-app.png](https://i.postimg.cc/HL2QdrPj/banner-car-dealer-app.png)](https://postimg.cc/7C5CNZ4y)

 Index |
| ------ |
| [Project Description](#project-description) |
| [Features](#features) |
| [Architecture](#architecture) |
| [Functionality](#functionality) |
| [Technologies Used](#technologies-used) |

### Project Description:
This project is a web application called "Car Dealer App". The app allows users to search for vehicles by make and year. It consists of a "Landing Page" and a results page. The application was developed to showcase my skills in web application development.

### Features:
Car Dealer App consists of: 
#### Landing Page:
- Attractive welcome page design.
- Search form allowing users to select vehicle make and year.
- Intuitive navigation for an enhanced user experience.

[![landing-page-car-dealer-app.png](https://i.postimg.cc/gktcFmDd/landing-page-car-dealer-app.png)](https://postimg.cc/tYPGF0wm)

#### Search Results Page:
- Page displaying filtered vehicle results based on selected criteria.
- Detailed information for each vehicle, including make, model, year and ID.
- Clean and responsive user interface.

[![results-page-car-dealer-app.png](https://i.postimg.cc/3wm3vpHJ/results-page-car-dealer-app.png)](https://postimg.cc/SXQ00nsw)

### Architecture:
#### Overview

The Car Dealer App is a modern web application built with a robust and scalable architecture, leveraging the following technologies:

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript, ensuring type safety and enhanced developer experience.
- Vite: A fast build tool and development server that significantly improves the development workflow.
- Axios: A promise-based HTTP client for making API requests.
- React Router DOM: A library for routing in React applications, enabling navigation between different pages.

#### Styling

The application utilizes a combination of styling libraries to ensure a sleek, responsive, and modern user interface:

- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- NextUI: A React-based UI library providing a set of high-quality components.
- Framer Motion: A library for creating animations and interactions, adding a dynamic feel to the application.

#### API Integration

The application interacts with two main API endpoints:

#### Get Car Makes:
Fetches a list of car makes to populate the search form

- Endpoint: /api/vehicles/GetMakesForVehicleType.
- Method: GET.
- Response: An array of car makes.

#### Get Car Models by Make and Year:
Retrieves car models based on the selected make and production year

- Endpoint: /api/vehicles/GetModelsForMakeIdYear.
- Method: POST.
- Request Body:
{
  "make": "seelectedMake",
  "year": "selectedYear"
}
- Response: An array of car models that match the search criteria.

#### Application Structure

The application is organized into several key components:

- Landing Page: The main entry point of the application, where users can select the car make and production year.
- Search Results: Displays the results based on the user's search criteria, showing a list of car models that match the selected make and year.

### Functionality:

When users enter the Car Dealer App, the following processes and features are implemented to ensure a seamless experience:

#### Fetching Car Makes:

As soon as the main component mounts, a useEffect hook triggers a GET request to the endpoint https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json.
The response from this API call returns a list of car makes, which are then populated into a dropdown (select) element for users to choose from.

#### User Interaction:

Users are required to select both a car make and a production year from the provided dropdowns.
The "Next" button remains disabled until both selections are made, ensuring that the user has provided the necessary input.

#### Passing Data and Fetching Models:

Once the user selects a make and a year and clicks the "Next" button, the selected values are passed as props to the Search Results component.
Upon rendering the Search Results component, another useEffect hook triggers a GET request to the endpoint: "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json"
The API call is made with the selected make's ID and production year concatenated into the URL, fetching the corresponding car models.

#### Displaying Results:

The fetched car models are displayed in cards, providing users with the information they searched for.
If no results are found, a message is displayed to notify users that no matching car models were found.

#### Navigation:

A "Back" button is available on the Search Results page, allowing users to return to the Landing Page to adjust their search criteria or start a new search.

### Technologies Used
The technologies used for the development of the Card Dealer App were:
##### Base Programming Language
- JavaScript
- JavaScript Framework: React
##### Data Typing
- TypeScript
##### Screen Navigation
- React Router Dom
##### Styles
- Tailwind CSS
- NextUI
- Framer Motion
##### HTTP Requests to API
- Axios
##### Version Control
- Git

