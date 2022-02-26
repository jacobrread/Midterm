export const Question2 = () => {
  const users = [
    { id: 1, name: 'Abby Zollinger', email: 'abby@usu.edu', isAdmin: true },
    { id: 2, name: 'Bruce Young', email: 'bruce@usu.edu', isAdmin: false },
    { id: 3, name: 'Charles Xavier', email: 'charles@usu.edu', isAdmin: false },
    { id: 4, name: 'David Willhelm', email: 'david@usu.edu', isAdmin: false },
    { id: 5, name: 'Emily Victorschtein', email: 'emily@usu.edu', isAdmin: true },
    { id: 6, name: 'Frans Umlaut', email: 'frans@usu.edu', isAdmin: true },
    { id: 7, name: 'Gerald Truman', email: 'gerald@usu.edu', isAdmin: false },
    { id: 8, name: 'Harry Styles', email: 'harry@usu.edu', isAdmin: false },
  ];

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{User(user)}</div>;
      })}
    </div>
  );
};

const User = (user) => {
  if (user.isAdmin) {
    return (
      <>
        <div className="m-2">
          <p style={{ color: 'green' }}>Name: {user.name}</p>
          <p style={{ color: 'green' }}>Email: {user.email}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="m-2">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      </>
    );
  }
};
