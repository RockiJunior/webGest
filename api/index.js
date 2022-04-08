const server = require("./src/app");
const { conn } = require("./src/db");
const port = process.env.PORT || 3001;
const bcrypt = require("bcrypt");
const saltRounds = 12;
// tables
const { condIva, clientes, productos } = require("./src/db.js");
// Data Tables
const { ivaCondData } = require("./src/utils/mocks/ivaCond/ivaCondMock.js");
const { clientsData } = require("./src/utils/mocks/clients/clientsMock.js");
const { productsData } = require("./src/utils/mocks/products/productsMock.js");
// create MockUp Function
const { createMockUps } = require("./src/utils/mocks/createMockUps.js");
const { hashClients } = require("./src/utils/mocks/clients/hashClients.js");

conn
  .sync({
    force: true,
  })
  .then(async () => {
    server.listen(port, () => {
      console.log("DB connected!!!");
      console.log(`Server is running on port ${port}`);
    });
    let allClients = await clientes.findAll();
    if (allClients.length === 0) {
      await createMockUps(condIva, ivaCondData);
      await createMockUps(productos, productsData);
      await conn
        .query(
          "COPY clientes from 'C:/Users/GABRIEL/Desktop/Carpeta Personal/proyectosHdc/webGest/api/src/utils/public/clientsCsvs/clientes.csv' DELIMITER ',' CSV HEADER"
        )
        .then(() => {
          console.log("client data upload successfully");
        })
        .catch((err) => console.log(err));
      await conn
        .query(
          "COPY tab1 from 'C:/Users/GABRIEL/Desktop/Carpeta Personal/proyectosHdc/webGest/api/src/utils/public/tabsCsvs/tabs.csv' DELIMITER ',' CSV HEADER"
        )
        .then(() => {
          console.log("tabs data upload successfully");
        })
        .catch((err) => console.log(err));

      allClients = await clientes.findAll();

      for (let el of allClients) {
        el.clave = await bcrypt.hash(el.clave, saltRounds);
        el.save();
      }
      console.log("all Clients passwords hashed");
      setTimeout(async () => {
        await hashClients(clientes, clientsData);
        console.log("MockUp Data Uploaded!");
      }, 1000);
    }
  })
  .catch((e) => console.log("connection failed", e));
