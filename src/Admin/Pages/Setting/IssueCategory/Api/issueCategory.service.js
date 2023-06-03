import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";

const url = '/admin/issue-category';

const useIssueCategoryService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllCategories() {
    return axiosPrivate.get(url);
  }

  function createCategory(data) {
    return axiosPrivate.post(url, data);
  }

  function updateCategory(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteCategory(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  return {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
  }
}

export default useIssueCategoryService;
