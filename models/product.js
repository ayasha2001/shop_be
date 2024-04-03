const path = require("path");
const fs = require("fs");

const products = [];
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "product.json"
    );
    fs.readFile(p, (err, fileData) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileData);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "product.json"
    );
    fs.readFile(p, (err, fileData) => {
      if (err) {
        return cb([]);
      }
      return cb(JSON.parse(fileData));
    });
  }
};
