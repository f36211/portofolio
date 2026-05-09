export default function MySkills() {
  const codingSkills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 65 },
    { name: "PHP", percentage: 30 },
  ];

  const professionalSkills = [
    { name: "Web Design", percentage: 95 },
    { name: "Web Development", percentage: 67 },
    { name: "Backend Development", percentage: 85 },
    { name: "React Develeopement", percentage: 60 },
  ];

  const SkillBarProf = ({ name, percentage }) => (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-bold text-sm tracking-wide">
          {name}
        </span>
        <span className="text-white font-bold text-sm">{percentage}%</span>
      </div>
      <div className="w-full h-3 border-[1px] border-[#C5138D] rounded-md overflow-hidden bg-transparent">
        <div
          className="h-full bg-[#C5138D] transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
  const SkillBarCoding = ({ name, percentage }) => (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-bold text-sm tracking-wide">
          {name}
        </span>
        <span className="text-white font-bold text-sm">{percentage}%</span>
      </div>
      <div className="w-full h-3 border-[1px] border-[#02aaef] rounded-md overflow-hidden bg-transparent">
        <div
          className="h-full bg-[#02aaef] transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );

  return (
    <div
      id="Skills"
      className="w-full bg-[#081b29] py-20 px-6 sm:px-10 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-wide">
          My <span className="text-[#02aaef]">Skills</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
          {/* Coding Skills */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              Coding <span className="text-[#02aaef]">Skills</span>
            </h3>
            <div className="border border-[#02aaef] rounded-xl p-6 sm:p-8 w-full bg-[#081b29]">
              {codingSkills.map((skill, index) => (
                <SkillBarCoding
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              Professional <span className="text-[#C5138D]">Skills</span>
            </h3>
            <div className="border border-[#C5138D] rounded-xl p-6 sm:p-8 w-full bg-[#081b29]">
              {professionalSkills.map((skill, index) => (
                <SkillBarProf
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
