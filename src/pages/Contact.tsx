
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
                    {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="bg-white text-lagori-600 p-3 rounded-full shadow-md hover:bg-lagori-600 hover:text-white transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        {/* Replace with actual social icons if needed */}
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
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    ))}
                  </div>
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
                src="https://www.google.com/maps/place/Kalamba,+Kolhapur,+Maharashtra/@16.6617895,74.2194892,14z/data=!3m1!4b1!4m6!3m5!1s0x3bc0555a167e5cab:0x6c674f5a9d7f26fa!8m2!3d16.6700976!4d74.2260408!16s%2Fg%2F1tjff8tx?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
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
