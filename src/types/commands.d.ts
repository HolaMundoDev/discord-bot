import { Client, Message } from 'discord.js';

/**
 * Command object interface
 * @interface
 */
interface Command {
  /**
   * Name of the command
   * @property
   */
  name: string;
  /**
   * Description of the command
   * @property
   */
  description: string;
  /**
   * Author of the command
   * @property
   */
  author?: string;
  /**
   * Category of the command
   * @property
   */
  category: 'general' | 'moderation';
  /**
   *  Execute the command
   * @async
   * @function
   * @param { Message } message
   * @param { Client } client
   * @return { Promise<void> }
   */
  run(message: Message, client: Client): Promise<void>;
}
