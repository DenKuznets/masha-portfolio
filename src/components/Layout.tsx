import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout = () => {
  return (
      <div>
          <ScrollRestoration />
          <Outlet />
      </div>
  );
}

export default Layout