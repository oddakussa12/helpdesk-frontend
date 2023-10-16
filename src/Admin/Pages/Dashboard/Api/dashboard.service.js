import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/tickets/dashboard';

const useAdminDashboardService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getUserRoleCount() {
    return axiosPrivate.get(url);
  }

  return {
    getUserRoleCount
  }
}

export default useAdminDashboardService;
