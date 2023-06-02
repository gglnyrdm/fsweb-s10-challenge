import axios from "axios";
import { toast } from "react-toastify";

export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"

export function notEkle(not) {
  return {type: NOT_EKLE, payload:not}
}

export function notSil(notId) {
  return {type: NOT_EKLE, payload:notId}
}

export const notEkleAPI = (yeniNot) => dispatch => {

  const toastEkle = toast.loading("Notunuz ekleniyor...");

  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        toast.update(toastEkle, {
          render: "Notunuz eklendi!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        dispatch(notEkle(res.data.json));
      }
    })
    .catch((error) => console.log(error));
}

export const notSilAPI = (id) => dispatch => {
  
  const toastSil = toast.loading("Notunuz Siliniyor...");

  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        toast.update(toastSil, {
          render: "Notunuz silindi!",
          type: "info",
          isLoading: false,
          autoClose: 1000,
        }) 
        dispatch(res.data.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  
}