function Rating(props) {
  const rating = Math.round(parseFloat(props.children));

  switch (rating) {
    case 0:
      return <p>☆☆☆☆☆</p>;
    case 1:
      return <p>★☆☆☆☆</p>;
      break;
    case 2:
      return <p>★★☆☆☆</p>;
      break;
    case 3:
      return <p>★★★☆☆</p>;
      break;
    case 4:
      return <p>★★★★☆</p>;
      break;
    case 5:
      return <p>★★★★★</p>;
      break;
  }
}

export default Rating;
