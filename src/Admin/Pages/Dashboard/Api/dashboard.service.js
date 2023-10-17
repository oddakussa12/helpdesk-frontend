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

  function getTicketPerformance() {
    return axiosPrivate.get(`${url}/support_performance`);
  }

  return {
    getUserRoleCount,
    getTicketCount,
    getTicketPerformance
  }
}

export default useAdminDashboardService;
