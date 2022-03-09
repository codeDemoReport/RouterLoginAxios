import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { Istate, IprivateRouter } from '../interfaces';

function PrivateRoute(props: IprivateRouter) {
  const access_token = localStorage.getItem('access_token');
  const auth = useSelector((state: Istate) => state.auth);
  return (
    <>
      <Route
        path={props.path}
        render={(...propsRoute) => {
          let ComponentRoute = props.component;
          if (auth.user) return <ComponentRoute {...propsRoute} {...props} />;
          else return <Redirect to={{ pathname: '/login' }} />;
        }}
      />
    </>
  );
}

export default PrivateRoute;
