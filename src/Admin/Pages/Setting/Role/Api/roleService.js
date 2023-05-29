import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";

const url = '/admin/roles';

const useRoleService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllRoles() {
    return axiosPrivate.get(url);
  }

  function createRole(data) {
    return axiosPrivate.post(url, data);
  }

  function updateRole(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteRole(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  return {
    getAllRoles,
    createRole,
    updateRole,
    deleteRole
  }
}

export default useRoleService;
