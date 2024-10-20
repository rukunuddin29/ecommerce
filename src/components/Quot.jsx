import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

function Quot() {
    const { items, cartItems, currency, updateQnt } = useContext(ShopContext);
    const [statusMessage, setStatusMessage] = useState('');
    const [cartData, setCartData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    // Update cart data and total whenever cartItems change
    useEffect(() => {
        const tempData = [];
        let total = 0;

        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const productData = items.find(item => item._id === itemId);
                if (productData) {
                    const quantity = cartItems[itemId];
                    total += productData.price * quantity; // Calculate total price
                    tempData.push({
                        name: productData.name,
                        price: productData.price,
                        quantity: quantity,
                    });
                }
            }
        }

        setCartData(tempData);
        setCartTotal(total); // Set the total cost of the cart
    }, [cartItems, items]);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        formData.append("access_key", "277d4187-6323-4fd4-8837-5445788d7738");
    
        // Create a text version of cart data
        const cartText = cartData
            .map(item => `${item.name} - ${item.quantity} x ${item.price}${currency}`)
            .join(", ");
    
        // Add the cart data as a text field
        formData.append("cartItems", cartText);
    
        // Add total price to the form
        formData.append("cartTotal", `${currency}${cartTotal}`);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData)), // Convert formData to JSON
            }).then((res) => res.json());
    
            if (res.success) {
                setStatusMessage("Message sent successfully!");
                event.target.reset(); // Clear form
            } else {
                setStatusMessage("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatusMessage("Something went wrong. Please try again later.");
        }
    };
    

    return (
        
        <form onSubmit={onSubmit} className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-[#080127] font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
            </h2>
            <input
                type="text"
                name="name"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
                placeholder="Email"
                required
            />
            <input
                type="tel"
                name="phone"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-4"
                placeholder="Phone"
            />
            <textarea
                name="message"
                className="w-full h-24 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Message"
                required
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-500 hover:bg-indigo-900 bg-[#080127]">
                Send
            </button>
            {statusMessage && (
                <p className="mt-4 text-sm text-center text-gray-600">{statusMessage}</p>
            )}
        </form>
    );
}

export default Quot;
