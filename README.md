<div id="top"></div>

[![MIT License][license-shield]](https://github.com/r-jacko/build-your-pc/blob/main/LICENSE.txt)
[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/r-jacko/build-your-pc">
    <img src="images/logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">BUILD-YOUR-PC</h3>

  <a href="https://build-your-pc.netlify.app/">LIVE</a>
</div>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

### [SEE PREBUILDED LIST](https://build-your-pc.netlify.app/09686dfff4eb4e3381f95815737032c3)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [node.js](https://nodejs.org/)
* [MUI](https://mui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

Instructions on setting up project locally.
To get a local copy up and running follow these simple steps.

### Installation

1. Get your connection string from  [https://www.mongodb.com/](https://www.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/r-jacko/build-your-pc.git
   ```
3. Install NPM packages in both `client` and `server` folders.
   ```sh
   npm install
   ```
4. Create `.env` file in `server` folder.  
5. Enter your connection string in `.env` file
   ```js
   CONNECTION_URL = your_connection_string
   ```
6. Change baseURL in `/client/src/api/index.js` to 
   ```js
   const API = axios.create({baseURL: "http://localhost:5000"});
   ```
7. Run server and client by typing 
   ```
   npm start
   ```
   in both `client` and `server` folders.

<p align="right">(<a href="#top">back to top</a>)</p>


## Utilities

- Each user can create their own list
- Editing of each item
- Summary of costs and number of items for individual categories and the entire list
- Sharing the list via an individual link
- Sort by any value
- Possibility to filter by category on the server side
- Ability to print and export the list to PDF
- Form validation
- Server-side verification that the user viewing the list is its creator and has the option to edit the list

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Incoming

- [ ] Auto clearing inactive lists
- [ ] Floating form button on mobile devices
- [ ] Export to PDF


<p align="right">(<a href="#top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#top">back to top</a>)</p>


[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/r-jacko/build-your-pc/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jacek-roszak-892123234/
[product-screenshot]: images/page.png