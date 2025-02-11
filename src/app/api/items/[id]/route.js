import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
    const p = await params;
    const singleData = await dbConnect(collectionName.PRACTICE_DATA).findOne({_id: new ObjectId(p)})
    // console.log(p);
   

  return Response.json(singleData);
}
export async function DELETE(req, {params}) {
  const p = await params;
    // console.log(p);
      const response = await dbConnect(collectionName.PRACTICE_DATA).deleteOne({_id: new ObjectId(p)})
    // console.log(p);
    

  return Response.json(response);
}
export async function PATCH(req, {params}) {
  const p = await params;
    console.log(p);
    
    const postdData = await req.json();
    const filter = { _id: new ObjectId(p.id) };
    const updatedResponse = await dbConnect(collectionName.PRACTICE_DATA).updateOne(
      filter,
      {
        $set: { ...postdData },
      },
      { upsert: true }
    );

  return Response.json(updatedResponse);
}
