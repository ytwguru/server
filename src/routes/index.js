import {default as contacts} from "./contacts";
import {default as quotes} from "./quotes";
import Express from "express";

var router = Express.Router();
router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));

export default router;
export { contacts, quotes};