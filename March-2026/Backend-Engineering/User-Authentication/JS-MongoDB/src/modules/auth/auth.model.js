import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLenght: 2,
        maxLenght: 40,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        minLenght: 8,
        required: [true, "Password is required"],
        select: false
    },
    role: {
        type: String,
        enum: ["customer", "seller", "admin"],
        default: "customer"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        select: false
    },
    refreshToken: {
        type: String,
        select: false
    },
    resetPasswordToken: {
        type: String,
        select: false
    },
    resetPasswordExpires: {
        type: Date,
        select: false
    },
},
    { timestamps: true }
)

// Hash password
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 12)
})

// add comparePassword functionality
userSchema.methods.comparePassword = async function (userPassword) {
    return bcrypt.compare(userPassword, this.password)
}

export default mongoose.model("User", userSchema);