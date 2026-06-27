

import { useState } from "react"
import { skills } from "../data/portfolio"
import type { Skill } from "../data/portfolio"

const CATEGORY_LABELS: Record<string, string> = {
  all: "すべて",
  game: "ゲーム",
  web: "Web",
  language: "言語",
  // 必要な分は都度追加する。
}

interface LevelConfig {
  max: number
  label: string
  color: string
}

const LEVEL_CONFIG: LevelConfig[] = [
  { max: 40, label: "学習中", color: "#888" },
  { max: 60, label: "基礎あり", color: "#60A5FA" },
  { max: 80, label: "実践可", color: "#A78BFA" },
  { max: 100, label: "得意", color: "#F472B6" },
]

function getLevelConfig(level: number): LevelConfig {
  return (LEVEL_CONFIG.find((l) => level < l.max) ??LEVEL_CONFIG.at(-1)!
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const config = getLevelConfig(skill.level)
    return(
        <div className="skill-card">
            <div className="skill-card-header">
                <div className="skill-card-title-row">
                    <span className="skill-card-name">{skill.name}</span>
                    <span className="skill-card-version">{skill.version}</span>
                </div>
            </div>
        </div>
    )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", ...new Set(skills.map((s) => s.category))];
  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span>Skills</span>
        </h2>
        <p className="section-sub">技術スタック</p>
        <div className="skills-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-filter-btn 
                            ${activeCategory === cat ? "active" : "" }`}
              onClick={() => setActiveCategory(cat)}
            >
              {CATEGORY_LABELS[cat] ?? cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}