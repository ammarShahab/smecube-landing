import { CheckSquare } from "lucide-react";
import brandPageBanner from "../assets/brandpage-banner/freepik__talk__33250.png";

const BrandPageBanner = () => {
  const features = [
    "Facebook, Instagram, LinkedIn, Google My Business এবং YouTube",
    "সোশ্যাল অ্যাকাউন্ট সেটআপ এবং প্রোফাইল অপ্টিমাইজেশন অন্তর্ভুক্ত",
    "প্রফেশনাল কাস্টম প্রোফাইল এবং ব্যানার ইমেজ ডিজাইন",
    "কল-টু-অ্যাকশন এবং কন্টেন্ট বাটন সেটআপ",
    "প্রতিটি প্ল্যাটফর্মে (YouTube ব্যতীত) ৭টি উচ্চমানের ব্র্যান্ড পোস্ট",
    "ওয়েবসাইট ইন্টিগ্রেশন",
    "ক্রিয়েটিভ ডিজাইন",
    "ডিটেলস রিপোর্ট প্রদান",
  ];
  return (
    <div className="max-w-6xl mx-auto my-6 mt-18 flex gap-10 justify-between items-center">
      <div className="overflow-hidden flex-1 w-full h-full">
        {/* Right Side Border Accent */}
        {/* <div className="absolute top-0 right-0 h-full w-2 bg-red-500"></div> */}

        {/* Image */}
        <img src={brandPageBanner} alt="sample" className="object-cover" />
      </div>

      {/* Content */}
      <div className="my-12 h-full border-2 border-dotted border-red-600 rounded-lg shadow-md bg-white">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center bg-red-600 text-white py-3 rounded-t-lg">
          ব্র্যান্ড সেটআপ
        </h2>
        {/* Features */}
        <div className="p-6 space-y-3 text-black">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckSquare className="w-5 h-5 text-red-600 mt-1" />
              <p className="text-base">{item}</p>
            </div>
          ))}
        </div>
        {/* Button */}
        <div className="text-center mt-6 p-2">
          <button className="px-6 py-2 bg-red-600 hover:bg-black text-white font-semibold rounded-lg transition duration-300">
            অর্ডার করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandPageBanner;
