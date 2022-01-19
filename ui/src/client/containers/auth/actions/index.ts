import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile,
} from 'firebase/auth';
import { auth } from '../../../../index';
import { updateAuth } from '../../../slices/auth_page';
import { updateNotification } from '../../../slices/notification_control';

export const update_user = (auth_data: any) => async (dispatch: any) => {
  const { name } = auth_data;
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log('Profile updated');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log({ errorMessage });
      });
  }
};

export const registration = (registration_data: any) => async (dispatch: any) => {
  const { email, password, name } = registration_data;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      dispatch(update_user(registration_data));
      dispatch(updateNotification({
        isShowNotification: true,
        message: `User ${name} was added successful`,
        variant: 'success',
      }));
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log({ errorMessage });
    });
};

export const logging = (logging_data: any) => async (dispatch: any) => {
  const { email, password } = logging_data;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      dispatch(updateAuth({
        current_user: {
          email: user.email,
          name: user.displayName,
          email_verified: user.emailVerified,
          uid: user.uid,
        },
        isLogging: true,
      }));
      window.location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log({ errorMessage });
    });
};

export const log_out = () => async (dispatch: any) => {
  await signOut(auth)
    .then(() => {
      console.log('log out successful');
      window.location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log({ errorMessage });
    });
};
