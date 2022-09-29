import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeItem, storeUserDetails } from "../../../../https/storage";
import auth from "../../../../modules/service/auth";
import { Alerts } from "../alert/alertActions";
import {
  resetProfileImageState,
  updateProfileImage,
} from "../getUser/getUserSlice";
import CustomToast from "../../CustomToast";
import { loadingStop } from "../apploader";
import admin from "../../../../modules/service/admin";
import { resetPasswordInputs } from "./completeProfileSlice";

const completeProfile = createAsyncThunk(
  "user/completeProfile",
  async (profilePayload: any, thunkAPI) => {
    auth
      .completeBuyerProfile(profilePayload)
      .then((res) => {
        thunkAPI.dispatch(Alerts("profileupdated"));
        removeItem("verification");
        storeUserDetails({
          ...res.data.buyer,
          transactionCount: res.data.transactionCount,
        });
        thunkAPI.dispatch(updateProfileImage());
        // window.location.href = "/dashboard";
      })
      .catch((err) => {
        CustomToast(err.message);
      })
      .finally(() => {
        thunkAPI.dispatch(resetProfileImageState());
        thunkAPI.dispatch(loadingStop());
      });
  }
);

const updateNotification = createAsyncThunk(
  "user/updateNotification",
  async (
    {
      sms,
      email,
      email_subcription,
      push_notifications,
    }: {
      sms: boolean;
      email: boolean;
      email_subcription: boolean;
      push_notifications: boolean;
    },
    thunkAPI
  ) => {
    admin
      .updateNotification({
        sms,
        email,
        email_subcription,
        push_notifications,
      })
      .then((res) => {
        thunkAPI.dispatch(Alerts("notificationupdated"));
        storeUserDetails({
          ...res.data.buyer,
          transactionCount: res.data.transactionCount,
        });
      })
      .catch((err) => CustomToast(err.message))
      .finally(() => thunkAPI.dispatch(loadingStop()));
  }
);

const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (
    { oldPassword, newPassword }: { oldPassword: string; newPassword: string },
    thunkAPI
  ) => {
    admin
      .changePasswordLoggedIn({ oldPassword, newPassword })
      .then((res) => {
        CustomToast(res.message);
        thunkAPI.dispatch(resetPasswordInputs());
      })
      .catch((err) => {
        CustomToast(err.message?.[0], true);
      })
      .finally(() => thunkAPI.dispatch(loadingStop()));
  }
);

const uploadProfileImage = createAsyncThunk(
  "user/uploadImage",
  async ({ files }: { files: any }, thunkAPI) => {
    admin
      .uploadImage(files)
      .then((res) => {
        admin
          .updateProfileImage({ image: res?.response.data.key })
          .then((res) => {
            CustomToast(res.message);
            storeUserDetails({
              ...res.data.buyer,
              transactionCount: res.data.transactionCount,
            });
            thunkAPI.dispatch(updateProfileImage());
          })
          .catch((err) => CustomToast(err.message, true));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        thunkAPI.dispatch(resetProfileImageState());
        thunkAPI.dispatch(loadingStop());
      });
  }
);

export { completeProfile, updateNotification, updatePassword, uploadProfileImage };
