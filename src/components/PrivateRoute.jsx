import { useSelector } from 'react-redux';
import SigninPage from './SigninPage';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const isLoggedIn = true;
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  console.log(isLoggedIn);
  console.log(isRefreshing);

  return !isLoggedIn && !isRefreshing ? (
    <SigninPage to={redirectTo} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;
