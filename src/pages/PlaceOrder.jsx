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
        <div className="m-5 pt-5 lg:m-20 lg:pt-20 md:mt-10 md:ml-6 lg:w-1/3">
  <h1 className="font-bold text-2xl mb-6 text-gray-800">Cart Total</h1>
  <CartTotal />

  {/* Payment Method Section */}
  <div className="mt-8">
    <h1 className="font-bold text-xl mb-4 text-gray-800">Payment Method</h1>
    
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* Stripe Method */}
      <div
        className={`flex items-center gap-4 border p-4 rounded-lg shadow-sm cursor-pointer transition duration-300 hover:shadow-md ${
          method === 'stripe' ? 'bg-green-100 border-green-400' : ''
        }`}
        onClick={() => setMethod('stripe')}
      >
        <img src="" alt="stripe" className="w-12 h-auto" />
        <span className="text-gray-700 font-medium">Stripe</span>
      </div>

      {/* Razorpay Method */}
      <div
        className={`flex items-center gap-4 border p-4 rounded-lg shadow-sm cursor-pointer transition duration-300 hover:shadow-md ${
          method === 'razorpay' ? 'bg-green-100 border-green-400' : ''
        }`}
        onClick={() => setMethod('razorpay')}
      >
        <img src="" alt="razorpay" className="w-12 h-auto rounded-sm" />
        <span className="text-gray-700 font-medium">Razorpay</span>
      </div>
    </div>

    {/* Place Order Button */}
    <div className="w-full text-end mt-8">
      <button
        onClick={handlePlaceOrder} 
        className="bg-black rounded-xl text-white px-12 py-3 text-sm lg:px-16 lg:py-4 hover:bg-gray-900 transition duration-300"
      >
        Place Order
      </button>
    </div>
  </div>
</div>

</div></div>
  );
}

export default PlaceOrder;
