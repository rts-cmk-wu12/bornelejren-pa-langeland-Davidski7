import express from "express";
import Sponsor from "../models/Sponsor.js";

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const sponsor = new Sponsor(req.body);
        await sponsor.save();
        res.status(201).json(sponsor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const sponsors = await Sponsor.find();
        res.json(sponsors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
