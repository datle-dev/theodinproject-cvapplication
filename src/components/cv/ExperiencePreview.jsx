function ExperiencePreview({ items }) {
  return (
    <>
      {Object.keys(items).map((key) => {
        return (
          <div key={key}>
            <p>{items[key].title}</p>
            <p>{items[key].company}</p>
            <p>{items[key].fromMonth}</p>
            <p>{items[key].fromYear}</p>
            <p>{items[key].toMonth}</p>
            <p>{items[key].toYear}</p>
          </div>
        );
      })}
    </>
  );
}

export default ExperiencePreview;
