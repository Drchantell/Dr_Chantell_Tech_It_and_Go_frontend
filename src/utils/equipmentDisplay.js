const icons = {
  "3D Printing": "🖨️",
  Robotics: "🤖",
  Computers: "💻",
  Coding: "⌨️",
  "Digital Fabrication": "⚙️",
  Entrepreneurship: "💡",
  "Emerging Technology": "🚀",
};

export function getEquipmentIcon(category) {
  return icons[category] || "🧰";
}
