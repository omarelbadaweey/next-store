import Link from "next/link";

export default function OrderReviewPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex mt-20 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-400 p-6">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center shadow-md">
            {/* animated icon */}
            <svg
              className="w-12 h-12 text-blue-600 animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            شكراً لشرائك!
          </h1>

          <p className="text-gray-700 text-base md:text-lg max-w-xl">
            تم استلام طلبك بنجاح — الطلب الآن قيد المراجعة. سنقوم بمراجعة
            المعلومات وتأكيد الطلب عبر البريد الإلكتروني أو رسائل التطبيق.
          </p>

          <div className="flex gap-4 mt-4">


            <Link
              href="/"
              className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 bg-white font-medium hover:bg-blue-50 transition"
            >
              العودة للرئيسية
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
