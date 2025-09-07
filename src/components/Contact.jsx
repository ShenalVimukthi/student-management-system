const Contact = () => {
    return (
        <div className="pt-[120px]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
                        <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#008DFF] text-white px-6 py-2 rounded-full hover:bg-[#0077cc] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                        <p className="text-gray-600">123 Education Street<br />Learning City, ED 12345</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Contact Info</h3>
                        <p className="text-gray-600">
                            Email: info@studentmanagement.com<br />
                            Phone: (123) 456-7890
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
