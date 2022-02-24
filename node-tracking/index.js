
const express = require("express");
const cors = require("cors");
const TrackingCorreios = require("tracking-correios");
const app = express();

app.use(cors());

const port = 3001;

const get = (object, path, fallback = null) => {
  const pathKeys = typeof path === "string" ? path.split(".").filter(key => key.length) : [];
  const result = pathKeys.reduce((dive, key) => dive && dive[key], object);
  return result || fallback;
};

app.get("/", async(req, res) => {
  const { tracking } = req.query;
  if (!tracking) {
    
    
    return res();
  }
  const { rastro } = require('rastrojs');
  

        const track = await rastro.track(tracking);
            
        console.log(track[0]);

        return res.json (track[0])
    
});


app.listen(port, () => console.log(`Listening on port ${port}`));