import React from "react";
import brandSetupImage from "../assets/brandpage-banner/professional-setup-brand-page-for-social-in-bd.png";

const BrandSocAccSetup = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-xl p-10">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            আমরা আপনার ব্র্যান্ডের সোশ্যাল অ্যাকাউন্ট
            <span className="text-red-600 ml-2">প্রফেশনালি</span> সেটআপ করে দেব!
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            আপনার সোশ্যাল মিডিয়া উপস্থিতি শুধু বিনোদনের জন্য নয়, এটি আপনার
            ব্যবসার জন্য একটি শক্তিশালী মার্কেটিং টুল। SME Cube আপনার ব্যবসার
            সাথে সম্পর্কিত সঠিক প্ল্যাটফর্ম নির্বাচন করে আপনার জন্য Google,
            Facebook, Instagram, LinkedIn এবং YouTube সহ বিভিন্ন প্ল্যাটফর্মে
            ব্র্যান্ড সেটআপ করে দেবে।
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            আমরা পেশাদার কনটেন্ট ক্রিয়েশন, প্রোফাইল অপ্টিমাইজেশন, এবং
            ভিজ্যুয়াল ডিজাইন এর মাধ্যমে আপনার ব্র্যান্ডের সঠিক ইমেজ তৈরি করবো।
            ফলে আপনি সহজেই আপনার টার্গেট গ্রাহকের কাছে পৌঁছাতে পারবেন।
          </p>
          {/* Features */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
                ✓
              </span>
              <span className="text-gray-800 font-medium">
                Facebook: ব্র্যান্ডেড কভার ইমেজ, প্রোফাইল ছবি এবং ফেসবুক পেজ
                সেটআপ
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full font-bold">
                ✓
              </span>
              <span className="text-gray-800 font-medium">
                Instagram: কনটেন্ট ক্যালেন্ডার, প্রোফাইল অপ্টিমাইজেশন এবং স্টোরি
                টেমপ্লেট
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
                ✓
              </span>
              <span className="text-gray-800 font-medium">
                LinkedIn: কোম্পানি প্রোফাইল, প্রোফেশনাল ব্যানার এবং প্রোফাইল
                সেটআপ
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center rounded-full font-bold">
                ✓
              </span>
              <span className="text-gray-800 font-medium">
                YouTube: চ্যানেল সেটআপ, ব্র্যান্ডেড থাম্বনেইল এবং অপ্টিমাইজড
                প্রোফাইল
              </span>
            </li>
          </ul>
          {/* CTA */}
          <div className="mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:from-red-500 hover:to-blue-600 transition duration-300">
              আজই আপনার ব্র্যান্ড সেটআপ করুন
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={brandSetupImage}
            alt="Brand Setup Illustration"
            className="max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandSocAccSetup;
