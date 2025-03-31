
import { useState } from "react";
import { PageTransition } from "../components/Transitions";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-lagori-600 to-lagori-700">
          <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                तुमचे काही प्रश्न आहेत का किंवा तुम्हाला सहभागी व्हायचे आहे? आम्हाला तुमच्याकडून ऐकायला आवडेल.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-lagori-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-800">
                  संपर्क साधा
                </h2>
                <p className="text-gray-600 mb-10">
                  आपल्याला आमच्या कार्यक्रमांबद्दल प्रश्न असतील, स्वयंसेवक म्हणून सहभागी व्हायचे असेल किंवा मदतीची आवश्यकता असेल, तर आमची टीम नेहमी मदतीसाठी तयार आहे. खालील कोणत्याही माध्यमातून आमच्याशी संपर्क साधा.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-lagori-100 p-3 rounded-full text-lagori-600 mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">आमचा पत्ता</h3>
                      <p className="text-gray-600">
                        अमृत मल्टीपर्पज हॉल जवळ,<br />
                        कळंबा, कोल्हापूर,<br />
                        महाराष्ट्र, भारत
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-lagori-100 p-3 rounded-full text-lagori-600 mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">फोन नंबर</h3>
                      <p className="text-gray-600">
                        <a href="tel:+918668545201" className="hover:text-lagori-600 transition-colors">
                          +91 8668545201
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-lagori-100 p-3 rounded-full text-lagori-600 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">ईमेल</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@lagorifoundation.org" className="hover:text-lagori-600 transition-colors">
                          lagorifoundation1@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold text-gray-800 mb-4">आम्हाला फॉलो करा</h3>
                  <div className="flex space-x-4">
                    {/* Social Media Icons */}
                    {[
                      { name: "facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                      { name: "instagram", path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z", link:"https://www.instagram.com/shubhangisakhare01" },
                      { name: "youtube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .47 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58zM10 15V9l5 3-5 3z" },
                      { name: "whatsapp", path: "M21.05 3.05A10 10 0 0 0 2.95 21.05L1 23l2.05-.95A10 10 0 0 0 21.05 3.05zM12 20a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm3.54-11.54a1 1 0 0 0-1.41 0l-1.09 1.09a1 1 0 0 0 0 1.41l.29.29a1 1 0 0 1 0 1.41l-.29.29a1 1 0 0 0 0 1.41l1.09 1.09a1 1 0 0 0 1.41 0l1.09-1.09a1 1 0 0 0 0-1.41l-.29-.29a1 1 0 0 1 0-1.41l.29-.29a1 1 0 0 0 0-1.41z" },
                      { name: "twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.5 1a4.48 4.48 0 0 0-4.48 4.48c0 .35.04.7.11 1.03A12.8 12.8 0 0 1 1.64 2.16a4.48 4.48 0 0 0-.61 2.26 4.48 4.48 0 0 0 2 3.74 4.48 4.48 0 0 1-2-.55v.06a4.48 4.48 0 0 0 3.6 4.4 4.48 4.48 0 0 1-2 .08 4.48 4.48 0 0 0 4.18 3.1A9 9 0 0 1 1 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" }
                    ].map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      className="bg-white text-lagori-600 p-3 rounded-full shadow-md hover:bg-lagori-600 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d={social.path}></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="font-playfair text-2xl font-bold mb-6 text-gray-800">
                 आम्हाला मॅसेज पाठवा
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        आपले नाव
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lagori-500 focus:border-lagori-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        ई-मेल
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lagori-500 focus:border-lagori-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        फोन नंबर
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lagori-500 focus:border-lagori-500"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        तुमचा मॅसेज
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lagori-500 focus:border-lagori-500"
                        placeholder="Type your message here..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center"
                      disabled={formStatus === "sending" || formStatus === "success"}
                    >
                      {formStatus === "idle" && (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                      {formStatus === "sending" && (
                        <>
                          Sending...
                        </>
                      )}
                      {formStatus === "success" && (
                        <>
                          Message Sent <CheckCircle size={16} className="ml-2" />
                        </>
                      )}
                      {formStatus === "error" && (
                        <>
                          Try Again <AlertCircle size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold mb-10 text-center text-gray-800">
              आम्हाला भेटा
            </h2>
            <div className="overflow-hidden rounded-xl shadow-lg h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30578.41198625406!2d74.21948915!3d16.6617895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0555a167e5cab%3A0x6c674f5a9d7f26fa!2sKalamba%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1743094725533!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
