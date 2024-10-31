import { createVNode, render, App } from 'vue';
import MessageComponent from './Message.vue';

let messageContainer: HTMLElement | null = null;

const Message = (options: {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}) => {
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    document.body.appendChild(messageContainer);
  }

  const container = document.createElement('div');
  messageContainer.appendChild(container);

  const vm = createVNode(MessageComponent, {
    ...options,
    onClose: () => {
      render(null, container);
      messageContainer?.removeChild(container);
    },
  });

  render(vm, container);
};

['info', 'success', 'warning', 'error'].forEach(type => {
  Message[type] = (message: string, duration?: number) => {
    return Message({ message, type: type as any, duration });
  };
});

export default {
  install: (app: App) => {
    app.config.globalProperties.$message = Message;
  },
};