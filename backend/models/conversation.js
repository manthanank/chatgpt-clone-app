class Conversation {
  constructor(id, title, messages = [], createdAt = new Date()) {
    this.id = id;
    this.title = title;
    this.messages = messages;
    this.createdAt = createdAt;
  }
}

export default Conversation;