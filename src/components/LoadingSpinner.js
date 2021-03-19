import Spinner from 'react-bootstrap/Spinner';
const LoadingSpinner = ({porc}) => {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <div className="spinner-label">{porc}</div>
    </div>
  )
};
export default LoadingSpinner;