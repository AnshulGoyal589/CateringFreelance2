import React, { useState,useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'; 
import { toast } from 'react-hot-toast'; 
import '../../index.css'
const Index = (props) => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    reason: ''
  });
  useEffect(()=>{
    props.setPreview("Contact Us");
},[])
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

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

      console.log(serviceId, templateId, userId);
      
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
    
    <div className="max-w-[100vw] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to find us</h2>
          <p className="text-gray-600 mb-8">
            Our goal is to provide the best customer service and to answer all of your questions in a timely manner.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="w-6 h-6 text-peach" />
            <span className="text-gray-700">(222) 400-630</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="w-6 h-6 text-peach" />
            <span className="text-gray-700">(222) 411-631</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="w-6 h-6 text-peach" />
            <span className="text-gray-700">contact@example.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="w-6 h-6 text-peach" />
            <span className="text-gray-700">49 Grand Street, Los Angeles, California, USA</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave us a message</h2>
        <p className="text-gray-600 mb-8">
          Our goal is to provide the best customer service and to answer all of your questions in a timely manner.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <textarea
              {...register('message', { required: true })}
              placeholder="Your message"
              className="w-full p-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none placeholder:text-gray-500"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">Message is required.</p>}
          </div>

          <div>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none placeholder:text-gray-500"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
          </div>

          <div>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none placeholder:text-gray-500"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
          </div>

          <div>
            <input
              {...register('reason', { required: true })}
              type="text"
              placeholder="Reason for contact"
              className="w-full p-3 border border-gray-700 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none placeholder:text-gray-500"
            />
            {errors.reason && <p className="text-red-500 text-sm">Reason is required.</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting} 
            className={`w-fit ${isSubmitting ? 'bg-gray-400' : 'bg-peach'} border ${isSubmitting ? 'border-gray-400' : 'border-peach'} hover:bg-[#D97A5C] text-white font-medium py-3 px-6 rounded-md transition-colors`}
          >
            {isSubmitting ? 'Sending...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
