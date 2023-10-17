import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/dashboard';

const useAdminDashboardService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getUserRoleCount() {
    return axiosPrivate.get(`${url}/user_count`);
  }

  function getTicketCount() {
    return axiosPrivate.get(`${url}/ticket_count`);
  }

  return {
    getUserRoleCount,
    getTicketCount
  }
}

export default useAdminDashboardService;
