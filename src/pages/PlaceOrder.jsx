import React, { useState } from "react";
import CartTotal from "../components/CartTotal";
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const [method, setMethod] = useState('razorpay');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    address: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation function
  const handlePlaceOrder = () => {
    const { firstName, lastName, email, street, city, state, zipcode, address } = formData;

    // Check if all required fields are filled
    if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !address) {
      setErrorMessage("Please fill in all required fields.");
    } else {
      // If validation passes, clear error message and navigate
      setErrorMessage('');
      navigate('/order');
    }
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col md:flex-row">
        {/* Main Order Form */}
        <div className="w-full p-8 my-4 md:px-12 lg:w-1/2 lg:pl-20 lg:pr-20 mr-auto rounded-2xl bg-white shadow-md">
          <h1 className="font-bold uppercase text-4xl mb-6 text-gray-800">Place Your <br /> Order</h1>

          {/* Shipping Details Section */}
          <div className="flex flex-col gap-8">
            <h2 className="font-bold uppercase text-xl mb-4 text-gray-700">Shipping Details</h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                { name: 'firstName', placeholder: 'First Name*' },
                { name: 'lastName', placeholder: 'Last Name*' },
                { name: 'email', placeholder: 'Email*', type: 'email' },
                { name: 'street', placeholder: 'Street*' },
                { name: 'city', placeholder: 'City*' },
                { name: 'state', placeholder: 'State*' },
                { name: 'zipcode', placeholder: 'Zipcode*', type: 'number' },
                { name: 'address', placeholder: 'Address*' }
              ].map(({ name, placeholder, type = 'text' }, index) => (
                <input
                  key={index}
                  className="w-full bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  required
                />
              ))}
            </div>

            <div className="my-4">
              <textarea
                placeholder="Additional Notes"
                className="w-full h-32 bg-gray-200 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
              ></textarea>
            </div>

            {/* Error Message */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="m-20 pt-5 lg:pt-20 md:mt-0 md:ml-6 lg:w-1/3">
          <h1 className="font-bold text-2xl mb-4 text-gray-800">Cart Total</h1>
          <CartTotal />

          {/* Payment Method Section */}
          <div className="mt-4">
            <h1 className="font-bold text-xl mb-4 text-gray-800">Payment Method</h1>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div
                className={`flex items-center gap-3 border p-4 rounded-lg shadow-sm cursor-pointer transition duration-200 hover:shadow-md ${method === 'stripe' ? "bg-green-400" : ''}`}
                onClick={() => setMethod('stripe')}
              >
                {/* Add content or icons for payment methods */}
                <img src="" alt="stripe" />
              </div>
              <div
                className={`flex items-center gap-3 border p-1 px-2 rounded-lg shadow-sm cursor-pointer transition duration-200 hover:shadow-md ${method === 'razorpay' ? "bg-green-400" : ''}`}
                onClick={() => setMethod('razorpay')}
              >
                {/* Add content or icons for payment methods */}
                <img src="" alt="razorpay" className="w-auto h-10 rounded-sm" />
              </div>
            </div>

            <div className="w-full text-end mt-8">
              <button
                onClick={handlePlaceOrder} // Use validation before navigating
                className="bg-black rounded-xl text-white px-16 py-3 text-sm"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
