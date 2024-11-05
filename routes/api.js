import express from "express";
const router = express.Router();
import * as blogController from "../app/controllers/blogController.js";


// Create Route
router.post("/create_blog",blogController.createblog);

// Read Route
router.get("/read_blog",blogController.readblog);

// Update Route
router.put("/update_blog",blogController.updateblog);

// Delete Route
router.delete("/delete_blog",blogController.deleteblog);


export default router;