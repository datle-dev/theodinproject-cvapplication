function SocialPreview({ linkedin, github }) {
  return (
    <>
      <div>
        <a href={'https://www.linkedin.com/in/' + linkedin}>{linkedin}</a>
      </div>
      <div>
        <a href={'https://www.github.com/' + github}>{github}</a>
      </div>
    </>
  );
}

export default SocialPreview;
