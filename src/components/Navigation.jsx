function Navigation({ onClick }) {
  const pages = [
    'Info',
    'Education',
    'Skills',
  ];

  return (
    pages.map((page) => {
      return (
        <button
          key={page}
          type="button"
          onClick={onClick}
          data-key={page}
        >
          {page}
        </button>
      );
    })
  );
}

export default Navigation;
