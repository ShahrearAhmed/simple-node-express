const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());


const port = 3000;

app.get('/', (req, res) => {
    res.send('Second ever node')
});

const users = [
    { id: 0, name: "Shahrear", email: "shahreraedshuvon002gmail.com" },
    { id: 1, name: "Shahr", email: "shahrerashuvon002gmail.com" },
    { id: 2, name: "Shahrer", email: "shahredshuvon002gmail.com" },
    { id: 3, name: "Shaear", email: "shahrerahuvon002gmail.com" },
    { id: 4, name: "Srear", email: "shahrerahmevon002gmail.com" },
    { id: 5, name: "Shear", email: "sherahmedshuvon002gmail.com" },
    { id: 6, name: "Shar", email: "shahrerashuvon002gmail.com" },
    { id: 7, name: "Shahrar", email: "shahrmedshuvon002gmail.com" }
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    // Use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


// dynamic api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);

})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'jackfruit'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port'.port);
});