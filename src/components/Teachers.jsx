const Teachers = () => {
    return (
        <div className="pt-[120px]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teachers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Teacher Cards */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-[#008DFF] bg-opacity-10"></div>
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Dr. Sarah Johnson</h3>
                        <p className="text-gray-600">Computer Science Professor</p>
                        <p className="text-sm text-gray-500">Ph.D. in Computer Science with 10+ years of teaching experience.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-[#008DFF] bg-opacity-10"></div>
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Prof. Michael Brown</h3>
                        <p className="text-gray-600">Mathematics Department Head</p>
                        <p className="text-sm text-gray-500">20+ years experience in advanced mathematics education.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-[#008DFF] bg-opacity-10"></div>
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">Dr. Emily Chen</h3>
                        <p className="text-gray-600">Physics Professor</p>
                        <p className="text-sm text-gray-500">Specializes in quantum mechanics and particle physics.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
