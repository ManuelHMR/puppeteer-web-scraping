<h1>Web Scraping API</h1>
This is a web scraping API that allows you to scrape all products data of a specific website by searching for a specific title.

<h2>Installation</h2>
To use the API, you need to:

1) Clone this repository </br>
2) Run "npm i" to install all necessary modules</br>
3) Run "npm run dev" at the backend folder to start the API in development mode</br>

<h2>Endpoint</h2>
- GET http://localhost:4000/search/:string : Replace :string with the desired search term. Note that the search term is case sensitive, so use "Lenovo" instead of "lenovo", for example.</br>
- Example: GET http://localhost:4000/search/Lenovo
<h2>Response</h2>
The API will return a JSON with the scraped data as a result. The JSON structure will contain product details such as:</br>

   - title: string | null,</br>
   - price: string | null,</br>
   - description: string | null, </br>
   - reviews: string | null,</br>
   - available_hdd: (string | null)[],</br>
   - unavailable_hdd: (string | null)[],</br>
   - product_link: string | null,</br>
   - image: string | null</br>

<h2>Errors</h2>
In case of any errors, the API will return an error message in the JSON format.
