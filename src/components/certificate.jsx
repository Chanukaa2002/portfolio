import React, { useState } from "react";
import { Link } from "react-router-dom";
const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Python For Beginner",
      issuer: "CODL UOM",
      date: "2024",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749092905/python_1_uom_e2gxud.png",
      verifyUrl:
        "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=kcsp4kXOAk&qrcode=1",
    },
    {
      id: 2,
      title: "Front-End Web Development",
      issuer: "CODL UOM",
      date: "2024",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749093664/fe_oiglp2.png",

      verifyUrl:
        "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=4Qk4sVWQpp",
    },
    {
      id: 3,
      title: "Web Design for Beginner",
      issuer: "CODL UOM",
      date: "2024",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749093809/we_lig8a1.png",
      verifyUrl:
        "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=ooRriETAC1",
    },
    {
      id: 4,
      title: "Linear Algebra for Machine Learning and Data Science",
      issuer: "DeepLearning.AI",
      date: "2025",
      image:
        "https://res.cloudinary.com/dlohr6hrn/image/upload/v1749288143/C1_ejvdwa.png",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/E0BM75OUC2LY",
    },
    //
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="pb-10 text-center pt-28">
        <Link
          to="/"
          className="inline-flex items-center mb-6 transition-colors text-lime-400 hover:text-lime-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to About
        </Link>
        <h1 className="mb-4 text-4xl font-bold">My Certifications</h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-300">
          A collection of my professional certifications and achievements in
          software development and technology.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="container px-4 pb-20 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCertificateClick(cert)}
              className="p-6 transition-all duration-300 transform border cursor-pointer bg-white/5 backdrop-blur-md border-white/20 rounded-xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl"
            >
              {/* Increased height container with adjusted padding */}
              <div className="flex items-center justify-center h-64 mb-4 rounded-lg bg-gradient-to-br from-lime-400/20 to-lime-600/20">
                <img
                  src={cert.image}
                  alt="Certificate Badge"
                  className="w-full h-full "
                />
              </div>

              <h3 className="mb-2 text-xl font-bold text-center text-lime-400">
                {cert.title}
              </h3>
              <p className="mb-2 text-center text-gray-300">{cert.issuer}</p>

              <div className="flex items-center justify-between"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate Details */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-lime-400">
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-gray-300">{selectedCertificate.issuer}</p>
                  <p className="text-sm text-gray-400">
                    {selectedCertificate.date}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative flex items-center justify-center mb-6 overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-lime-400/20 to-lime-600/20">
                <img
                  src={selectedCertificate.image}
                  alt="NASA Open Science Certificate"
                  className="w-full h-full "
                />
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href={selectedCertificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 font-medium text-center text-black transition-colors rounded-lg bg-lime-400 hover:bg-lime-300"
                >
                  Verify Certificate
                </a>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 transition-colors border rounded-lg border-white/20 hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
