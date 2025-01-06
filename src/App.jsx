import { useState } from 'react';
import { AlertCircle, ArrowLeft, Send } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setSubmitted(true);
    setError('');
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-md mx-4 bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center mb-6">
          <button className="text-red-600 hover:text-red-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-red-600 text-2xl font-bold text-center flex-grow">LeJangui</h1>
        </div>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Forgot password</h2>
            <p className="text-gray-600 mb-6">
              Enter your email and we'll send you instructions on how to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Recover Password
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Check your email</h2>
            <p className="text-gray-600">
              We've sent password reset instructions to <span className="font-semibold">{email}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;