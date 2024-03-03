import { db } from './firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  Timestamp,
  orderBy,
} from 'firebase/firestore';

export class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = collection(db, 'chats');
    this.unsub;
  }
  //adding new chat docs
  async addChat(message) {
    const response = await addDoc(this.chats, {
      message: message,
      username: this.username,
      room: this.room,
      createdAt: Timestamp.fromDate(new Date()),
    });
    return response;
  }
  //setting up a real-time listeneer to get new chats
  getChats(callback) {
    this.unsub = onSnapshot(
      query(this.chats, where('room', '==', this.room), orderBy('createdAt')),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') callback(change.doc.data());
        });
      }
    );
  }
  //updating the username
  updateUsername(username) {
    this.username = username;
    localStorage.setItem('username', username);
    console.log(`username updated to ${this.username}`);
  }
  //updating the room
  updateRoom(room) {
    if (this.room !== room) {
      this.room = room;
      localStorage.setItem('room', room);
      if (this.unsub) this.unsub();
      console.log('room updated');
    }
  }
}
