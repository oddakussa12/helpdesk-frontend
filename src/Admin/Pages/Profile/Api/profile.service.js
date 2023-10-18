import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/profile';

const useProfileService = () => {
  const axiosPrivate = useAxiosPrivate();

  function fetchProfile() {
    return axiosPrivate.get(`${url}`);
  }

  function updateProfile(data) {
    return axiosPrivate.patch(`${url}`, data);
  }

  return {
    fetchProfile,
    updateProfile
  }
}

export default useProfileService;
