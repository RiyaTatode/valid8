// src/components/History.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from '../layout/Sidebar';
import { Menu } from 'lucide-react';
import { Eye } from 'lucide-react'; // lucide-react eye icon


// Mock data for demonstration purposes
const mockCertificates = [
  {
    certificateId: "CERT-987654",
    studentName: "Jane Doe",
    course: "Advanced React",
    issueDate: "2023-08-15",
    status: "Valid",
    fileUrl: null,
  },
  {
    certificateId: "CERT-123456",
    studentName: "John Smith",
    course: "Web Development",
    issueDate: "2023-07-22",
    status: "Valid",
    fileUrl: null,
  },
  {
    certificateId: "CERT-234567",
    studentName: "Emily White",
    course: "UX Design Principles",
    issueDate: "2023-09-01",
    status: "Pending",
    fileUrl: null,
  },
  {
    certificateId: "CERT-345678",
    studentName: "Michael Brown",
    course: "Data Science Fundamentals",
    issueDate: "2023-06-10",
    status: "Valid",
    fileUrl: null,
  },
  {
    certificateId: "CERT-456789",
    studentName: "Sarah Davis",
    course: "Cybersecurity Basics",
    issueDate: "2023-09-20",
    status: "Pending",
    fileUrl: null,
  },
  {
    certificateId: "CERT-567890",
    studentName: "David Wilson",
    course: "Mobile App Development",
    issueDate: "2023-05-05",
    status: "Valid",
    fileUrl: null,
  },
  {
    certificateId: "CERT-678901",
    studentName: "Laura Johnson",
    course: "Full-Stack Web Development",
    issueDate: "2023-08-30",
    status: "Valid",
    fileUrl: null,
  },
  {
    certificateId: "CERT-789012",
    studentName: "Chris Evans",
    course: "Cloud Computing",
    issueDate: "2023-09-12",
    status: "Valid",
    fileUrl: null,
  },
];

const History = ({ certificates = mockCertificates }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = location.state?.filter || "all";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    let newFilteredCerts = certificates;
    if (filter === "verified") {
      newFilteredCerts = certificates.filter((c) => c.status === "Valid");
    } else if (filter === "pending") {
      newFilteredCerts = certificates.filter((c) => c.status !== "Valid");
    }

    if (searchQuery.trim() !== "") {
      newFilteredCerts = newFilteredCerts.filter(
        (c) => c.certificateId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCertificates(newFilteredCerts);
  }, [certificates, filter, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Valid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <header className="flex items-center justify-between mb-6 md:mb-10 border-b border-gray-200 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">History</h1>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Search bar */}
          <div className="flex items-center space-x-2 mb-6 p-2 bg-white rounded-xl shadow-sm border border-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search by Certificate ID"
              value={searchQuery}
              onChange={handleSearch}
              className="flex-1 py-2 px-1 bg-transparent border-none focus:outline-none placeholder-gray-400 text-gray-900"
            />
          </div>

          {/* Certificate List (Mobile View) */}
          <div className="lg:hidden space-y-4">
  {filteredCertificates.length > 0 ? (
    filteredCertificates.map((cert) => (
      <div
        key={cert.certificateId}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all flex flex-col"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold text-gray-900">{cert.studentName}</p>
            <p className="text-sm text-gray-500 mb-2">{cert.course}</p>
          </div>

          {/* Eye button */}
          <button
            onClick={() => setSelectedCert(cert)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="View certificate details"
          >
            <Eye size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between text-xs font-medium mt-2">
          <span className="text-gray-400">{cert.certificateId}</span>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(
              cert.status
            )}`}
          >
            {cert.status}
          </span>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500 py-8">No certificates found.</p>
  )}
</div>

          {/* Certificate Table (Desktop View) */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
            {filteredCertificates.length > 0 ? (
              <table className="min-w-full table-auto text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-left">
                    <th className="px-6 py-3 font-semibold rounded-tl-xl">Certificate ID</th>
                    <th className="px-6 py-3 font-semibold">Student Name</th>
                    <th className="px-6 py-3 font-semibold">Course / File</th>
                    <th className="px-6 py-3 font-semibold">Issue Date</th>
                    <th className="px-6 py-3 font-semibold">Status</th>
                    <th className="px-6 py-3 font-semibold rounded-tr-xl">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCertificates.map((cert) => (
                    <tr key={cert.certificateId} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">{cert.certificateId}</td>
                      <td className="px-6 py-4">{cert.studentName}</td>
                      <td className="px-6 py-4">{cert.course}</td>
                      <td className="px-6 py-4">{cert.issueDate}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(cert.status)}`}>
                          {cert.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="p-2 rounded-full text-indigo-600 hover:bg-indigo-50 transition-colors"
                          aria-label="View details"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500 py-8">No certificates found.</p>
            )}
          </div>
        </div>

        {/* Details Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Certificate Details</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(selectedCert).map(([key, value]) => (
                  <div key={key} className="bg-gray-100 p-4 rounded-lg">
                    <strong className="text-xs font-semibold text-gray-500 uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>
                    <div className="text-base font-medium text-gray-800 mt-1">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default History;