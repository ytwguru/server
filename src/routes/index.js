import contacts from "./contacts";
import quotes from "./quotes";
import customers from "./customers";
import delmardivine from "./delmardivine";
import independentyouth from "./independentyouth";
import africanchamberstl from "./africanchamberstl";
import Express from "express";

var router = Express.Router();
router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));

export default router;
export { contacts, quotes, customers,  delmardivine, independentyouth, africanchamberstl };