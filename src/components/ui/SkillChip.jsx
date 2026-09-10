import { getSkillIcons, skillBrandColors } from '../../utils/skillIcons';

export default function SkillChip({ label }) {
  const icons = getSkillIcons(label);
  const brandColor = skillBrandColors[label];

  return (
    <span className="chip">
      <span className="chip-icons" aria-hidden="true">
        {icons.map((Icon, index) => (
          <Icon
            key={`${label}-${index}`}
            className="chip-icon"
            style={brandColor ? { color: brandColor } : undefined}
          />
        ))}
      </span>
      <span className="chip-label">{label}</span>
    </span>
  );
}
