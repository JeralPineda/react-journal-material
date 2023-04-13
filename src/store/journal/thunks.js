import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from './journalSlice';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth; //uid for user

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`)); //create (referencia) doc
    await setDoc(newDoc, newNote); //insert
    newNote.id = newDoc.id; //obtener el id y agregarla a la nueva nota

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};
