import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";

const url = '/admin/support-level';

const useSupportLevelService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllLevels() {
    return axiosPrivate.get(url);
  }

  function createLevel(data) {
    return axiosPrivate.post(url, data);
  }

  function updateLevel(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteLevel(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  return {
    getAllLevels,
    createLevel,
    updateLevel,
    deleteLevel
  }
}

export default useSupportLevelService;
