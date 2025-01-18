

export enum SupportedMessage {
    AddChat = "ADD_CHAT",
    updateChat = "UpdateChat",
}


type MessagePayload = {
    roomId: string,
    message: string,
    name: string,
    upvotes: number
}


export type OutgoingMessage = {
    type: SupportedMessage.AddChat,
    payload: MessagePayload
} | {
    type: SupportedMessage.updateChat,
    payload: Partial <MessagePayload>
}


