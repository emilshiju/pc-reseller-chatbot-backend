import mongoose, { Schema, model, Types } from "mongoose";

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const dataModel = model("datas", dataSchema);

export default dataModel;
