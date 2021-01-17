## Python Microservice

### Project Description
A simple web app that implements microservice in python with Django, Flask, RabbitMQ and React.
This app implements basic microservice in python that allows user to create product with title and image link and 'like' 
the products created. 

Both Django and Flask are spawn with docker-compose as different isolated microservices with own database. 
Django microservice exposes the API to allow user to list, create, retrieve, update and destroy product.
While Flask microservice exposes the API to allow user to like the product. Both microservices will be communicating 
and maintaining data consistency via RabbitMQ.

### Build With
- [React](https://reactjs.org) - Frontend framework used
- [MaterialUI](https://material-ui.com) - React UI framework used
- [Django](https://www.djangoproject.com/) - Backend framework used
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) - Micro web framework used
- [RabbitMQ](https://www.rabbitmq.com/) - Message broker used

### Prerequisites
 - [Nodejs with NPM](https://nodejs.org/en/download/package-manager/)
 - [Docker with Docker Compose](https://docs.docker.com/get-docker/) 

### Usage
1 ) Register, create an service instance, obtain the AMQP URL, locate both consumer.py and producer.py in 'admin' and 
'main' subdirectory and paste it into the line of code as shown below:
```
params = pika.URLParameters(<your link goes here>)
```

2 ) In the 'admin' sub-directory, start the admin app:
```
sudo docker-compose up --build
```

3 ) In the admin app, makemigrations and migrate. 
Then, create a few user entries under the table user.:
```
sudo docker-compose exec backend bash
python manage.py makemigrations
python manage.py migrate
```

4 ) In the 'main' sub-directory, start the main app:
```
sudo docker-compose up --build
```

5 ) In the main app, create migrations and migrate:
```
sudo docker-compose exec backend bash
python manager.py db init
python manager.py db migrate
python manager.py db upgrade
```

6 ) To start the frontend client app, navigate to 'frontend' sub-directory, install the node-modules, and start the app:
```
npm install 
npm run start
```

### Acknowledgements
- [FreeCodeCamp](https://www.freecodecamp.org/)
- Authors of libraries used in this app
