import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isEditing } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: () => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateUser };
}
