import { IMessage } from '~/components/MessageDialog';
import EventManager from '~/lib/EventManager';

export const messageEventManager = new EventManager();

export function showMessage(message: IMessage) {
    messageEventManager.emit('showMessage', message);
}
