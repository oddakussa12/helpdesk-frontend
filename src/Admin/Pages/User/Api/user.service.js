import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/users';

const useUserService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllUsers() {
    return axiosPrivate.get(url);
  }

  function createUser(data) {
    return axiosPrivate.post(url, data);
  }

  function updateUser(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteUser(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  function fetchRoles() {
    return axiosPrivate.get('/admin/roles');
  }

  function fetchLevels() {
    return axiosPrivate.get('/admin/support-level');
  }

  function fetchUsersByRole(roleName) {
    return axiosPrivate.get(`${url}/role/${roleName}`);
  }

  return {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    fetchRoles,
    fetchLevels,
    fetchUsersByRole
  }
}

export default useUserService;
