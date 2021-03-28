<h1 align="center">
	<img alt="Logo" src="https://github.com/HerbertSousa/Gobarber-Backend/blob/master/logogobarber.png" width="200px" />
</h1>

<h3 align="center">
  GoBarber API
</h3>

<p align="center">awesome haircuts and shaves</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://github.com/HerbertSousa/Gobarber-Backend/blob/master/Insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 👨🏻‍💻 About the project

- <p style="color: red;">Brief explanation about the project</p>

To see the **web client**, click here: [GoBarber Web](https://github.com/HerbertSousa/Go-Barber-ReactJS)</br>
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/HerbertSousa/Go-Barber-ReactNative)

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/HerbertSousa/Gobarber-Backend.git && cd Gobarber-Backend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Create the instance of postgreSQL using docker
$ docker run --name project-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=project -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Make sure the keys in 'ormconfig.json' to connect with your database
# are set up correctly.

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Herbert De Sousa 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/herbert-sampaio-5ba26816a/)
