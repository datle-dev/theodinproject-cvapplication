function SkillPreview({ items }) {
  return (
    <ul>
      {Object.values(items).map((value) => {
        return <li key={crypto.randomUUID()}>{value}</li>;
      })}
    </ul>
  );
}

export default SkillPreview;
