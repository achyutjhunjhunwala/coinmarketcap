##Coin Market Cap

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Features:
- This application is about displaying Crypto Currencies in Tabular and Graphical Format.
- Application can be accessed - https://coin-market-cap.herokuapp.com/


#### Teachnical Stack
```
1. Bulma - It uses lightweight Bulma Framework for CSS
2. ECMAScript 6
3. React with Redux and Thunk
4. Tauchart for implementation of Scatter Plot Graph
4. Ag-grid-react, a react wrapper built on top of ag-grid library.
5. Docker Support 
```

#### ToDo (Improvisations)
````
1. Make the Grid Component Responsive for screen size change event. Currently the grid loads
   on all screens but does not responds to manual change in screen size
2. The Graph is responsive but amount of data is such, that on small devices the axis bar does not
   render the fields properly. A better logic to reduce items on axis based on screen size.
3. Unit Test Cases

````

#### Install
```
yarn
```

#### Development
```
npm start
```

#### Build
```
npm run build
```

#### Docker Build
```
docker build . -t achyut/cmc-docker
```

#### Docker Run
```
docker run -p 8080:80 achyut/cmc-docker
```

