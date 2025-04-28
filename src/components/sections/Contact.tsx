import { FC, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contactInfo } from "../../data/resumeData";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase";
const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        date: new Date(),
      });
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="section-container">
        <h2 className="heading-2 text-center mb-4">Get In Touch</h2>
        <p className="paragraph text-center max-w-xl mx-auto mb-12">
          Have a question or want to work together? Feel free to reach out to me
          using the form below or through my contact information.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-2/3 card p-8">
            {formStatus.submitted ? (
              <div
                className={`p-4 rounded-md mb-6 ${formStatus.success ? "bg-success-light text-success-dark" : "bg-error-light text-error-dark"}`}
              >
                <p className="font-medium">{formStatus.message}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="card p-6">
              <div className="flex items-start">
                <div className="bg-primary-light/20 dark:bg-primary-light/10 p-3 rounded-md mr-4">
                  <Mail
                    className="text-primary dark:text-primary-light"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start">
                <div className="bg-primary-light/20 dark:bg-primary-light/10 p-3 rounded-md mr-4">
                  <Phone
                    className="text-primary dark:text-primary-light"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start">
                <div className="bg-primary-light/20 dark:bg-primary-light/10 p-3 rounded-md mr-4">
                  <MapPin
                    className="text-primary dark:text-primary-light"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-primary/90 to-primary-dark text-white">
              <h3 className="text-xl font-semibold mb-3">
                Open for Opportunities
              </h3>
              <p className="mb-4">
                I'm currently available for freelance work and full-time
                positions.
              </p>
              <a
                href={`mailto:${contactInfo.email}?subject=Job Opportunity`}
                className="inline-block w-full py-3 px-4 bg-white text-primary font-medium rounded-md text-center hover:bg-gray-100 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
