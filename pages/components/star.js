function Star({ post, likedPosts, setLikedPosts }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (likedPosts.includes(post.id)) {
      setClicked(true);
    }
  }, [likedPosts, post.id]);

  const handleClick = () => {
    if (!clicked) {
      // Call the like function or any other action here
      setLikedPosts([...likedPosts, post.id]);
      setClicked(true);
    }
  };

  return (
    <i
      className={`fa fa-star me-2 ${clicked ? "text-warning" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    ></i>
  );
}
