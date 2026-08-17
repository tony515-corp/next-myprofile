import { useState } from "react";
import { useForm } from "react-hook-form";

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export default function ContactForm() {
  const [submitState, setSubmitState] = useState("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/contactme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok || !result.status) {
        setSubmitState("error");
        return;
      }
      setSubmitState("success");
      reset();
    } catch (error) {
      setSubmitState("error");
    }
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="contact-tl">Send Message</h4>
      <div className="row g-4">
        <div className="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".3s">
          <input
            type="text"
            {...register("name", { required: true })}
            className="form-control input-style-2"
            placeholder="Your Full Name*"
          />
          {errors.name?.type === "required" && <p className="error">Name is required</p>}
        </div>
        <div className="col-md-6 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".4s">
          <input
            type="email"
            {...register("email", { required: true, pattern: EMAIL_PATTERN })}
            className="form-control input-style-2"
            placeholder="Your Email Address*"
          />
          {errors.email?.type === "required" && <p className="error">Email is required</p>}
          {errors.email?.type === "pattern" && <p className="error">Please insert correct email</p>}
        </div>
        <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".2s">
          <input
            type="text"
            {...register("subject", { required: true })}
            className="form-control input-style-2"
            placeholder="Subject..."
          />
          {errors.subject?.type === "required" && <p className="error">Subject is required</p>}
        </div>
        <div className="col-md-12 wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".5s">
          <textarea
            {...register("message", { required: true })}
            className="form-control input-style-2"
            placeholder="Your Message..."
          />
          {errors.message?.type === "required" && <p className="error">Message is required</p>}
        </div>
        <div className="col-md-12 mt-50 mb-10 contact-sub-btn text-center wow fadeInUp" data-wow-duration=".6s" data-wow-delay=".6s">
          <button type="submit" id="submit" className="tm-btn-2" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Message"}
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        {submitState === "success" && (
          <div className="col-md-12 mt-20">
            <p className="form-message about-sub-title def">
              Thanks for your time, I will contact you soon.
            </p>
          </div>
        )}
        {submitState === "error" && (
          <div className="col-md-12 mt-20">
            <p className="form-message about-sub-title def">
              Sorry, please try again later.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
