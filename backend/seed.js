// create tables for db

const pg = require('pg');
require('dotenv').config();

const client = new pg.Client(process.env.DATABASE_URL || '');
client.connect();

async function createTables(client) {

    //drop tabes if they already exist
    await client.query(`DROP TABLE IF EXISTS users`);
    await client.query(`DROP TABLE IF EXISTS events`);

    //create tables
    await client.query(`CREATE TABLE events(
        id SERIAL PRIMARY KEY,
        event_name VARCHAR(100) NOT NULL,
        picture TEXT NOT NULL,
        description TEXT NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        location VARCHAR(100) NOT NULL
    );`)

    await client.query(`CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) NOT NULL,
        password VARCHAR (100) NOT NULL
    );`)

    console.log('tables created')
}

async function seedEvents(client){
    const events = [
        {
            event_name: 'Auction',
            picture: 'https://edit.org/img/blog/26k-editable-flyers-auction-printable.webp',
            description: 'Fund raiser',
            date: '2024-10-24',
            time: '12:00:00',
            location: 'first AG'
        },
        {
            event_name: 'Carwash',
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAv5uWZ5SubRZy8rgWmTHAgue6fd_4h29mw&s',
            description: 'Fund raiser',
            date: '2024-10-15',
            time: '10:00:00',
            location: 'Atlanta'
        },
    ];
    for(const event of events){
        await client.query(`INSERT INTO events(event_name, picture, description, date, time, location) VALUES($1, $2, $3, $4, $5, $6)`, [event.event_name, event.picture, event.description, event.date, event.time, event.location])
    };

    console.log('events created')
}

async function seed(){
    //run create tables function
    await createTables(client);

    //seed data
    await seedEvents(client);
}

seed().then(() => process.exit(0));