import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Create a single instance of the Prisma client for efficiency
let prisma;
const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);

/**
 * GET /api/Product/productId/reviews
 * @route GET /api/Product/productId/reviews.
 * @returns {Promise<void>}
 */

if (!prisma) {
  prisma = new PrismaClient({ adapter });
}

async function updateProductRating(prima, reviewId) {
  // Fetch the product associated with the review
  const product = await prima.ProdReview.findUnique({
    where: { id: reviewId },
    select: { prodId: true },
  });

  if (!product) {
    throw new Error('ProdReview not found');
  }

  // Calculate the average rating for the product's reviews (excluding the current review)
  const averageRating = await prima.ProdReview.aggregate({
    where: {
      prodId: product.prodId,
      NOT: { id: reviewId }, // Exclude the current review
    },
    _avg: {
      review: true, // Calculate average of the 'review' field
    },
  });

  // Update the product with the new average rating
  await prima.product.update({
    where: { id: product.prodId },
    data: { rating: averageRating._avg.review || 0 }, // Set default to 0 if no reviews
  });
}

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      const { text, prodId, reviewer, value } = data;
      const newPost = await prisma.$transaction(async (prima) => {
         const newReviews = prima.ProdReview.create({
        data: {
          comment: text,
          prodId,
          userId: reviewer,
          review: value
        },
        select: { id: true }, // Only select necessary fields
      });
      if(!newReviews) throw new Error("opps");
      
        updateProductRating(prima,newReviews.id)
    })
      if (!newPost) throw new Error("operation was unsuccessfull");
      return NextResponse.json({ data: newPost.id });
    } catch (error) {
      console.log(error);
      return NextResponse.error()
    }
  }
  else {}
}
