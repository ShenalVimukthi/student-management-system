const Courses = () => {
    return (
        <div className="pt-[120px]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Cards */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-[#008DFF] bg-opacity-10"></div>
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Computer Science</h3>
                        <p className="text-gray-600">Learn programming, algorithms, and software development fundamentals.</p>
                        <button className="text-[#008DFF] font-medium hover:text-[#0077cc] transition-colors">
                            Learn More →
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-[#008DFF] bg-opacity-10"></div>
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Mathematics</h3>
                        <p className="text-gray-600">Master calculus, algebra, and advanced mathematical concepts.</p>
                        <button className="text-[#008DFF] font-medium hover:text-[#0077cc] transition-colors">
                            Learn More →
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-[#008DFF] bg-opacity-10"></div>
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Physics</h3>
                        <p className="text-gray-600">Explore mechanics, electronics, and modern physics theories.</p>
                        <button className="text-[#008DFF] font-medium hover:text-[#0077cc] transition-colors">
                            Learn More →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
