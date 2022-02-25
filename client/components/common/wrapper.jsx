export const Wrapper = ({ children }) => {
  return (
    <div className="p-4">
      <div className="fixed z-10 top-0 left-0 right-0 p-4 bg-blue-900 text-white font-bold">USU CS 4610 Midterm</div>
      <div className="mt-12">
        <div className="border-2 border-blue-800 p-4 rounded-md">
          <h1 className="text-8xl">Welcome!</h1>
          <div>
            In the <pre className="inline text-blue-700 font-extrabold">client/components</pre> directory you will find
            a folder a folder for each of the 5 questions in this midterm. Each folder contains a readme file with the
            instructions for each question. Good luck!
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
