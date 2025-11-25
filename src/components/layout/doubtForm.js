"use client";
import { useState } from "react";
import styles from "./doubtForm.module.css";

export default function DoubtForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    targetYear: "",
    program: "",
    city: "",
    pincode: ""
  });
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Have a doubt?</h2>
      <p className={styles.subtitle}>Speak to our CUET expert</p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className={styles.input}
      />
      <div className={styles.flexRow}>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type="button" className={styles.otpBtn}>
          Send OTP
        </button>
      </div>
      <select
        name="targetYear"
        value={form.targetYear}
        onChange={handleChange}
        required
        className={styles.select}
      >
        <option value="">Target Year</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
      </select>
      <select
        name="program"
        value={form.program}
        onChange={handleChange}
        required
        className={styles.select}
      >
        <option value="">Preferred Program</option>
        <option value="Science">Science</option>
        <option value="Commerce">Commerce</option>
        <option value="Arts">Arts</option>
      </select>
      <div className={styles.flexRow}>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
}
