import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  if (!userEmail) {
    return res.status(400).json({ message: "User email is required" });
  }

  console.log("userEmail:", userEmail);

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });

    res
      .status(201)
      .json({ message: "Residency created successfully", residency });
  } catch (err) {
    console.error("Error creating residency:", err);
    if (err.code === "P2002") {
      return res
        .status(400)
        .json({ message: "A residency with this address already exists" });
    }
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

// function to get all the documents/residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

// function to get a specific document/residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Function to delete a specific residency
export const deleteResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.delete({
      where: { id },
    });
    res.send({ message: "Residency deleted successfully", residency });
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404).send({ message: "Residency not found" });
    } else {
      throw new Error(err.message);
    }
  }
});
