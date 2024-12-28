import CyberpunkH1 from "../components/CyberpunkTitle/CyberpunkH1";
import CyberpunkSkillTile from "../components/CyberpunkSkillTile/CyberpunkSkillTile";
import CyberTechLines from "../components/CyberpunkTechlines/CyberpunkTechLines";
import CyberpunkSearch from "../components/CyberpunkSearch/CyberpunkSearch";
import CyberpunkSkillSection from "../components/CyberpunkSkillSection/CyberpunkSkillSection";
import { useState } from "react";

export default function SkillsPage({ skills }) {
  const [filteredSkills, setFilteredSkills] = useState(skills);

  function handleSearchSkills(event) {
    const searchTerm = event.target.value.toLowerCase();

    //No search term set, return the original array
    if (searchTerm === "") {
      setFilteredSkills(skills);
    } else {
      let newSkillsFilteredArr = [{ "Skills Found": [] }];

      // //Filter the array based on the search term
      filteredSkills.filter((skill) => {
        let skillsArr = Object.values(skill)[0];

        skillsArr.forEach((currentSkill) => {
          if (currentSkill.toLowerCase().includes(searchTerm)) {
            newSkillsFilteredArr[0]["Skills Found"].push(currentSkill);
          }
        });

        return newSkillsFilteredArr;
      });

      setFilteredSkills(newSkillsFilteredArr);
    }
  }

  return (
    <>
      <section className="flex flex-col w-fit h-fit mb-8">
        <CyberpunkH1 text="Skills" cssClasses="text-6xl mb-7" />
        <div className="flex justify-center items-center m-auto w-full h-fit pr-5">
          <CyberpunkSearch
            skillsToFilter={filteredSkills}
            filterList={handleSearchSkills}
          />
        </div>
      </section>
      <div className="flex justify-center items-center m-auto w-ful h-fit">
        <CyberTechLines cssClasses="opacity-40 absolute top-1/2" />
      </div>
      {filteredSkills.length === 0 ? (
        <CyberpunkSkillTile skillKey="1" SkillTitle="No Skills to display" />
      ) : (
        ""
      )}
      <section className="w-full h-fit p-4 mt-[10em] relative grid">
        {filteredSkills.map((currentSkill) => (
          <CyberpunkSkillSection
            sectionTitle={Object.keys(currentSkill)[0]}
            skillsArr={Object.values(currentSkill)}
          />
        ))}
      </section>
    </>
  );
}
