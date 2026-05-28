import React, { useState } from "react";
import { useForm } from "react-hook-form";
const ROLES = ["Frontend", "Backend", "AI Engineer"];

const HookForm = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitted, isSubmitSuccessful, isSubmitting } } = useForm({
        defaultValues: { name: "loid forger", mode: "onTouched" }
    });

    function sumbit(data) {
        return new Promise((res) => console.log("submitted"), data)
    }

    if (isSubmitted) {
        return (
            <div>
                <h1>Form submitted successfully</h1>
            </div>
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit(sumbit())}>
                <label>
                    Full Name
                    <input {...register("name", { required: "Name is required" })} type="text" />
                    {errors.name && <span>{errors.name.message}</span>}
                </label>

                <label>
                    Email
                    <input {...register("email", { required: "Email is required" })} type="email" />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>

                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting": "Submit"}</button>
            </form>
        </div>
    )
}

export default HookForm