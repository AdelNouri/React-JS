const Count = ({ count, setCount }) => {
  return (
    <div>
      <p>شما {count} بار کلیک کرده اید</p>
      <button onClick={() => setCount(count + 1)}>افزایش</button>
    </div>
  );
};

export default Count;
