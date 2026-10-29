import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js";
import {
  createRating,
  getRatingSummary,
  getReviews,
  getDonationRatingStatus,
  getLowestRatedNgos,
  getMySubmittedRatings,
} from "../controllers/ratingController.js";

const router = express.Router();




router.get("/admin/lowest-rated-ngos", protect, isAdmin, getLowestRatedNgos);




router.post("/", protect, createRating);





router.get("/me", protect, getMySubmittedRatings);

router.get("/summary/:targetId", getRatingSummary);
router.get("/reviews/:targetId", getReviews);

router.get("/donation/:donationId/status", protect, getDonationRatingStatus);

export default router;
