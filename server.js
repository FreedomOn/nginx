const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send({
    code:0,
    data:{},
    mag:'http成功'
}))

app.listen(9000, () => console.log(`Example app listening on port ${port}!`))