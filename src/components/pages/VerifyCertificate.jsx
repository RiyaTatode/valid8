import React, { useState, useEffect } from 'react';
import {
  FileText,
  CloudUpload,
  CheckCircle2,
  ArrowLeft,
  Loader2,
  Edit,
  Save,
  Check,
  X,
  ShieldCheck
} from 'lucide-react';
import Footer from '../layout/Footer';


const VerifyCertificate = () => {
  const [step, setStep] = useState('upload');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',                                                                                                                
    graduationDate: '',
    certificateId: ''
  });
  const [verificationResult, setVerificationResult] = useState(null);
  const [ocrData, setOcrData] = useState(null);
  const [qualityChecks, setQualityChecks] = useState([
    { name: 'Verifying with central university database', status: 'pending' },
    { name: 'Checking the hashcode (if it has a QR)', status: 'pending' },
    { name: 'AI advanced anomaly detection scan', status: 'pending' },
  ]);

  useEffect(() => {
    if (ocrData) {
      setFormData({
        name: ocrData.name,
        institution: ocrData.institution,
        graduationDate: ocrData.graduationDate,
        certificateId: ocrData.certificateId,
      });
      setStep('details');
    }
  }, [ocrData]);

  useEffect(() => {
    if (step === 'qualityCheck') {
      const runChecks = async () => {
        for (let i = 0; i < qualityChecks.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 1500));
          setQualityChecks(prevChecks => {
            const newChecks = [...prevChecks];
            newChecks[i].status = 'complete';
            return newChecks;
          });
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        const mockPercentage = Math.floor(Math.random() * (100 - 85 + 1)) + 85;
        setVerificationResult({
          status: 'Verified',
          percentage: mockPercentage,
        });
        setStep('result');
      };
      runChecks();
    }
  }, [step]);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setStep('scanning');
    setTimeout(() => {
      const mockOcrData = {
        name: "Samantha Jane Miller",
        institution: "State University of Technology",
        graduationDate: "10/05/2023",
        certificateId: "CERT-XYZ-987654321",
      };
      setOcrData(mockOcrData);
    }, 2000);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('qualityCheck');
  };

  const handleBack = () => {
    if (step === 'details') {
      setStep('upload');
      setUploadedFile(null);
      setOcrData(null);
    } else if (step === 'result') {
      setStep('details');
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 'upload': return 'Upload Certificate';
      case 'scanning': return 'Scanning Document';
      case 'details': return 'Review & Edit';
      case 'qualityCheck': return 'Quality Checks';
      case 'result': return 'Verification Result';
      default: return 'Certificate Verification';
    }
  };

  const renderContent = () => {
    switch (step) {
      case 'upload':
        return (
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-6 bg-gray-50 transition-all hover:bg-gray-100">
            <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
              <CloudUpload className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-700 mb-1">Drag and drop or click to upload</p>
            <p className="text-gray-500 text-sm mb-4">PDF, JPG, PNG, WEBP</p>
            <input
              type="file"
              className="hidden"
              id="file-upload"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
            />
            <label
              htmlFor="file-upload"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer shadow-md"
            >
              Browse Files
            </label>
          </div>
        );
      case 'scanning':
        return (
          <div className="text-center p-8 bg-blue-50 text-blue-800 rounded-xl border border-blue-200 shadow-sm">
            <div className="mx-auto w-16 h-16 mb-4 text-blue-500">
              <Loader2 className="w-16 h-16 mx-auto animate-spin" />
            </div>
            <h3 className="text-xl font-bold mb-2">Scanning Document...</h3>
            <p className="text-gray-600">Extracting details from your certificate.</p>
          </div>
        );
      case 'details':
        return (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <Edit className="w-5 h-5 mr-2" /> Review and Edit
              </h4>
              <p className="text-gray-600 text-sm">Cross-check the information below.</p>
            </div>
            {['name', 'institution', 'graduationDate', 'certificateId'].map((field) => (
              <div key={field} className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleFormChange}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            ))}
            <div className="flex justify-end pt-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center"
              >
                <Save className="w-5 h-5 mr-2" /> Submit
              </button>
            </div>
          </form>
        );
      case 'qualityCheck':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Loader2 className="w-16 h-16 mx-auto animate-spin text-blue-500" />
              <h3 className="text-xl font-bold mt-4 text-gray-900">Running Checks...</h3>
              <p className="text-gray-600 mt-1">This may take a moment.</p>
            </div>
            <ul className="space-y-3">
              {qualityChecks.map((check, index) => (
                <li
                  key={index}
                  className={`flex items-center p-4 rounded-lg shadow-sm ${
                    check.status === 'complete' ? 'bg-green-50' : 'bg-gray-50'
                  }`}
                >
                  {check.status === 'complete' ? (
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                  ) : (
                    <Loader2 className="w-5 h-5 text-blue-500 animate-spin mr-3" />
                  )}
                  <span className={`text-sm ${check.status === 'complete' ? 'font-medium' : ''}`}>
                    {check.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'result':
        const isVerified = verificationResult.percentage > 90;
        return (
          <div
            className={`text-center p-8 rounded-xl border shadow-sm ${
              isVerified ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'
            }`}
          >
            <div className={`mx-auto w-16 h-16 mb-4 ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
              {isVerified ? (
                <CheckCircle2 className="w-16 h-16 mx-auto" />
              ) : (
                <X className="w-16 h-16 mx-auto" />
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">
              {isVerified ? 'Verification Successful!' : 'Verification Failed'}
            </h3>
            <p className="text-lg">
              Score: <span className="font-bold">{verificationResult.percentage}%</span>
            </p>
            <p className="mt-3 text-gray-600">
              {isVerified ? 'The certificate is authentic.' : 'The certificate could not be verified.'}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const steps = [
    { name: 'Upload', status: step === 'upload' ? 'current' : step !== 'upload' ? 'complete' : 'upcoming' },
    { name: 'Scan', status: step === 'scanning' ? 'current' : step === 'details' || step === 'qualityCheck' || step === 'result' ? 'complete' : 'upcoming' },
    { name: 'Review', status: step === 'details' ? 'current' : step === 'qualityCheck' || step === 'result' ? 'complete' : 'upcoming' },
    { name: 'Checks', status: step === 'qualityCheck' ? 'current' : step === 'result' ? 'complete' : 'upcoming' },
    { name: 'Result', status: step === 'result' ? 'current' : 'upcoming' },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case 'complete': return 'bg-blue-600';
      case 'current': return 'bg-blue-400';
      case 'upcoming': return 'bg-gray-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-800">Valid8</span>
            </div>
            <a
              href="/"
              className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-4 py-8">
        {step !== 'upload' && step !== 'scanning' && (
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back
          </button>
        )}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{getStepTitle()}</h1>
            <p className="text-gray-600">
              {step === 'upload' && 'Upload your certificate to begin.'}
              {step === 'scanning' && 'Extracting details from your document.'}
              {step === 'details' && 'Verify the extracted information.'}
              {step === 'qualityCheck' && 'Running security and authenticity checks.'}
              {step === 'result' && 'Your verification is complete.'}
            </p>
          </div>
          <nav aria-label="Progress" className="mb-6">
            <ol className="flex items-center justify-between">
              {steps.map((stepItem, index) => (
                <li key={stepItem.name} className="flex-1">
                  <div className="flex flex-col items-center">
                    <span className={`h-2 w-full rounded-full ${getStatusClasses(stepItem.status)} transition-colors`} />
                    <span className={`mt-2 text-center text-xs ${stepItem.status === 'current' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                      {index + 1}. {stepItem.name}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          {renderContent()}
        </div>
      </div>

      {/* Imported Footer */}
      <Footer />
    </div>
  );
};

export default VerifyCertificate;
