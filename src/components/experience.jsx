const Experience = () => {
  const experiences = [
    {
      title: "Asisten Administrasi Magang",
      company: "PT Borcelle",
      period: "Juli 2022 - Desember 2022",
      responsibilities: [
        "Mengelola arsip dokumen perusahaan secara rapi dan sistematis.",
        "Membantu penyusunan laporan harian dan bulanan untuk tim manajemen.",
        "Mengatur jadwal rapat dan mengirimkan undangan kepada peserta terkait.",
        "Berhasil meningkatkan efisiensi pengarsipan hingga 30% dengan penggunaan sistem elektronik.",
      ],
    },
    {
      title: "Panitia Administrasi",
      company: "Kegiatan Sekolah SMK Borcelle",
      period: "Januari 2022 - Juni 2022",
      responsibilities: [
        "Menyusun data peserta kegiatan sekolah secara terperinci.",
        "Mengatur logistik dan kebutuhan administrasi selama acara berlangsung.",
        "Berhasil menyelesaikan tugas dalam waktu singkat dengan tingkat akurasi tinggi.",
      ],
    },
  ];

  return (
    <div className="bg-[#081b29] min-h-screen py-10 md:py-20 px-4 md:px-8">
      <h1 className="text-white text-center text-5xl font-bold mb-20">
        Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
              {exp.title}
            </h2>
            <h3 className="text-gray-300 text-lg mb-1">{exp.company}</h3>
            <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
            <ul className="text-gray-200 list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
