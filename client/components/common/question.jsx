export const Question = ({ title, children }) => {
  return (
    <div className="relative p-4 mt-4 shadow-md rounded-lg">
      <div className="absolute top-0 left-0 right-0 bg-blue-600 p-4 rounded-t-lg font-bold">{title}</div>
      <div className="mt-12">{children}</div>
    </div>
  );
};
