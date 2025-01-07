import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Index = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  useEffect(() => {
    props.setPreview("Contact Us");
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      toast.loading('Sending email...', {
        id: 'sending',
        position: 'top-center',
      });

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;
      
      const result = await emailjs.send(serviceId, templateId, data, userId);
      console.log("Result is ", result);

      toast.success('Email sent successfully!', {
        id: 'sending',
        position: 'top-center',
      });
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send the message. Please try again.', {
        id: 'sending',
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-16">
          
          <div className="relative">
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-peach/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <p className="text-gray-600 mt-1">(222) 400-630</p>
                    <p className="text-gray-600">(222) 411-631</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-peach/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600 mt-1">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-peach/10 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Location</p>
                    <p className="text-gray-600 mt-1">49 Grand Street, Los Angeles, California, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-0">
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">Please enter your message.</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">Please enter your name.</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">Please enter your email.</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Contact
                  </label>
                  <input
                    {...register('reason', { required: true })}
                    type="text"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-peach focus:ring-peach"
                    placeholder="e.g., General Inquiry"
                  />
                  {errors.reason && (
                    <p className="mt-2 text-sm text-red-600">Please enter your reason for contact.</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-6 rounded-lg text-base font-medium text-white shadow-sm ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-peach hover:bg-peach/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peach'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;