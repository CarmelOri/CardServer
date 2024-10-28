const cors = require("cors")

const corsMiddleware = cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://127.0.0.1:5501",
        "http://localhost:5173",
        "https://cardsproject-g9se.onrender.com",
        "https://cardserver-6vas.onrender.com"
    ]
})

module.exports = corsMiddleware;