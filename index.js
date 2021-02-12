const express = require("express")

//middlewares
const logger = require("./middleware/logger.js")

//routes
const welcomeRouter = require("./welcome/welcome-router.js")
const usersRouter = require("./users/userRouter")

const server = express()
const port = 4000

server.use(logger)
server.use(express.json())

server.use("/", welcomeRouter)
server.use("/api/users", usersRouter)

server.use((req, res) => {
	res.status(404).json({
		message: "Route was not found",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		// keep server errors generic, we don't want to expose details of potential bugs
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})

