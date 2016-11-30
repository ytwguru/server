import contacts from "./contacts";
import quotes from "./quotes";
import Express from "express";

var router = Express.Router();
router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));

export default router;
export { contacts, quotes};