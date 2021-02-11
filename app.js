const express = require("express")
const app = express();
process.env.PWD = process.cwd()

const port = process.env.PORT || 3000;
// Then
app.use(express.static(process.env.PWD + '/'));

app.get("/", function(req, res) {

    res.sendFile('/index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});