import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllHotels(){

    const hotles = await hotelModel
    .find()
    .lean();

    return replaceMongoIdInArray(hotles);
}