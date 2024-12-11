import React,{useState} from 'react'

function ContactUs() {



  const [formData, setFormData] = useState({
    email: "",
   message:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
    <div className="w-full max-w-lg p-6  rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-bloody text-center">
        Have a message?
      </h2>
      <form
      
      onSubmit={handleSubmit}
      >
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-peach"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
          required
            className="mt-2 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm placeholder-gray-400 "
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-peach"
          >
            Your Message*
          </label>
          <textarea
            id="message"
            name='message'
            placeholder="Your Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-2 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm placeholder-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-bloody rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-black transition"
        >
          Send Inquiries
        </button>
      </form>
    </div>
  </div>
  )
}

export default ContactUs