import mongoose from "mongoose";

const tourPackageScheme = mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },

  destination: {
    type: String,
    required: true,
  },

  numDays: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  htmlContent: {
    type: String,
    required: true,
  },
},
{
    timestamps : true,
}
);

const tourPackages = mongoose.model("Tours", tourPackageScheme);
export default tourPackages;
