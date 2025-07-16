import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-700 mb-4">Welcome to Credit Card Portal</h1>
        <p className="text-gray-600 mb-6">
          Manage your credit cards easily and securely. Check your balance, view transactions, and more!
        </p>
        <button
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => navigate('/yes-srilankan')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;