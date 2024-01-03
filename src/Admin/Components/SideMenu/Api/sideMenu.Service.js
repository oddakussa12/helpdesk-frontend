import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/auth/logout';

const useSideMenuService = () => {
  const axiosPrivate = useAxiosPrivate();

  function logout() {
    return axiosPrivate.post(url);
  }

  return {
    logout
  }
}

export default useSideMenuService;
