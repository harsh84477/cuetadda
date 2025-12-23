'use client';
import { useState, useCallback, useRef } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+62',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const successTimeoutRef = useRef(null);

  // Optimized validation functions
  const validateEmail = useCallback((email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, []);

  const validatePhone = useCallback((phone) => {
    return /^[0-9]{10,15}$/.test(phone);
  }, []);

  // Memoized form validation
  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  }, [formData, validateEmail, validatePhone]);

  // Optimized change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error immediately
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  // Optimized submit handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call with cleanup
    const timeoutId = setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+62',
        phone: '',
        message: ''
      });
      
      // Cleanup previous timeout
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
      
      // Auto-hide success message
      successTimeoutRef.current = setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formData, validateForm]);

  // Cleanup on unmount
  const handleResetSuccess = useCallback(() => {
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      setSubmitSuccess(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Email, call, or complete the form to learn how<br />
            Snappy can solve your messaging problem.
          </p>

          <div className={styles.contactInfo}>
            <a href="mailto:info@snappy.io" className={styles.email}>
              info@snappy.io
            </a>
            <a href="tel:+1321221231" className={styles.phone}>
              321-221-231
            </a>
          </div>

          <a href="#" className={styles.supportLink}>Customer Support</a>

          <div className={styles.infoCards}>
            <div className={styles.card}>
              <h3>Customer Support</h3>
              <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div className={styles.card}>
              <h3>Feedback and Suggestions</h3>
              <p>We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.</p>
            </div>
            <div className={styles.card}>
              <h3>Media Inquiries</h3>
              <p>For media-related questions or press inquiries, please contact us at media@snappyapp.com.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className={styles.rightSection}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Get in Touch</h2>
          <p className={styles.formSubtitle}>You can reach us anytime</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? styles.inputError : ''}
                />
                {errors.firstName && (
                  <span className={styles.error}>{errors.firstName}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? styles.inputError : ''}
                />
                {errors.lastName && (
                  <span className={styles.error}>{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.emailInput}>
                <span className={styles.emailIcon}>✉️</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.inputError : ''}
                />
              </div>
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.phoneInput}>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className={styles.countryCode}
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+62">+62</option>
                  <option value="+91">+91</option>
                  <option value="+86">+86</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? styles.inputError : ''}
                />
              </div>
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? styles.inputError : ''}
                rows="4"
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            {submitSuccess && (
              <div 
                className={styles.successMessage}
                onAnimationEnd={handleResetSuccess}
              >
                ✓ Form submitted successfully!
              </div>
            )}

            <p className={styles.terms}>
              By contacting us, you agree to our{' '}
              <a href="#">Terms of service</a> and{' '}
              <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
