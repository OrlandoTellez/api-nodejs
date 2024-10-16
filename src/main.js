import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("HOla mundo")
})

app.listen(3000, () => {
    console.log("SErvidor iniciado en el puerto 3000")
})