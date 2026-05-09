import React from "react";

const Journey = () => {
  const educationData = [
    {
      period: "2018 - 2026",
      title: "Kursus",
      subtitle: "RoboticKIDZ Creativity Education Center",
      description:
        "Robotik (2018-2021) & Web (2023-2026). Ruko Bukit Cimanggu City, Jl. Bukit Cimanggu No.8, Bogor.",
    },
    {
      period: "SMP",
      title: "Sekolah Menengah Pertama",
      subtitle: "Ummul Quro Bogor",
      description:
        "Jl. Sholeh Iskandar No.1, Parakan Jaya, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310.",
    },
    {
      period: "SD",
      title: "Sekolah Dasar",
      subtitle: "Yayasan Pendidikan Insan Kamil Bogor",
      description:
        "Jl. Raya Dramaga No.9, RT.01/RW.01, Margajaya, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16116.",
    },
  ];

  const experienceData = [
    {
      period: "Juli 2022 - Des 2022",
      title: "Asisten Administrasi Magang",
      subtitle: "PT Borcelle",
      description:
        "Mengelola arsip dokumen perusahaan secara rapi dan sistematis. Membantu penyusunan laporan harian dan bulanan untuk tim manajemen. Mengatur jadwal rapat dan mengirimkan undangan. Berhasil meningkatkan efisiensi pengarsipan hingga 30%.",
    },
    {
      period: "Jan 2022 - Juni 2022",
      title: "Panitia Administrasi",
      subtitle: "Kegiatan Sekolah SMK Borcelle",
      description:
        "Menyusun data peserta kegiatan. Mengatur logistik dan kebutuhan administrasi selama acara berlangsung. Berhasil menyelesaikan tugas dalam waktu singkat dengan tingkat akurasi tinggi.",
    },
  ];

  return (
    <div
      id="Journey"
      className="w-full bg-[#081b29] py-20 px-6 sm:px-10 min-h-screen flex flex-col items-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          My <span className="text-[#02aaef]">Journey</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
          {/* Education Column */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="border-l-[2px] border-[#02aaef] ml-3 pr-2">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-8 pb-10 last:pb-0">
                  <div className="absolute left-[-11px] top-6 w-5 h-5 rounded-full bg-[#02aaef] border-[4px] border-[#081b29]"></div>
                  <div className="border border-[#02aaef] rounded-xl p-6 bg-[#081b29] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 text-[#02aaef] font-semibold text-sm">
                      <span className="text-[10px]">■</span>
                      <span>{item.period}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1 text-white">
                      {item.title}
                    </h4>
                    <h5 className="text-[#02aaef] text-md font-semibold mb-3">
                      - {item.subtitle}
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="border-l-[2px] border-[#C5138D] ml-3 pr-2">
              {experienceData.map((item, index) => (
                <div key={index} className="relative pl-8 pb-10 last:pb-0">
                  <div className="absolute left-[-11px] top-6 w-5 h-5 rounded-full bg-[#C5138D] border-[4px] border-[#081b29]"></div>
                  <div className="border border-[#C5138D] rounded-xl p-6 bg-[#081b29] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 text-[#C5138D] font-semibold text-sm">
                      <span className="text-[10px]">■</span>
                      <span>{item.period}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1 text-white">
                      {item.title}
                    </h4>
                    <h5 className="text-[#C5138D] text-md font-semibold mb-3">
                      - {item.subtitle}
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
