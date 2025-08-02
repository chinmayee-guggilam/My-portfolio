import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, Send, Copy, Check } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = ({ data }) => {
  const [copied, setCopied] = useState(null);
  const { toast } = useToast();

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard.`,
      });
      
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      copyText: data.email,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
      copyText: data.phone,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "chinmayee-guggilam",
      href: data.github,
      copyText: data.github,
      color: "bg-gray-100 text-gray-600"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "chinmayee-guggilam",
      href: data.linkedin,
      copyText: data.linkedin,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Let's Connect
          </h2>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting 
            projects, or simply connect with fellow developers and tech enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-black mb-8">
                Get in Touch
              </h3>
              
              {/* Contact Methods */}
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${method.color}`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-black">
                          {method.label}
                        </h4>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => copyToClipboard(method.copyText, method.label)}
                        className="p-2 text-gray-500 hover:text-black hover:bg-white rounded-full transition-all"
                        title={`Copy ${method.label}`}
                      >
                        {copied === method.label ? (
                          <Check size={16} className="text-green-600" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? "_blank" : "_self"}
                        rel={method.href.startsWith('http') ? "noopener noreferrer" : ""}
                        className="p-2 text-gray-500 hover:text-black hover:bg-white rounded-full transition-all"
                        title={`Open ${method.label}`}
                      >
                        <Send size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-8 bg-black p-8 rounded-2xl text-white">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Based in {data.location}</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Open to opportunities worldwide. Available for remote work, 
                    hybrid arrangements, or relocation for the right opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Call to Action */}
          <div className="space-y-8">
            {/* Primary CTA */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-black mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Whether you're looking for a full-stack developer, ML engineer, 
                or someone passionate about building innovative solutions, 
                I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${data.email}?subject=Let's Connect - Portfolio Inquiry`}
                  className="w-full bg-black text-white py-4 px-6 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Send Email</span>
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-full hover:border-black hover:text-black transition-colors flex items-center justify-center space-x-2"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl">
              <h4 className="text-xl font-medium text-black mb-4">
                What I'm Looking For
              </h4>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Full-time opportunities in product-based companies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Roles in full-stack development or ML engineering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Projects that make a real impact</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Teams that value innovation and growth</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <h4 className="text-lg font-medium text-green-800 mb-2">
                Quick Response Guarantee
              </h4>
              <p className="text-green-700 text-sm">
                I typically respond to all inquiries within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;