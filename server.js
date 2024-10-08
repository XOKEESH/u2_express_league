const express = require ('express')
const PORT = process.env.PORT || 3002

const app = express()

app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`)
})

app.get ('/', (req,res) => {
    res.send ('Kishas Express League!')
})

app.get('/basketball', (req, res) => {
    res.send([
    {
        Team: 'Los Angeles Pinks',
        yearEstablished: 2000,
        Stadum: 'Cotton Candy Stadium'
    },
    {
        Team: 'St Louis Purples',
        yearEstablished: 2003,
        Stadium: 'Glitter Field'
    }
    ])
})

app.get('/basketball/pinks', (req,res) => {
    res.send ([
        {
            Player: 'Sayra Mendoza',
            Age: 24,
            Height: "5'7",
            Average: "83%",
            currentlyPlaying: true
        },
        {
            Player: 'Skylar Lesson',
            Age: 26,
            Height: "5'9",
            Average: "73%",
            currentlyPlaying: true
        }
    ])
})

app.get('/basketball/purples', (req,res) => {
    res.send ([
        {
            Player: 'Nicole Murphy',
            Age: 24,
            Height: "5'7",
            Average: "83%",
            currentlyPlaying: true
        },
        {
            Player: 'Connie Walker',
            Age: 26,
            Height: "5'9",
            Average: "73%",
            currentlyPlaying: true
        }
    ])
})