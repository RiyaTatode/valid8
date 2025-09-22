import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Loader2,
  Upload,
  FileCheck2,
  ShieldCheck,
  Home,
  CheckCircle2,
  Search,
} from "lucide-react";

const VerifyCertificate = () => {
  const [file, setFile] = useState(null);
  const [ocrData, setOcrData] = useState(null);
  const [processedImg, setProcessedImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [lineProgress, setLineProgress] = useState([0, 0, 0]); // 3 connectors

  const steps = [
    { id: 1, label: "Upload", icon: <Upload className="w-5 h-5" /> },
    { id: 2, label: "Extraction", icon: <FileCheck2 className="w-5 h-5" /> },
    { id: 3, label: "Analyzing", icon: <Search className="w-5 h-5" /> },
    { id: 4, label: "Result", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  // Animate line fill
  useEffect(() => {
    if (currentStep > 1 && currentStep <= 4) {
      const index = currentStep - 2; // line index
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setLineProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = progress > 100 ? 100 : progress;
          return newProgress;
        });
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 50); // adjust speed
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleUpload = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setLoading(true);
    setCurrentStep(2); // Start Extraction

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:8000/extract/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setOcrData(response.data.extracted_data || {});
      setCurrentStep(3); // Start Analyzing

      setTimeout(() => {
        setProcessedImg(response.data.processed_image || null);
        setCurrentStep(4); // Show Result
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to process certificate.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700 drop-shadow-md">
        Certificate Verification Workspace
      </h1>

      {/* Progress Steps */}
      <div className="flex justify-center items-center mb-12">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center relative">
            {/* Circle */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 ${
                currentStep > step.id
                  ? "bg-blue-600 border-blue-600 text-white"
                  : currentStep === step.id
                  ? "bg-blue-100 border-blue-500 text-blue-600 animate-pulse"
                  : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {currentStep > step.id ? <CheckCircle2 className="w-6 h-6" /> : step.icon}
            </div>

            {/* Label */}
            <span
              className={`ml-2 font-semibold ${
                currentStep >= step.id ? "text-blue-700" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="relative w-16 h-1 mx-4 rounded bg-gray-300 overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded transition-all duration-500"
                  style={{ width: `${lineProgress[index]}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="font-semibold text-lg flex items-center mb-4 text-gray-700">
            <Upload className="w-5 h-5 mr-2 text-indigo-600" />
            Upload Document
          </h2>
          {file ? (
            <div className="border p-4 rounded-lg bg-gray-50 text-sm">
              <p className="font-medium text-gray-700">{file.name}</p>
              {loading && (
                <div className="flex items-center mt-3 text-indigo-600">
                  <Loader2 className="animate-spin w-4 h-4 mr-2" />
                  <span>Processing document...</span>
                </div>
              )}
            </div>
          ) : (
            <label className="cursor-pointer block border-2 border-dashed border-gray-300 p-6 rounded-xl text-center text-gray-500 hover:bg-indigo-50 hover:border-indigo-400 transition">
              <input
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleUpload}
              />
              <span className="text-sm font-medium">Click or Drag & Drop to Upload</span>
            </label>
          )}
        </div>

        {/* Extracted Data */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="font-semibold text-lg flex items-center mb-4 text-gray-700">
            <FileCheck2 className="w-5 h-5 mr-2 text-green-600" />
            Extracted Data
          </h2>
          {ocrData && Object.keys(ocrData).length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border rounded-lg">
                <tbody>
                  {Object.entries(ocrData).map(([key, value]) => (
                    <tr key={key} className="border-b last:border-none">
                      <td className="px-3 py-2 font-medium text-gray-600 capitalize">{key}</td>
                      <td className="px-3 py-2 text-gray-800">
                        {value || <span className="text-gray-400">N/A</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No data extracted yet.</p>
          )}
        </div>

        {/* Verification Result */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="font-semibold text-lg flex items-center mb-4 text-gray-700">
            <ShieldCheck className="w-5 h-5 mr-2 text-blue-600" />
            Verification Result
          </h2>
          {processedImg ? (
            <div>
              <img
                src={`data:image/png;base64,${processedImg}`}
                alt="Processed Certificate"
                className="w-full rounded-lg border mb-3"
              />
              <p className="text-green-600 font-medium">
                ✅ Certificate Verified with Detected Regions
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              Upload a certificate to view verification result.
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        {processedImg && (
          <button
            onClick={() => {
              setFile(null);
              setOcrData(null);
              setProcessedImg(null);
              setCurrentStep(1);
              setLineProgress([0, 0, 0]);
            }}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition"
          >
            + Add New Certificate
          </button>
        )}
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md flex items-center gap-2 transition"
        >
          <Home className="w-5 h-5" />
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default VerifyCertificate;
