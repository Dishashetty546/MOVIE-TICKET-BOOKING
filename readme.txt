SESSION 1 - STRINGS AND ARRAYS

1. GET http://localhost:3000/movies

O/P: 
 [
    {
        "id": 1,
        "title": "Movie A",
        "showtimes": [
            "12:00 PM",
            "3:00 PM",
            "6:00 PM"
        ],
        "seating": [
            [
                "A1",
                "A2",
                "A3"
            ],
            [
                "B1",
                "B2",
                "B3"
            ],
            [
                "C1",
                "C2",
                "C3"
            ]
        ]
    }
]


2. POST http://localhost:3000/movies

BODY RAW JSON 
{
  "id": 2,
  "title": "Movie B",
  "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM"],
  "seating": [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"]
  ]
}

O/P: {
    "message": "Movie added!"
}

SESSION 2 - QUEUES

1.  POST http://localhost:3000/bookings/queue
 {
  "movieId": 1,
  "customerName": "John Doe",
  "showtime": "12:00 PM",
  "seats": ["A1", "A2"]
}

O/P: {
    "message": "Added to queue",
    "queuePosition": 1
}


2. GET http://localhost:3000/bookings/queue
{
    "queue": [
        {
            "movieId": 1,
            "customerName": "John Doe",
            "showtime": "12:00 PM",
            "seats": [
                "A1",
                "A2"
            ]
        }
    ]
}


SESSION 3: SORTING 


GET http://localhost:3000/movies/sort

O/P
[
    {
        "id": 1,
        "title": "Movie A",
        "showtimes": [
            "12:00 PM",
            "3:00 PM",
            "6:00 PM"
        ],
        "seating": [
            [
                "A1",
                "A2",
                "A3"
            ],
            [
                "B1",
                "B2",
                "B3"
            ],
            [
                "C1",
                "C2",
                "C3"
            ]
        ]
    },
    {
        "id": 2,
        "title": "Movie B",
        "showtimes": [
            "1:00 PM",
            "4:00 PM",
            "7:00 PM"
        ],
        "seating": [
            [
                "A1",
                "A2",
                "A3",
                "A4"
            ],
            [
                "B1",
                "B2",
                "B3",
                "B4"
            ]
        ],
        "popularity": 90
    }
]

SESSION 4:  GRAPH

GET http://localhost:3000/movies/1/seating

<pre>A1 A2 A3
B1 B2 B3
C1 C2 C3</pre>
