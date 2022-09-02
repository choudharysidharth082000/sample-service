const express = require("express");
const router = express.Router();

router.get("/sample", (req, res) => {
  const { data } = req.body;
  const resultArray = new Array();
  data.map((element, index) => {
    if (element === "unix") {
      const finalObj = {
        type: "unix",
        data: Date.now(),
        description: "This is a unix timestamp",
      };
      resultArray.push(finalObj);
    } else {
      const finalObj = {
        type: "iso",
        data: new Date().toISOString(),
        description: "This is a iso timestamp",
      };
      resultArray.push(finalObj);
    }
  });
  res.status(200).json({
    status: true,
    data: resultArray,
  });
});
module.exports = router;
