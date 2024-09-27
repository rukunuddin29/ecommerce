import React from 'react';

function Call() {
  const phoneNumber = '9163362535'; // Your phone number
  const email = 'your-email@example.com'; // Your email address

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}?cc=${email}`;
  };

  return (
    <div className='z-50 h-auto w-40 bg-white p-4'>
      <h2 className='text-lg font-bold mb-2'>Contact Us</h2>
      <button
        onClick={handleCall}
        className='bg-blue-500 text-white rounded p-2 mb-2 w-full'
      >
        Call
      </button>
      <button
        onClick={handleEmail}
        className='bg-green-500 text-white rounded p-2 w-full'
      >
        Email
      </button>
    </div>
  );
}

export default Call;
