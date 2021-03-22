const GoBack = ({path, justifyContent, alignItems}) => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
      }}
      className="m-5"
    >
      <a href={path}><h6>Go Back</h6></a>
    </div>
  );
};

export default GoBack;