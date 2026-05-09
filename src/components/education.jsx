const Education = () => {
  const education = [
    {
      institution: "Ummul Quro Bogor",
      degree: "SMP",
      img: "https://pbs.twimg.com/profile_images/1455337011590488067/QvgRboam_400x400.jpg",
      Address:
        "Jl. Sholeh Iskandar No.1, Parakan Jaya, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310",
    },
  ];

  const Robotic = [
    {
      institution: "RoboticKIDZ Creativity Education Center",
      degree: "Kursus",
      periodrobotik: "2018-2021",
      periodweb:'2023-2026',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPZsrurYu_exXMQv1ZaoKcF-WKEnAmASNjQ&s",
      Address:
        " Ruko Bukit Cimanggu City, Jl. Bukit Cimanggu No.8, RT.02/RW.11, Cibadak, Kec. Tanah Sereal, Kota Bogor, Jawa Barat 16166",
    },
  ];

  return (
    <div className="bg-[#081b29] min-h-screen py-10 md:py-20 px-4 md:px-8">
      <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-20">
        EDUCATION
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg w-190 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPZsrurYu_exXMQv1ZaoKcF-WKEnAmASNjQ&s"
              alt=""
              className="w-50 h-50 rounded-xl"
            />
            {Robotic.map((edu, index) => (
              <div key={index} className="">
                <h2 className="text-white text-xl md:text-4xl font-semibold mb-2">
                  {edu.degree}
                </h2>
                <h3 className="text-gray-300 text-lg">{edu.institution}</h3>
                <h3 className="text-gray-300 text-lg">Robotik {edu.periodrobotik}</h3>
                <h3 className="text-gray-300 text-lg">Web {edu.periodweb}</h3>
                <h3 className="text-gray-300 text-lg">{edu.Address}</h3>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-white text-center text-5xl font-bold">
          Sekolah Menengah Pertama
        </h1>
        <div className="flex items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg w-190 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <img
              src="https://pbs.twimg.com/profile_images/1455337011590488067/QvgRboam_400x400.jpg"
              alt=""
              className="rounded-xl w-50 h-50"
            />
            {education.map((edu, index) => (
              <div key={index} className="">
                <h2 className="text-white text-xl md:text-4xl font-semibold mb-2">
                  {edu.degree}
                </h2>
                <h3 className="text-gray-300 text-lg">{edu.institution}</h3>
                <h3 className="text-gray-300 text-lg">{edu.Address}</h3>
              </div>
            ))}
          </div>
          
        </div>
        <h1 className="text-white text-center text-5xl font-bold">
          Sekolah Dasar
        </h1>
          <div className="flex items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg w-190 m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshTPNO5ORtymKwCbLIUpT7BlL7VvKkPY4ZQ&s"
              alt=""
              className="rounded-xl w-50 h-50"
            />
            {education.map((edu, index) => (
              <div key={index} className="">
                <h2 className="text-white text-xl md:text-4xl font-semibold mb-2">
                  SD
                </h2>
                <h3 className="text-gray-300 text-lg">Yayasan Pendidikan Insan Kamil Bogor</h3>
                <h3 className="text-gray-300 text-lg">Jl. Raya Dramaga No.9, RT.01/RW.01, Margajaya, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16116</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
