import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
          
          <Link
            href="/payment"
            className="inline-block w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors"
          >
            Make Another Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

