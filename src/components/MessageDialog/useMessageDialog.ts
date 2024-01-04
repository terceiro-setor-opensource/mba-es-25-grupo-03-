import { useMemo, useEffect, useState } from 'react';

import { messageEventManager } from '~/utils';

import success from '~/assets/lottie/success.json';
import error from '~/assets/lottie/error.json';
import warning from '~/assets/lottie/warning.json';

export interface IMessage {
    type: 'success' | 'error' | 'warning';
    title?: string;
    description: string;
    onClose?: () => void;
}

export function useMessageDialog() {
    const [message, setMessage] = useState<IMessage>({} as IMessage);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleAddMessage(newMessage: IMessage) {
            setMessage(newMessage);
            setIsVisible(true);
        }

        messageEventManager.on('showMessage', handleAddMessage);

        return () => {
            messageEventManager.removeListener('showMessage', handleAddMessage);
        };
    }, []);

    function handleClose() {
        setMessage({} as IMessage);
        setIsVisible(false);

        if (message.onClose) message.onClose();
    }

    const messageSource = useMemo(() => {
        switch (message.type) {
            case 'success':
                return success;
            case 'error':
                return error;
            case 'warning':
                return warning;
            default:
                return '';
        }
    }, [message]);

    return {
        isVisible,
        message,
        messageSource,
        handleClose,
    };
}
