import '../App.css'
import { useState } from 'react';
function AboutPage(){
    
const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
const [errors, setErrors] = useState({})
const [isSubmitted, setIsSubmitted] = useState(false)
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes('@')) {
    setErrors({ email: 'Please enter a valid email address' })
    return
  }

  setErrors({})
  console.log('Form submitted:', formData)
  setFormData({ name: '', email: '', subject: '', message: '' })

   setIsSubmitted(true); 
  };


  return (
    <>
     <div>
            <h2>About</h2>
            <p>Gambian Farm Finder is a simple platform designed to help people discover farms, gardens, and agricultural projects across The Gambia. The app highlights places where visitors can learn about local farming, volunteer, support community initiatives, or connect with growers. As the platform grows, more farms and regions will be added, making it easier to explore and support agriculture throughout the country.</p>  
        </div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        {!isSubmitted ?(
            <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
   
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
   
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
            />
          </div>
   
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us more about your inquiry..."
            />
          </div>
   
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        ):(
          <div className="success-message">
          <h2>Success! Your form has been submitted.</h2>
          <button onClick={() => setIsSubmitted(false)}>Submit Another Form</button>
        </div>
        )}
      </div>
    </>
  );
}

export default AboutPage

 