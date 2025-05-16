import mongoose from "mongoose";

const sponsorSchema = new mongoose.Schema(
    {
        supportType: { type: String, required: true },
        companyName: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        amount: { type: Number, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Sponsor", sponsorSchema);
