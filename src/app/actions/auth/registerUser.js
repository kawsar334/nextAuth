"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    // Need to check if unique username was given
    const result = await dbConnect("TEST_USER").insertOne(payload);

    // ObjectId কে String এ কনভার্ট করা
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(), // ObjectId -> String
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
