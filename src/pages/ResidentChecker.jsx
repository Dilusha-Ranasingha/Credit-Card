import { useNavigate } from 'react-router-dom';

const ResidentChecker = () => {

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-red-700 mb-6">Are You a Sri Lankan Resident?</h2>

        <div className="flex justify-center gap-6">
          <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
            onClick={() => navigate('/yes-srilankan')}
            >
            Yes
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-200"
            onClick={() => navigate('/no-srilankan')}
            >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResidentChecker;
