import { ChatUI } from './ui';
import { Chatroom } from './chat';

//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');
const chatrooms = document.querySelector('.chat-rooms');

const currentUser = localStorage.getItem('username') ?? 'anon';

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', currentUser);

//event listeners
//add new message
newChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newMessage = newChatForm.message.value.trim();

  chatroom
    .addChat(newMessage)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

//update username
newNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  //update name via chatroom
  chatroom.updateUsername(newName);
  //reset the form
  newNameForm.reset();
  //show the hide message
  updateMessage.innerText = `Your name was updated to ${newName}`;
  updateMessage.classList.replace('hidden', 'visible');
  setTimeout(() => updateMessage.classList.replace('visible', 'hidden'), 3000);
});

//update current chat room
chatrooms.addEventListener('click', (e) => {
  console.log(e.target.id);
  if (e.target.tagName === 'BUTTON') {
    chatUI.clear();
    chatroom.updateRoom(e.target.id);
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

//get chats and render
chatroom.getChats((chat) => chatUI.render(chat));
